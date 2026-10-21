#!/usr/bin/env node

import degit from "degit";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import { spawnSync } from "node:child_process";

const TEMPLATE_REPO =
  "Rahat7242872/react-native-nativewind-starter";

async function main() {
  const rl = createInterface({
    input: stdin,
    output: stdout,
  });

  try {
    let projectName = process.argv[2];

    if (!projectName) {
      projectName = await rl.question(
        "Enter your project name: "
      );
    }

    projectName = projectName.trim();

    // Validate project name
    if (!/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(projectName)) {
      throw new Error(
        "Invalid project name. Use letters, numbers, hyphens, or underscores."
      );
    }

    const targetDir = path.resolve(process.cwd(), projectName);

    // Prevent overwriting an existing folder
    if (fs.existsSync(targetDir)) {
      throw new Error(
        `Folder "${projectName}" already exists. Choose another name.`
      );
    }

    console.log("\n🚀 Creating your Raddsoft React Native project...\n");

    const emitter = degit(`${TEMPLATE_REPO}#main`, {
      cache: false,
      force: false,
    });

    await emitter.clone(targetDir);

    // Update package.json with the new project name
    const packagePath = path.join(targetDir, "package.json");

    if (fs.existsSync(packagePath)) {
      const packageJson = JSON.parse(
        fs.readFileSync(packagePath, "utf8")
      );

      packageJson.name = projectName
        .toLowerCase()
        .replace(/_/g, "-");

      // A generated project should not remain private
      // if the template's package.json has private: true.
      packageJson.private = true;

      fs.writeFileSync(
        packagePath,
        JSON.stringify(packageJson, null, 2) + "\n",
        "utf8"
      );
    }

    console.log("✅ Template downloaded successfully!");

    const answer = await rl.question(
      "\nInstall dependencies now? (Y/n): "
    );

    if (answer.trim().toLowerCase() !== "n") {
      console.log("\n📦 Installing dependencies...\n");

      const result = spawnSync("npm", ["install"], {
        cwd: targetDir,
        stdio: "inherit",
      });

      if (result.error) {
        throw result.error;
      }

      if (result.status !== 0) {
        throw new Error(
          "Dependency installation failed. Run npm install manually."
        );
      }
    }

    console.log("\n🎉 Project created successfully!\n");
    console.log("Next steps:\n");
    console.log(`  cd ${projectName}`);

    if (answer.trim().toLowerCase() === "n") {
      console.log("  npm install");
    }

    console.log("  npx expo start\n");
    console.log("Built by Raddsoft LLC");
    console.log("https://raddsoftllc.com\n");
  } catch (error) {
    console.error(
      "\n❌ Error:",
      error instanceof Error ? error.message : String(error)
    );

    process.exitCode = 1;
  } finally {
    rl.close();
  }
}

main();
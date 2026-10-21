# Raddsoft React Native Starter

**Build beautiful mobile applications faster with React Native, Expo Router, NativeWind and TypeScript.**

Created and maintained by **Raddsoft LLC**.

A reusable React Native starter template designed to help developers start new mobile projects quickly, with an organized folder structure, reusable UI components, responsive layouts and a customizable design system.

🌐 Website: https://raddsoftllc.com

---

## ✨ Features

- ⚛️ React Native with Expo
- 🧭 Expo Router file-based navigation
- 🎨 NativeWind / Tailwind CSS styling
- 📱 Responsive layouts for phones and tablets
- 🧩 Reusable Button, Input and Card components
- 🔐 Login and registration screen scaffolding
- 🌐 API integration starter
- 🛠️ TypeScript support
- 🎨 Customizable colors and branding
- 📁 Organized, scalable project structure
- 🚀 Easy project setup

> Authentication, API services and other integrations may require configuration before production use.

---

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| React Native | Mobile application development |
| Expo | Development and build tools |
| Expo Router | File-based navigation |
| NativeWind | Tailwind-style UI |
| TypeScript | Type safety |
| Lucide React Native | Icons |

---

## 📦 Getting Started

### Requirements

Install these tools first:

- Node.js (LTS recommended)
- npm
- Git
- Expo Go or a compatible development build

### Option 1: Use This GitHub Template

1. Open this repository on GitHub.
2. Click **Use this template**.
3. Select **Create a new repository**.
4. Enter your project name.
5. Clone your new repository.

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
npm install
npx expo start
```

Replace the example repository URL with your actual GitHub repository URL.

### Option 2: Create a Project Using the CLI

Once the Raddsoft CLI package is published to npm, you can create a new project using:

```bash
npx create-rn-nativewind my-first-app
```

Then run:

```bash
cd my-first-app
npx expo start
```

The CLI downloads the starter template and can install dependencies for you.

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   └── (auth)/
│       ├── login.tsx
│       └── register.tsx
├── components/
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       └── Card.tsx
├── services/
│   └── api.ts
├── hooks/
├── constants/
└── types/

assets/
global.css
tailwind.config.js
metro.config.js
babel.config.js
nativewind-env.d.ts
app.json
package.json
.env.example
```

Some folders and files may be added as the template evolves.

---

## 🎨 Customize Your App

### Change the Theme

Update your Tailwind configuration and shared color constants to customize the app's colors.

Example brand palette:

- Primary: `#5B43E8`
- Dark: `#17172F`
- Background: `#F8FAFC`
- White: `#FFFFFF`

### Change the Branding

Update the app name, logo, website and company information to match your project.

The starter includes Raddsoft LLC branding as the original template creator. You can customize the visible branding for your own application.

### Configure Environment Variables

Copy `.env.example` to `.env` and configure your development API URL if your project uses one.

Example:

```env
EXPO_PUBLIC_API_URL=http://YOUR_LOCAL_IP:5000/api
```

Use your computer's LAN IP address when testing on a physical phone. Do not put passwords, private API keys or other secrets in `EXPO_PUBLIC_` variables.

---

## 🧩 Reusable Components

The starter is designed to keep common UI elements reusable.

Example:

```tsx
import { Button } from "@/components/ui/Button";

<Button
  title="Get Started"
  onPress={() => console.log("Started")}
/>
```

Adjust the import path and props to match your actual component implementation.

---

## ▶️ Development Commands

```bash
npm install
npx expo start
npx expo start --clear
npx expo-doctor
npx tsc --noEmit
```

Available platform commands may include:

```bash
npm run android
npm run ios
npm run web
```

These commands depend on the scripts configured in your `package.json`.

---

## 🔒 Production Readiness

Before releasing an app, configure and test:

- Authentication and server-side authorization
- API endpoints and error handling
- Secure token storage
- Form validation
- Environment configuration
- App icons, splash screen and app identifiers
- Expo SDK and dependency compatibility
- Production builds and device testing

The starter provides a foundation; it does not guarantee production-ready security or a fully configured backend.

---

## 🤝 Contributing

Contributions, bug reports and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make and test your changes.
4. Submit a pull request describing the changes.

Please include clear reproduction steps when reporting bugs.

---

## 📄 License

This project is distributed under the **MIT License** if the repository includes an MIT `LICENSE` file.

Review the license and third-party package terms before redistributing the template.

---

## 🏢 About Raddsoft LLC

**Raddsoft LLC** provides technology and digital solutions, including web and mobile application development and software services.

Website: https://raddsoftllc.com

**Built to help developers start faster and build better.**

© Raddsoft LLC. All rights reserved.# react-native-nativewind-starter

import { router } from "expo-router";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Layers3,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react-native";
import React from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const features = [
  {
    title: "Reusable Components",
    description: "Ready-to-use buttons, inputs and cards.",
    icon: Layers3,
    iconColor: "#6750E8",
    iconBg: "bg-violet-100",
  },
  {
    title: "Responsive Design",
    description: "Beautiful layouts on mobile and tablet.",
    icon: Smartphone,
    iconColor: "#2563EB",
    iconBg: "bg-blue-100",
  },
  {
    title: "Secure Authentication",
    description: "A starting point for login and registration.",
    icon: ShieldCheck,
    iconColor: "#059669",
    iconBg: "bg-emerald-100",
  },
  {
    title: "Developer Friendly",
    description: "Organized code for faster development.",
    icon: Code2,
    iconColor: "#DB2777",
    iconBg: "bg-pink-100",
  },
];

export default function IndexPage() {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 28 }}
      >
        <View
          className={`w-full self-center px-5 pt-4 ${
            isTablet ? "max-w-5xl px-10" : ""
          }`}
        >
          {/* Company Header */}
          <View className="mb-7 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600">
                <Code2 size={25} color="#FFFFFF" />
              </View>

              <View className="ml-3">
                <Text className="text-lg font-black tracking-tight text-slate-900">
                  Raddsoft
                  <Text className="text-indigo-600"> LLC</Text>
                </Text>
                <Text className="mt-0.5 text-xs text-slate-500">
                  Technology · Innovation · Growth
                </Text>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => router.push("/")}
              className="rounded-xl border border-indigo-100 bg-white px-4 py-3"
            >
              <Text className="font-bold text-indigo-700">Sign In</Text>
            </TouchableOpacity>
          </View>

          {/* Hero */}
          <View className="mb-8 overflow-hidden rounded-[30px] bg-indigo-700 p-6">
            <View className="absolute -right-12 -top-12 h-48 w-48 rounded-full border-[30px] border-white/10" />
            <View className="absolute -bottom-14 -right-4 h-36 w-36 rounded-full bg-violet-400/20" />

            <View className="mb-5 flex-row items-center self-start rounded-full bg-white/15 px-3 py-2">
              <Sparkles size={15} color="#FDE68A" />
              <Text className="ml-2 text-xs font-bold text-white">
                BUILT FOR DEVELOPERS
              </Text>
            </View>

            <Text
              className={`font-black leading-tight text-white ${
                isTablet ? "text-5xl" : "text-4xl"
              }`}
            >
              Build Better{"\n"}
              <Text className="text-violet-200">Mobile Apps.</Text>
            </Text>

            <Text className="mt-4 max-w-xl text-sm leading-6 text-indigo-100">
              Start your next project with a reusable React Native foundation
              powered by Expo, NativeWind and TypeScript.
            </Text>

            <View className="mt-6 flex-row flex-wrap">
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => router.push("/")}
                className="mr-3 mb-3 flex-row items-center rounded-2xl bg-white px-5 py-4"
              >
                <Text className="mr-2 font-extrabold text-indigo-700">
                  Get Started
                </Text>
                <ArrowRight size={18} color="#4338CA" />
              </TouchableOpacity>

              <View className="mb-3 flex-row items-center rounded-2xl border border-white/20 px-4 py-4">
                <Zap size={17} color="#FDE68A" />
                <Text className="ml-2 text-sm font-semibold text-white">
                  Ready to Customize
                </Text>
              </View>
            </View>

            <View className="mt-3 flex-row items-center">
              <CheckCircle2 size={16} color="#C4B5FD" />
              <Text className="ml-2 text-xs text-indigo-100">
                Clean code · Reusable UI · Responsive layout
              </Text>
            </View>
          </View>

          {/* Features */}
          <View className="mb-5">
            <Text className="text-2xl font-black text-slate-900">
              Everything you need
            </Text>
            <Text className="mt-2 text-sm leading-5 text-slate-500">
              A reliable starting point for your next application.
            </Text>
          </View>

          <View className="flex-row flex-wrap" style={{ marginHorizontal: -6 }}>
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <View
                  key={feature.title}
                  className="mb-3 px-1.5"
                  style={{ width: isTablet ? "25%" : "50%" }}
                >
                  <View className="h-full min-h-[175px] rounded-3xl border border-slate-100 bg-white p-4">
                    <View
                      className={`mb-4 h-12 w-12 items-center justify-center rounded-2xl ${feature.iconBg}`}
                    >
                      <Icon size={23} color={feature.iconColor} />
                    </View>

                    <Text className="text-sm font-extrabold leading-5 text-slate-900">
                      {feature.title}
                    </Text>

                    <Text className="mt-2 text-xs leading-5 text-slate-500">
                      {feature.description}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>

          {/* CTA */}
          <View className="mt-5 rounded-3xl border border-indigo-100 bg-white p-5">
            <View className="flex-row items-center">
              <View className="h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50">
                <Sparkles size={23} color="#5B43E8" />
              </View>

              <View className="ml-3 flex-1">
                <Text className="font-extrabold text-slate-900">
                  Your next idea starts here
                </Text>
                <Text className="mt-1 text-xs leading-5 text-slate-500">
                  Customize the starter and make it yours.
                </Text>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => router.push("/")}
              className="mt-5 flex-row items-center justify-center rounded-2xl bg-indigo-600 py-4"
            >
              <Text className="mr-2 font-bold text-white">
                Create Your Project
              </Text>
              <ArrowRight size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {/* Company Footer */}
          <View className="mt-8 items-center border-t border-slate-200 pt-5">
            <Text className="text-sm font-extrabold text-slate-800">
              Raddsoft LLC
            </Text>
            <Text className="mt-1 text-center text-xs leading-5 text-slate-500">
              Technology solutions for a digital world.
            </Text>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => router.push("/(auth)/login")}
              className="mt-3"
            >
              <Text className="text-xs font-semibold text-indigo-600">
                raddsoftllc.com
              </Text>
            </TouchableOpacity>

            <Text className="mt-4 text-center text-[11px] text-slate-400">
              © {new Date().getFullYear()} Raddsoft LLC. All rights reserved.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

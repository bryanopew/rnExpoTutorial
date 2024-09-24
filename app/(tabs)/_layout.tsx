import { Tabs } from "expo-router";
import React from "react";
import { Image, StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#019081",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={styles.icon}
              source={
                focused
                  ? require("../../assets/icons/home_active_36.png")
                  : require("../../assets/icons/home_36.png")
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="todo"
        options={{
          title: "Todo",
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={styles.icon}
              source={
                focused
                  ? require("../../assets/icons/todo_active_36.png")
                  : require("../../assets/icons/todo_36.png")
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="memo"
        options={{
          title: "Memo",
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={styles.icon}
              source={
                focused
                  ? require("../../assets/icons/memo_active_36.png")
                  : require("../../assets/icons/memo_36.png")
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}

// icon style
const styles = StyleSheet.create({
  icon: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
});

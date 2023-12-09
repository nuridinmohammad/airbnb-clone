import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const TAB_ITEM = [
  { title: "Home", icon: "home", name: "home" },
  { title: "Explore", icon: "compass", name: "explore" },
  { title: "Profile", icon: "person-circle", name: "profile" },

  
];

type TabItemType = {
  title: string;
  icon?: string | React.ReactNode | any;
  name: string;
};

const Layout = () => {
  return (
    <Tabs>
      {TAB_ITEM.map((item:TabItemType) => (
        <Tabs.Screen
        name={item.name}
        options={{
          title: item.title,
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={
                focused ? item.icon : `${item.icon}-outline`
              } // Specify the icon name
              size={size}
              color={color}
            />
          ),
        }}
      />
      ))}
    </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({});

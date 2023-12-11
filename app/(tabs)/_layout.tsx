import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const TAB_ITEM = [
  { title: "Explore", icon: "search", name: "index" },
  { title: "Wishlist", icon: "heart", name: "wishlist" },
  { title: "Trip", icon: "md-navigate-circle", name: "trip" },
  { title: "Inbox", icon: "chatbubble-ellipses", name: "inbox" },
  { title: "Profile", icon: "person-circle", name: "profile" },
];

type TabItemType = {
  title: string;
  icon?: string | React.ReactNode | any;
  name: string;
};

const Layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor:Colors.primary 
    }}>
      {TAB_ITEM.map((item: TabItemType) => (
        <Tabs.Screen
        key={item.name}
          name={item.name}
          
          options={{
            headerTitleStyle: {
              fontWeight: "bold",
            },
            // tabBarLabel:item.title,
            title: item.title,
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? item.icon : `${item.icon}-outline`} // Specify the icon name
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

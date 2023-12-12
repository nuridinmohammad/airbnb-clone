import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
  const { isSignedIn, signOut } = useAuth();
  return (
    <View style={styles.container}>
      {!isSignedIn ? (
        <Link href={"/(modals)/login"}>
          <Text>Login</Text>
        </Link>
      ) : (
        <View>
          <Button title="Log out" onPress={() => signOut()} />
          <Text>Your Login</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

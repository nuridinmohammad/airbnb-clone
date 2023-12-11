import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Link style={styles.title} href={'/(modals)/login'}>Login</Link>
      <Link style={styles.title} href={'/(modals)/booking'}>Bookings</Link>
      <Link style={styles.title} href={'/listing/323'}>Listings</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

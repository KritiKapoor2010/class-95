import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Signin from './screens/SignIn';
import Profile from './screens/Profile';
import Post from './screens/Post';
import Logout from './screens/LogOut';
import Donation from './screens/Donation';
import CreatePost from './screens/CreatePost';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

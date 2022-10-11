import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Fit.go</Text>
      <Text>Start Swiping to find your workout partner!</Text>
      <StatusBar style="auto" />
      <Button title="Login" onPress={() => navigation.navigate('Login')}/>
      <Button title="Sign Up" onPress={() => navigation.navigate('Sign Up')}/>
    </View>
    
  );
}

function SignUpScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sign Up!</Text>
      <Button title="Go Back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function LoginScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sign in!</Text>
      <Button title="Go Back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default App;



import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';

const Stack = createNativeStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    "Graphik-Bold": require("./assets/fonts/GraphikBold.otf"),
    "Graphik-Medium": require("./assets/fonts/GraphikMedium.otf"),
    "Graphik-Regular": require("./assets/fonts/GraphikRegular.otf"),
  })


  if (!loaded) {
    return (
      <View style={styles.container}>
        <Text>Font Not Loaded</Text>
        <StatusBar style="auto" />
      </View>
    )
  }


  return (
    <>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
  <StatusBar style="light"/>

  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50
  },
});

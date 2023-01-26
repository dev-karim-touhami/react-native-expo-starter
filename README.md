# React-Native-Expo-Starter 🚀
![grafik](https://user-images.githubusercontent.com/114869997/214873746-7ece2434-1488-43ef-a3e8-c535c0912f93.png)

These are instructions to initialize a React-Native project with ```Expo```, ```Nativewind``` and ```React Navigation```

## 1. Install expo
Source: https://docs.expo.dev/get-started/installation/

```bash
npm install --global expo-cli
```

## 2. Initialize a new expo project with the expo CLI
```bash
npx create-expo-app my-app

cd my-app
```

## 3. Install ```natviewind``` and it's peer dependency ```tailwindcss```.
Source: https://www.nativewind.dev/quick-starts/expo
```bash
npm install nativewind
npm install --dev tailwindcss
```

### 3.1. Setup Tailwind CSS
Run ```npx tailwindcss init``` to create a ```tailwind.config.js``` file

Add the paths to all of your component files in your tailwind.config.js file. Remember to replace ```<custom directory>``` with the actual name of your directory e.g. ```screens```, ```components```.

```
// tailwind.config.js

module.exports = {
- content: [],
+ content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3.2. Add the Babel plugin
Modify your ```babel.config.js```

```
// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
+   plugins: ["nativewind/babel"],
  };
};
```

## Thats it 🎉
Start writing code!

```
import { StatusBar } from 'expo-status-bar';
import React from 'react';
- import { StyleSheet, Text, View } from 'react-native';
+ import { Text, View } from 'react-native';

export default function App() {
  return (
-   <View style={styles.container}>
+   <View className="flex-1 items-center justify-center bg-white">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

- const styles = StyleSheet.create({
-   container: {
-     flex: 1,
-     backgroundColor: '#fff',
-     alignItems: 'center',
-     justifyContent: 'center',
-   },
- });
```

## Run app and start development server

```
npx expo start
```

*Note: When running the app for the first time tailwind might not be recognized directly so you have to clear the caches:*
```
npx expo start -c
```

## 4. Set up React Navigation
Source: https://reactnavigation.org/docs/getting-started/

### 4.1 Installation
Install the following packages:
```
npm install @react-navigation/native
```

### 4.2 Installing dependencies into the Expo project
In your project directory run:
```
npx expo install react-native-screens react-native-safe-area-context
```

Install the native stack navigator libary:
```
npm install @react-navigation/native-stack
```

### 4.3 Configure the navigator
```
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

## 4.4 Moving between Screens
```
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
```

## 4.5 Navigate to a route multiple times
```
<Button
  title="Go to Details... again"
  onPress={() => navigation.push('Details')}
/>
```

## 4.6 Going back
```
<Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
<Button title="Go back" onPress={() => navigation.goBack()} />
```

## 4.7 React Navigation summary
- `navigation.navigate('RouteName')` pushes a new route to the native stack navigator if it's not already in the stack, otherwise it jumps to that screen.
- We can call `navigation.push('RouteName')` as many times as we like and it will continue pushing routes.
- The header bar will automatically show a back button, but you can programmatically go back by calling `navigation.goBack()`. On Android, the hardware back button just works as expected.
- You can go back to an existing screen in the stack with `navigation.navigate('RouteName')`, and you can go back to the first screen in the stack with `navigation.popToTop()`.
- The `navigation` prop is available to all screen components (components defined as screens in route configuration and rendered by React Navigation as a route).

## This starter guide is constantly being improved and not a final version!

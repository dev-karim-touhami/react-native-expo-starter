# react-native-expo-starter

This are instructions to initialize a React-Native project with Expo and Nativewind

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
yarn add nativewind
yarn add --dev tailwindcss
```
or

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

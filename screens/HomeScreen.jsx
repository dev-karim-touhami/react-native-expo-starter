import React from "react";
import { Text, View, Button, ScrollView } from "react-native";
import PostComponent from '../components/PostComponent';

const HomeScreen = ({ navigation }) => {
    return (
      <View className="flex-1 items-center justify-center bg-white dark:bg-black">
        {/* <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        /> */}
        <ScrollView className="w-full p-5 bg-white">
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
        </ScrollView>
      </View>
    );
}

export default HomeScreen;
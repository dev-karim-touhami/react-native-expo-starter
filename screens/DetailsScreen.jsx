import React from "react";
import { Text, View, Button } from "react-native";

const DetailsScreen = ({ navigation }) => {
    // const { itemId, otherParam } = route.params;
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Details Screen</Text>
        {/* <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}
        <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      </View>
    );
}

export default DetailsScreen;
import React from "react";
import { Text, View, Button } from "react-native";

const PostComponent = () => {
    return(
        <View className="p-5 border rounded-md mb-2 bg-white">
            <Text className="text-2xl font-bold">Title</Text>
            <Text className="text-base">Subtitle</Text>
            <Text className="text-sm">This is sample text for a description of a article.</Text>
            <Button
            title="Details"/>
        </View>    
    );
} 

export default PostComponent;
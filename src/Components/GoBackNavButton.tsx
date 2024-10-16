import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";


export interface IGoBack {
    onPress?: ()=> void;

}


export const GoBack = ({onPress}:IGoBack) => {
    
    return (
        <Pressable onPress={onPress}>
            <Ionicons name="chevron-back-circle" size={30} color="#fff"  />

        </Pressable>
    )
}

import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Entypo, AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import {GoBack} from "./GoBackNavButton"

interface IHeaderParams {
  goToPrevious?: () => void;
  search?: () => void;
  cartLength?: number;
  gotoCartScreen?: () => void;
}

export const HeadersComponents = ({
  goToPrevious,
  search,
  cartLength,
  gotoCartScreen,
}: IHeaderParams) => {
  const [searchInput, setSearchInput] = useState(""); 
  return (
    <View
      style={{
        backgroundColor: "#000",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <GoBack onPress={goToPrevious}/>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 7,
          gap: 10,
          backgroundColor: "white",
          borderRadius: 10,
          height: 38,
          flex: 1,
        }}>
        <Pressable style={{padding:10}} onPress={search}> 
            <AntDesign name="search1" size={22} color="black" />
        </Pressable>
        <TextInput value={searchInput} onChangeText={setSearchInput} placeholder="Enter Items" />
      </Pressable>

      <Pressable onPress={gotoCartScreen}>
        <View style={styles.cartNum}>
          <Text style={{color:"white"}}>{cartLength}</Text>
        </View>
        <MaterialIcons name="shopping-cart" size={24} color="white" style={{padding:5, marginTop:3}}/>
      </Pressable>
    </View>
  );
};

const styles=StyleSheet.create ({
  cartNum:{
    position: "absolute",
    top:-5,
    right: -5,
    borderRadius:20,
    width:20,
    height:20,
    justifyContent:"center",
    alignItems:"center",
    zIndex:9999,
    color:"#fff",
    backgroundColor:"orange"
  }
})

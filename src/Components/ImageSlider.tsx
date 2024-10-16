import { View, Text, Dimensions, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { useInterval } from '../Hooks/UseInterval';


interface ImageProps {
    images: string[]
}

const Max_Width = Dimensions.get("screen").width;

const ImageSlider = ({images}:ImageProps ) => {
const animation = useRef(new Animated.Value(0));
const [currentImage, setCurrentImage] = useState(0);
const handleAnimation = () =>{
    let newCurrentImage = currentImage +1;

    if (newCurrentImage >= images.length) {
        newCurrentImage = currentImage*0;
    }

    Animated.spring(animation.current, {
        toValue: -(Dimensions.get("screen").width * newCurrentImage),
        useNativeDriver:true,

    }).start();

    setCurrentImage(newCurrentImage);

    
}

useInterval(()=>handleAnimation(), 2000)
    return ( 
    <>
    </>
  )
}

export default ImageSlider
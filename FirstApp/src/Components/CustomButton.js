
import React from "react";
import {View,StyleSheet,Button, Pressable,Text} from 'react-native'

const CustomButton = (Props)=>{
    return(
        <>
        <View>
            <Pressable onPress={Props.onPress} style={styles.button} 
            android_ripple={{
                color:'blue',
                borderless:false,
            }}>
        <Text>{Props.title}</Text> 
            </Pressable>
        </View>
        </>
    );
}
const styles = StyleSheet.create({
    button: {
        margin: 70,
        paddingHorizontal:50,
        paddingVertical:10,
        borderWidth:1,
        borderColor:'#ffffff',backgroundColor:'#44ff33',
    },
})

export default CustomButton;
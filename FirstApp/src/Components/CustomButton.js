
import React from "react";
import {View,StyleSheet,Button} from 'react-native'

const CustomButton = (Props)=>{
    return(
        <>
        <View>
        <Button 
            style={styles.button} 
            title={Props.title}
            onPress={Props.onPress}
            
            ></Button>
        </View>
        </>
    );
}
const styles = StyleSheet.create({
    button: {
        margin: 100,
    },
})

export default CustomButton;
import React from 'react';
import { View,Text ,StyleSheet,Button,Linking} from 'react-native';

const Base = ()=>{
    return(
<View style={styles.body}>
    <Text style={styles.text}>For test react native code</Text>
    <Button title ='show' onPress={()=>{Linking.openURL('https://youtube.com')}}></Button>
</View>
    );
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',

    },
    text:{
        color:'#ffffff',
        fontSize:20,
        fontStyle:'italic',
    }
    
});

export default Base;
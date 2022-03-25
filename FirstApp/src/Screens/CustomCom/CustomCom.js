
import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet, Button, Alert, ToastAndroid, Modal,Pressable } from 'react-native'
import CustomButton from "../../Components/CustomButton";
const App = () => {
    const [name, SetName] = useState('');
    const [submitted, SetSubmmited] = useState(false);
    const onPressButton = ()=>{
            if(name.length>3){
               submitted&&
                ToastAndroid.showWithGravityAndOffset(
                    'OK',
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                    10,500
                )
                SetSubmmited(!submitted);
            }else{
            
                
                Alert.alert('Warning','The name must be loanger than 3 chars',
                [
                    {text:'OK' , onPress:()=>{console.warn('OK')}},
                    {text:'Cancel',onPress:()=>(console.warn('cancel'))}
                ],{cancelable:true,onDismiss:()=>{console.warn('dismissed')}}
                )


            }
    }
    return (<>
        <View style={styles.body}>
       
            <Text style={styles.text}>Please wirte your name:</Text>
            <TextInput
                style={styles.input}
                placeholder="up to you"
                onChangeText={(value) => { SetName(value) }}
                keyboardType="numeric">
            </TextInput>

<CustomButton title={submitted? 'clear' : 'submit'}  onPress={onPressButton}>

</CustomButton>
            {submitted?
            <Text
                style={styles.text}
            >Youe name is {name}</Text>:null
        }
        </View></>);
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
       
    },
    text: { fontSize: 20 },
    input: {
        width: '50%',
        borderRadius: 10,
        borderColor: '#ffaaff',
        borderWidth: 2,
        fontSize: 20,
        margin:10,
    },
});

export default App;

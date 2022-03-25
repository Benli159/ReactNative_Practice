
import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet, Button, Alert, ToastAndroid, Modal,Pressable } from 'react-native'

const App = () => {
    const [name, SetName] = useState('');
    const [submitted, SetSubmmited] = useState(false);
    const [showMdal,SetModal] = useState(false);

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
                SetModal(true);
                /*
                Alert.alert('Warning','The name must be loanger than 3 chars',
                [
                    {text:'OK' , onPress:()=>{console.warn('OK')}},
                    {text:'Cancel',onPress:()=>(console.warn('cancel'))}
                ],{cancelable:true,onDismiss:()=>{console.warn('dismissed')}}
                )
*/

            }
    }
    return (<>
        <View style={styles.body}>
            <Modal 
            visible={showMdal}
            transparent
            onRequestClose={()=>(SetModal(false))} //when click 'back' button ** Android phone must has this Props 
            animationType='fade'
            hardwareAccelerated  // speed up
            >
                <View style={styles.centered_view}>
                    <View style={styles.warning_modal}>
                        <View style={styles.warning_title}>
                            <Text style={styles.warning_title_text}>Warning!!</Text>
                        </View>
                        <View style={styles.body}>
                            <Text style={styles.warning_body_text}>The name must be loanger than 3 chars</Text>
                        </View>
                        <Pressable
              onPress={() => SetModal(false)}
              style={styles.warning_button}
              android_ripple={{color:'#fff'}}
            >
              <Text style={styles.warning_button_text}>OK</Text>
            </Pressable>
                    </View>
                </View>
            </Modal>
            <Text style={styles.text}>Please wirte your name:</Text>
            <TextInput
                style={styles.input}
                placeholder="up to you"
                onChangeText={(value) => { SetName(value) }}
                keyboardType="numeric">
            </TextInput>
            <Button 
            style={styles.button} 
            title={submitted? 'clear' : 'submit'}
            onPress={onPressButton}></Button>
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
    button: {
        margin: 100,
    },
centered_view:{
    backgroundColor:'#00000099',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    
},
warning_modal:{
    backgroundColor:'#ffffff',
    width:300,
    height:300,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,


},
warning_title:{
    height:70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7766ff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
},
warning_title_text:{
   fontSize:25,
   color:'#ffffff',

},
warning_body:{
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
},
warning_body_text:{
    fontSize:22,

},
warning_button:{
    backgroundColor:'#00ffff',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    alignItems:'center'
  },
  warning_button_text:{
    fontSize:22,
    margin:5,

  }
});

export default App;

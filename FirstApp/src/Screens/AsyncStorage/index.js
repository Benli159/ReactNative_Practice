import React, { useState } from "react";
import { Alert, View } from "react-native";
import { TextInput, TouchableOpacity,StyleSheet,Text,AsyncStorage } from "react-native";
import { useNavigation } from '@react-navigation/native' 
import 'react-native-gesture-handler';
import CustomButton from "../../Components/CustomButton";

const AsyncStorageScreen = ()=>{
    const navigation = useNavigation();
    const[name,SetName] = useState([]);
    
    const SetData =async ()=>{
        if(name.length ==0){
            Alert.alert('Warning','Cannot be Empty');

        }else{
            try{
                var user={
                    Name:name
                }
             //   await AsyncStorage.setItem('Username',`{user:'${name}'}`);
      // await AsyncStorage.clear();
               await AsyncStorage.mergeItem('Username',JSON.stringify(user));
                navigation.navigate('AsyncHome_Srceen');
            }catch(err){
                console.log(err);
            }
        }
    }
    return (
      <View style={styles.body} >
          <Text style={styles.text}>Async Storage</Text>
          <TextInput   style={styles.input} placeholder="Enter Data" onChangeText={(value)=>SetName(value)}></TextInput>
          <CustomButton title="Submit"  onPress={SetData}></CustomButton>
        </View>
    )
}
const styles = StyleSheet.create({
body:{
    flex:1,
alignItems:'center',
justifyContent:'center',
backgroundColor:'#0080ff'},
text:{fontSize:30,
    color:'#ffffff'},
input:{
    width:300,
    borderWidth:1,
    borderColor:'#555',
borderRadius:10,
backgroundColor:'#ffffff',
textAlign:'center',
fontSize:20,
marginVertical:100,

},
btn:{
    margin:15,
    backgroundColor:'#2277ff',
    padding:5,
    width:100,
    alignItems:'center',
    borderRadius:5
},

data:{},
})
export default AsyncStorageScreen;
import React from "react";
import {StyleSheet,View,Button, Pressable,Text,SafeAreaView} from 'react-native'
import Navigation from './src/Navigation/Stack'
//import Navigation from './src/Navigation/Tab'
import 'react-native-gesture-handler';
const App = ()=>{
return(

 
<Navigation/>

)  
}
{/*
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
     margin: 15, 
    backgroundColor:'lightblue',
    width:200,
    height:50,
    alignItems:'center',
    justifyContent:'center'
  }
});
*/}
export default App;
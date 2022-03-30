import React,{useState,useEffect} from "react";
import { Button, View,Text } from "react-native";
const HookEffectScreen =()=>{
const [count,setCount] = useState(0);
useEffect(()=>{
    if(count==10)
    console.warn('test use effect', count);
})

    return(
    <View style={{flex:1,margin:100}}>
        <Text style={{fontSize:70}}>{count}</Text>
        <Button title="Update" onPress={()=>{setCount(count+1)}}></Button>
    </View>)
}
export default HookEffectScreen;
import React, { useEffect ,useState} from "react";
import { AsyncStorage, Text, View ,StyleSheet} from "react-native";

const AsyncHomeSrceen =()=>{
    const[mess,SetMess] = useState('');

    useEffect(()=>{
        getData();
    },[])
    const getData = async()=>{
        try{
        SetMess(await AsyncStorage.getItem('Username'));
        }catch(err){}
    }
    return(
    <View style={styles.body}>
<Text style={styles.text}>{mess}</Text>
    </View>);
}
const styles=StyleSheet.create({
    body:{flex:1,
    alignItems:'center',justifyContent:'center'},
    text:{fontSize:20,}
})
export default AsyncHomeSrceen;
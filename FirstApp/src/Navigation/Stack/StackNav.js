import React from "react";
import { View ,StyleSheet, Pressable,Text, ScrollView} from "react-native";
import { useNavigation } from '@react-navigation/native' 
const StackNav = () =>{

const navigation = useNavigation();
const InputOnPress = ()=>{navigation.navigate('Input_Screen',{Message:'Message Data'});}
const HookOnPress = ()=>{navigation.navigate('Hook_Screen');}
const HookEffectOnPress = ()=>{navigation.navigate('HookEffect_Screen');}
const BaseOnPress = ()=>{navigation.navigate('Base_Screen');}
const CustomConOnPress = ()=>{navigation.navigate('CustomCom_Screen');}
const ListOnPress = ()=>{navigation.navigate('List_Screen');}
const FlatListOnPress = ()=>{navigation.navigate('FlatList_Screen');}
const AsyncStoargeOnPress = ()=>{navigation.navigate('AsyncIndex_Srceen');}
return(
<View style={styles.body}> 

<Pressable style={styles.button} onPress={InputOnPress}>
    <Text>Input</Text>
    </Pressable>
    <Pressable style={styles.button} onPress={HookOnPress}>
    <Text>Hook State</Text>
    </Pressable>
    <Pressable style={styles.button} onPress={HookEffectOnPress}>
    <Text>Hook Effect</Text>
    </Pressable>
    <Pressable style={styles.button} onPress={BaseOnPress}> 
    <Text>Base</Text>
    </Pressable>
    <Pressable style={styles.button} onPress={CustomConOnPress}>
    <Text>Custom Con</Text>
    </Pressable>
    <Pressable style={styles.button} onPress={ListOnPress}>
    <Text>List</Text>
    </Pressable>
    <Pressable style={styles.button} onPress={FlatListOnPress}>
    <Text>FlatList</Text>
    </Pressable>
    <Pressable style={styles.button} onPress={AsyncStoargeOnPress}>
    <Text>AsyncStorage</Text>
    </Pressable>
  
</View>)

}

const styles= StyleSheet.create({
    body:{flex:1,
        alignItems:'center',
    justifyContent:'center'
},
button:{
    margin:15,
    width:'40%',
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'#000000',
    borderRadius:10,
}

})

export default StackNav;
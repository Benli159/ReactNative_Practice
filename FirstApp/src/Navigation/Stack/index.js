import React from "react";
import {View,useWindowDimensions,TouchableOpacity,Image,Text,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator}  from '@react-navigation/stack';
import InputScreen from '../../Screens/Input';
import HookScreen from '../../Screens/Hook/State';
import BaseScreen from '../../Screens/Base';
import CustomComScreen from "../../Screens/CustomCom";
import ListScreen from '../../Screens/List';
import FlatListScreen from '../../Screens/FlatList'
import StackNav from './StackNav';
import AsyncHomeSrceen from '../../Screens/AsyncStorage/home.js';
import AsyncIndexSrceen from '../../Screens/AsyncStorage';
import HookEffectScreen from '../../Screens/Hook/Effect'
const Stack = createStackNavigator();

const Navigation =()=>{
    return( 
        
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:true}} initialRouteName="Home">
            <Stack.Screen name="Home" component={StackNav}></Stack.Screen>
                <Stack.Screen name="Input_Screen" component={InputScreen}></Stack.Screen>
                <Stack.Screen name="Hook_Screen" component={HookScreen}></Stack.Screen>
                <Stack.Screen name="HookEffect_Screen" component={HookEffectScreen}></Stack.Screen>
              
                <Stack.Screen 
                name="Base_Screen" 
                component={BaseScreen}
                options={{headerTitle:(props)=><BaseHeader {...props}/>}}
                ></Stack.Screen>
                <Stack.Screen name="CustomCom_Screen" component={CustomComScreen}></Stack.Screen>
                <Stack.Screen name="List_Screen" component={ListScreen}></Stack.Screen>
                <Stack.Screen name="FlatList_Screen" component={FlatListScreen}></Stack.Screen>
                <Stack.Screen name="AsyncHome_Srceen" component={AsyncHomeSrceen}></Stack.Screen>
                <Stack.Screen name="AsyncIndex_Srceen" component={AsyncIndexSrceen}></Stack.Screen>
           

            </Stack.Navigator>
        </NavigationContainer>
    

    
    );
}
    const BaseHeader = (props) => {

        const createTwoButtonAlert = () =>
          Alert.alert(
            "",
            "Do you want to log out?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () =>console.log("OK Pressed")
                
              }
            ]
          );
      
          
        const {width} = useWindowDimensions();
        return (
          <View
            style={{
              flexDirection:'row',
              width,
              padding:10,
              alignItems:'center',
              justifyContent:'space-between'
          }}>
            <TouchableOpacity onPress={createTwoButtonAlert}>
            <Image
            source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg' }}
            style={{ width: 30, height: 30, borderRadius: 30 }}></Image></TouchableOpacity>
            <Text style={{
              flex:1,
              textAlign:'center',
              fontSize:20,
              marginLeft:20
            }}>Base</Text>
         
          </View>
        )
      }



export default Navigation
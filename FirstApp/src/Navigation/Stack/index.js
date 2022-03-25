import React from "react";
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator}  from '@react-navigation/stack';
import InputScreen from '../../Screens/Input';
import HookScreen from '../../Screens/Hook/State';
import BaseScreen from '../../Screens/Base';
import CustomComScreen from "../../Screens/CustomCom";
import ListScreen from '../../Screens/List';
import FlatListScreen from '../../Screens/FlatList'
import StackNav from './StackNav';
const Stack = createStackNavigator();

const Navigation =()=>{
    return( 
        
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="StackNav">
            <Stack.Screen name="Home" component={StackNav}></Stack.Screen>
                <Stack.Screen name="Input_Screen" component={InputScreen}></Stack.Screen>
                <Stack.Screen name="Hook_Screen" component={HookScreen}></Stack.Screen>
                <Stack.Screen name="Base_Screen" component={BaseScreen}></Stack.Screen>
                <Stack.Screen name="CustomCom_Screen" component={CustomComScreen}></Stack.Screen>
                <Stack.Screen name="List_Screen" component={ListScreen}></Stack.Screen>
                <Stack.Screen name="FlatList_Screen" component={FlatListScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    
    );
}

export default Navigation
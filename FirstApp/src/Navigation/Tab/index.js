import React from "react";
import {View,useWindowDimensions,TouchableOpacity,Image,Text,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator}  from '@react-navigation/bottom-tabs';
import InputScreen from '../../Screens/Input';
import HookScreen from '../../Screens/Hook/State';
import BaseScreen from '../../Screens/Base';
import CustomComScreen from "../../Screens/CustomCom";
import ListScreen from '../../Screens/List';
import FlatListScreen from '../../Screens/FlatList'

const Tab = createBottomTabNavigator();

const Navigation =()=>{
    return( 
        
        <NavigationContainer>
            <Tab.Navigator 
            screenOptions={{headerShown:true}} 
            initialRouteName="Input_Screen" 
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
              }}
            >
                <Tab.Screen 
                name="Input_Screen" 
                component={InputScreen}
                initialParams={{Message:'Message Data'}}></Tab.Screen>
                <Tab.Screen name="Hook_Screen" component={HookScreen}></Tab.Screen>
                <Tab.Screen 
                name="Base_Screen" 
                component={BaseScreen}
                
                ></Tab.Screen>
                <Tab.Screen name="CustomCom_Screen" component={CustomComScreen}></Tab.Screen>
                <Tab.Screen name="List_Screen" component={ListScreen}></Tab.Screen>
                <Tab.Screen name="FlatList_Screen" component={FlatListScreen}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    

    
    );
}




export default Navigation
import React, { useState} from 'react';
import { View,Text ,StyleSheet,Button,Linking} from 'react-native';

const State = ()=>{
    const [name,SetName] = useState('KI');
    const [session , SetSession] = useState({number:6,title:'state'});
    const [current,SetCurrent] = useState(true);
const onPressButton =() =>{
    SetName('Ben');
    SetSession({number:session.number+1,title :'style'})
    SetCurrent(false);
}

    return(
<View style={styles.body}>
    <Text style={styles.text}>My name is {name}</Text>
    <Text style={styles.text}>this is session number {session.number} and state : {session.title}</Text>
    <Text style={styles.text}>{current? 'current session ':'next session'}</Text>
    <Button title ='show' onPress={onPressButton}></Button>
</View>
    );
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',

    },
    text:{
        color:'#ffffff',
        fontSize:20,
        fontStyle:'italic',
    }
    
});

export default State;
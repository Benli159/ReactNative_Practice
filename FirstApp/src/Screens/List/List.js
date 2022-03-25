
import { set } from "express/lib/application";
import React, { useState } from "react"
import { StyleSheet,View,Text, ScrollView ,RefreshControl} from "react-native"

const List = () => {
    
    const [items, SetItems] = useState([
        { key: 1, item: 'Item 1' },
        { key: 2, item: 'Item 2' },
        { key: 3, item: 'Item 3' },
        { key: 4, item: 'Item 4' },
        { key: 5, item: 'Item 5' },
        { key: 6, item: 'Item 6' },
        { key: 7, item: 'Item 7' },
        { key: 8, item: 'Item 8' },
        { key: 9, item: 'Item 9' },
        { key: 10, item: 'Item 10' },
        
    ])

    const [items2, SetItems2] = useState([
        { key: 11, item: 'Item 11' },
        { key: 12, item: 'Item 12' },
        { key: 13, item: 'Item 13' },
        { key: 14, item: 'Item 14' },
        { key: 15, item: 'Item 15' },
        { key: 16, item: 'Item 16' },
        { key: 17, item: 'Item 17' },
        { key: 18, item: 'Item 18' },
        { key: 19, item: 'Item 19' },
        { key: 20, item: 'Item 20' },
    ]);
    const [realItems,SetRealItems] = useState([...items]);
const [refresh,SetRefresh] = useState(false);


const onRefresh = ()=>{
    SetRefresh(true);
    if (realItems[0].key == items[0].key)
        SetRealItems([...items2]);
    else
        SetRealItems([...items]);

    
    SetRefresh(false);
}

    return (
        <ScrollView style={styles.body}
        refreshControl={
            <RefreshControl 
            onRefresh={onRefresh}
            refreshing={refresh} 
            colors={['#ff00ff']}
            progressBackgroundColor={['#00ffff']}
            >

            </RefreshControl>
        }>
        {realItems.map((item)=>{
            return(
                <View style={styles.item} key={item.key}>
                <Text style={styles.text}>{item.item}</Text>
                </View>
            );
        })
        }
     
        </ScrollView>
    );

}

const styles = StyleSheet.create({
body:{
    flex:1,
    }, 
item:{margin:5,backgroundColor:'#ffaa11',alignItems:'center',justifyContent:'center'},
text:{fontSize:45,margin:10},


});
export default List;
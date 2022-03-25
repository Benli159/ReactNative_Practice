
import React, { useState } from "react"
import { StyleSheet, View, Text, FlatList, RefreshControl } from "react-native"


const App = () => {

    const [items, SetItems] = useState([
        { item: 'Item 1' },
        { item: 'Item 2' },
        { item: 'Item 3' },
        { item: 'Item 4' },
        { item: 'Item 5' },
        { item: 'Item 6' },
        { item: 'Item 7' },
        { item: 'Item 8' },
        { item: 'Item 9' },
        { item: 'Item 10' },

    ])

    const [items2, SetItems2] = useState([
        { item: 'Item 11' },
        { item: 'Item 12' },
        { item: 'Item 13' },
        { item: 'Item 14' },
        { item: 'Item 15' },
        { item: 'Item 16' },
        { item: 'Item 17' },
        { item: 'Item 18' },
        { item: 'Item 19' },
        { item: 'Item 20' },
    ]);
    const [realItems, SetRealItems] = useState([...items]);
    const [refresh, SetRefresh] = useState(false);


    const callback =()=>{
        setTimeout(() => {
            SetRealItems([...realItems,...items]);
        }, 3000);
    }
    const onRefresh = () => {
        //SetRefresh(true);
        /*
        if (realItems[0].item == items[0].item)
            SetRealItems([...items2]);
        else
            SetRealItems([...items]);*/ 
       
        callback();
       // SetRefresh(false);
    }

    return (
        <View style={styles.body}> 
        <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={realItems}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text style={styles.text}>{item.item}</Text>
                </View>
            )}
            onEndReachedThreshold={0.001}
            onEndReached={info => {
                onRefresh();}}
              /*
            refreshControl={
                <RefreshControl
                    onRefresh={onRefresh}
                    refreshing={refresh}
                    colors={['#ff00ff']}
                    progressBackgroundColor={['#00ffff']}
                >

                </RefreshControl>
            }*/
        />
<Text>Loading...</Text>
</View> 
    );

}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'blue'
    },
    item: { margin: 5, backgroundColor: '#ffaa11', alignItems: 'center', justifyContent: 'center' },
    text: { fontSize: 45, margin: 10 },


});
export default App;
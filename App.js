import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Alert, FlatList, RefreshControl, Pressable } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
// import { TouchableHighlight } from 'react-native-web';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function App() {
  const [refreshing, setRefreshing] = React.useState(false);

  const [bgColor, setBgColor] = useState(randomHex());

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    console.log("im here")
  }, []);


  const [people, setPeople] = useState([
    {name: 'Sample 1', id: '1'},
    {name: 'Sample 2', id: '2'},
    {name: 'Sample 3', id: '3'},
    {name: 'Sample 4', id: '4'},
    {name: 'Sample 5', id: '5'},
  ])

  const [items, setItems] = useState([
    {name: 'Item 1', id: '1'},
    {name: 'Item 2', id: '2'},
    {name: 'Item 3', id: '3'},
    {name: 'Item 4', id: '4'},
    {name: 'Item 5', id: '5'},
  ])

  const [name, setName] = useState('');

  const pressHandler = (id) => {
    console.log(id)
    Alert.alert('Alert','You pressed an item',[
      {text: 'OK', onPress: () => console.log('Alert Closed')}
    ])
  }

  function randomHex() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}><Text style={styles.headerText}>Machine Problem 1</Text></View>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
      <View style={[styles.body, {backgroundColor: bgColor}]}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.headerText2}>This is a sample of a text input</Text>
      </View>
        <TextInput 
          style ={styles.input}
          placeholder='e.g. Jessica Alcast' 
          onChangeText={(value) => setName(value)}/>
        <Text style={{marginBottom:50}}>Your name is: {name}</Text>

        <Text style={styles.headerText2}>This is a sample of list of items with an alert component</Text>
          {people.map((item) => {
              return (
                <View key={item.key}>
                  <TouchableOpacity onPress={() => pressHandler(item.id)}>
                    <Text style={styles.item}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              )
          })}

          <Text style={[styles.headerText2,{marginVertical:10,marginTop:70}]}>This is a sample of a flatlist with a touchable component that changes the background color</Text> 
          <FlatList
            numColumns={2}
            keyExtractor={(item) => item.id}
            data={items}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => setBgColor(randomHex())}>
                <Text style={styles.item2}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />

        <Text style={[styles.headerText2,{marginVertical:10,marginTop:50}]}>End</Text>
        <Text>By: Miguel Deveraturda & Aira Laurencia Navarro</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003049',
  },
  item: {
    marginTop: 24,
    padding: 20,
    paddingHorizontal: 100,
    backgroundColor: '#FCBF49',
    fontSize: 24
  },
  item2: {
    marginTop: 24,
    padding: 20,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    backgroundColor: '#D62828',
    fontSize: 24,
    color: 'white'
  },
  header: {
    backgroundColor: '#003049',
    fontSize: 30,
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    backgroundColor: '#003049',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    letterSpacing: 1,
  },
  headerText2: {
    fontWeight:'bold', 
    marginBottom:20, 
    marginTop:20, 
    fontSize:17,
    marginHorizontal:10,
    textAlign:'center'
},
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "#EAE2B7"
  }
});
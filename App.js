import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import { TouchableHighlight } from 'react-native-web';


export default function App() {
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

  const pressHandler2 = (id) => {
    console.log(id)
    setItems((prevPeople) => {
      return prevPeople.filter(items => items.id != id)
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}><Text style={styles.headerText}>Machine Problem 1</Text></View>
      <ScrollView>
      <View style={styles.body}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.headerText2}>This is a sample of a text input</Text>
      </View>
        {/* <Text>Enter name:</Text> */}
        <TextInput 
          style ={styles.input}
          placeholder='e.g. Jessica Alcast' 
          onChangeText={(value) => setName(value)}/>
        <Text style={{marginBottom:50}}>Your name is: {name}</Text>

        <Text style={styles.headerText2}>This is a sample of list of items with touchable components</Text>
          {people.map((item) => {
              return (
                <View key={item.key}>
                  <TouchableOpacity onPress={() => pressHandler(item.id)}>
                    <Text style={styles.item}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              )
          })}

          <Text style={[styles.headerText2,{marginVertical:10,marginTop:70}]}>This is a sample of a flatlist with touchable components</Text> 
          <FlatList
            numColumns={2}
            keyExtractor={(item) => item.id}
            data={items}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => pressHandler2(item.id)}>
              <Text style={styles.item2}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />

        <Text style={[styles.headerText2,{marginVertical:10,marginTop:30}]}>End</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003049',
    // alignItems: 'center',
    // justifyContent: 'center',
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
    // flex: 1,
    backgroundColor: '#003049',
    // padding: 50,
    // color: 'white',
    // fontWeight: 'bold',
    fontSize: 30,
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
    // marginBottom: 100,
  },
  headerText: {
    // flex: 1,
    backgroundColor: '#003049',
    // padding: 50,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    letterSpacing: 1,
    // width: '100%',
    // height: '30%',
    // marginBottom: 10,
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
    // paddingTop: 20,
    // paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // width: '100%',
    // height: '50%',
    backgroundColor: "#EAE2B7"
  }
});
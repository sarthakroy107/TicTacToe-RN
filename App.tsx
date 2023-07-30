/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, FlatList, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
const DATA = [ {number:0}, {number:1}, {number:2}, {number:3}, {number:4}, {number:5}, {number:6}, {number:7}, {number:8}];
const App = () => {
  const [user, setUser] = useState(0);
  const [array, setArray] = useState([0,0,0,0,0,0,0,0,0]);
  const [win, setWin] = useState([-1,-1,-1]);


  const handlePress = (number) =>{
    if (array[number] === 0 && win[0] === -1) {
      let newArray = [...array];
      newArray[number] = user + 1;
      setArray(newArray);
      setUser((prevUser) =>(prevUser === 1 ? 0 : 1));
    }
  };

  useEffect(()=>{
    array[0] !== 0 && array[0] === array[1] && array[0] === array[2] ? (setWin([0,1,2])) :
    array[3] !== 0 && array[3] === array[4] && array[3] === array[5] ? (setWin([3,4,5])) :
    array[6] !== 0 && array[6] === array[7] && array[8] === array[2] ? (setWin([6,7,8])) :
    array[0] !== 0 && array[0] === array[3] && array[0] === array[6] ? (setWin([0,3,6])) :
    array[1] !== 0 && array[1] === array[5] && array[1] === array[7] ? (setWin([1,4,7])) :
    array[2] !== 0 && array[2] === array[5] && array[2] === array[8] ? (setWin([2,5,8])) :
    array[0] !== 0 && array[0] === array[4] && array[0] === array[8] ? (setWin([0,4,8])) :
    array[2] !== 0 && array[2] === array[4] && array[2] === array[6] ? (setWin([0,1,2])) : (setWin(win));
  }, [array]);

  const renderItem = ({item}) =>{
    return (
      <View>
        <Pressable onPress={()=>handlePress(item.number)} style={win.includes(item.number) ? styles.winBg : styles.pressableView} >
          {
            array[item.number] === 1 ? (<Text style={styles.pressableText}>X</Text>) :
            array[item.number] === 2 ? (<Text style={styles.pressableText}>Y</Text>) :
            (<Text style={styles.pressableText}></Text>)
          }
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.headingText}>Tic Tac Toe</Text>
        <View style={styles.playertextContainer}>
          <Text style={styles.playerText}>{user? (<Text>Player-Y</Text>) : (<Text>Player-X</Text>)}</Text>
        </View>
        <View>
          <FlatList
          numColumns={3}
          data={DATA}
          renderItem={renderItem}
          contentContainerStyle={styles.pressableViewContainer}
          />
        </View>
        <TouchableOpacity onPress={()=>{setArray([0,0,0,0,0,0,0,0,0]); setWin([-1, -1, -1]); setUser(0);}}
         style={styles.btn}><Text style={styles.btnText}>Reset</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  headingText:{
    fontSize:45,
    fontWeight:'500',
    textAlign: 'center',
    marginBottom:10,
  },
  playertextContainer:{
    backgroundColor:'#565D60',
    borderRadius:15,
    marginHorizontal:72,
    marginVertical:15,
    opacity:1000,
  },
  playerText:{
    fontSize:30,
    fontWeight:'500',
    textAlign: 'center',
    marginBottom:10,
  },
  pressableViewContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressableView:{
    width:75,
    height:75,
    backgroundColor: '#fff',
    borderRadius:2,
    margin: 3,
    padding:2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressableText: {
    color: '#000000',
    fontSize:35,
    fontWeight:'700',

  },
  btn:{
    backgroundColor:'#11D81F',
    marginHorizontal: 75,
    borderRadius: 25,
    padding:10,
    marginVertical:25,
  },
  btnText:{
    textAlign:'center',
    fontSize: 20,
    fontWeight:'800',
    color:'#fff',
  },
  winBg: {
    width:75,
    height:75,
    backgroundColor: '#67B26A',
    borderRadius:2,
    margin: 3,
    padding:2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

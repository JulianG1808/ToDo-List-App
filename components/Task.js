import React/* , { useState } */ from "react"
import { View, Text, StyleSheet/* , TouchableOpacity */ } from 'react-native'

const Task = (props) => {
  // const [taskCondition, setTaskCondition] = useState(true)

  // const completeTask = () => {
  //   taskCondition ?
  //   setTaskCondition(false) :
  //   setTaskCondition(true)
  // }

  return (
    <View style={styles.itemTrue /* taskCondition ? styles.itemTrue : styles.itemFalse */} /* onPress={() => completeTask()} */>
      <View style={styles.itemSectionLeft} >
        <View style={styles.squareIconTrue /* taskCondition ? styles.squareIconTrue : styles.squareIconFalse */}></View>
        <Text style={styles.textTrue /* taskCondition ? styles.textTrue : styles.textFalse */}>{props.text}</Text>
      </View>
      <View style={styles.circularIconTrue /* taskCondition ? styles.circularIconTrue : styles.circularIconFalse */}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemTrue: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemFalse: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    opacity: 0.5,
  },
 //---------------------------------------------------
  itemSectionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  //---------------------------------------------------
  squareIconTrue: {
    width: 24,
    height: 24,
    borderColor: 'green',
    backgroundColor: 'green',
    opacity: 0.5,
    borderRadius: 5,
    marginRight: 15
  },
  squareIconFalse: {
    width: 24,
    height: 24,
    borderColor: 'green',
    backgroundColor: 'green',
    opacity: 0.2,
    borderRadius: 5,
    marginRight: 15
  },
  //---------------------------------------------------
  textTrue: {
    maxWidth: '80%',
  },
  textFalse: {
    maxWidth: '80%',
    textDecorationLine: 'line-through'
  },
  //---------------------------------------------------
  circularIconTrue: {
    width: 12,
    height: 12,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 5,
    opacity: 0.5,

  },
  circularIconFalse: {
    width: 12,
    height: 12,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 5,
    opacity: 0.2,
  },
});

export default Task;

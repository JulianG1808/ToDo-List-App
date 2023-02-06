import React from "react"
import { View, Text, StyleSheet } from 'react-native'

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemSectionLeft}>
        <View style={styles.squareIcon}></View>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <View style={styles.circularIcon}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginRight: 20,
  },
  itemSectionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  squareIcon: {
    width: 24,
    height: 24,
    borderColor: 'red',
    backgroundColor: 'red',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15
  },
  text: {
    maxWidth: '80%',
  },
  circularIcon: {
    width: 12,
    height: 12,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;

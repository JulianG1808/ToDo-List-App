import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState(""); //new task
  const [taskArray, setTaskArray] = useState([]); //all the tasks

  const handleAddTask = () => {
    if (task === "") {
      Alert.alert("Oops!", "You must write something to add a task");
    } else if (task.length < 4) {
      Alert.alert("Oops!", "Task must be over 3 chars long");
    } else {
      Keyboard.dismiss(); //this close the keyboard
      setTaskArray([...taskArray, task]);
      setTask("");
    }
  };

  // const completeTask = () => {
    // Alert.alert(
    //   //This is title
    //   "Delete Task",
    //   //This is body text
    //   "Are you sure?",
    //   [
    //     { text: "Yes", onPress: () => deleteTask() },
    //     {
    //       text: "No",
    //       onPress: () => console.log("No Pressed"),
    //       style: "cancel",
    //     },
    //   ],
    //   { cancelable: false }
    //   //on clicking out side, Alert will not dismiss
    // );
  // };

  const deleteTask = (idx) => {
    Alert.alert(
      //This is title
      "Delete Task",
      //This is body text
      "Are you sure?",
      [
        { text: "Yes", onPress: () => 
          {
            let itemsCopy = [...taskArray]
            itemsCopy.splice(idx, 1)
            setTaskArray(itemsCopy)
          }
        },
        {
          text: "No",
          onPress: () => console.log("No Pressed"),
          style: "cancel",
        },
      ],
      { cancelable: false }
      //on clicking out side, Alert will not dismiss
    );
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>List of Tasks</Text>

        <View style={styles.items}>
          {taskArray.length <= 0 ? (
            <Text style={styles.emptyMsg}>You don't have any task</Text>
          ) : (
            taskArray.map((elem, idx) => {
              return (
                <TouchableOpacity key={idx} onPress={() => deleteTask()}>
                  <Task text={elem} />
                </TouchableOpacity>
              );
            })
          )}
        </View>
      </View>

      <KeyboardAvoidingView //this show the keyboard
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardInput}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addTaskButton}>
            <Text style={styles.addTaskText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },

  keyboardInput: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addTaskButton: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  addTaskText: {
    fontSize: 30,
    fontWeight: '200',
  },
  emptyMsg: {
    textAlign: "center",
    fontSize: 18,
  }
});

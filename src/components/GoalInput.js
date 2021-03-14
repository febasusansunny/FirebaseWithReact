import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputContainer}
          placeholder="Enter your Goals"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
         
          <View style={styles.button}>
            <Button title="ADD" color = '#788eec' onPress={addGoalHandler} />
          </View>
          <View style={styles.buttons}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({

  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
     
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 10,
    padding: 8,
    alignItems:'center',
    width: 700,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100'
  },
  button: {
    backgroundColor: '#788eec',
    margin: 10,
    padding: 8,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
    width:350,
},
buttons: {
  backgroundColor: 'red',
  margin: 10,
  padding: 8,
  height: 48,
  borderRadius: 5,
  alignItems: "center",
  justifyContent: 'center',
  width:350,
},
buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold"
}
});

export default GoalInput;
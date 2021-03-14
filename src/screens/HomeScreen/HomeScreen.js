
import {Text} from 'react-native'
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from '../../components/GoalItem';
import GoalInput from '../../components/GoalInput';
import styles from './styles';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
//import AboutScreen from './components/AboutScreen';
export default function HomeScreen({navigation}) {

    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);
    const onFooterLinkPress = () => {
      navigation.navigate('About')
     };
    const addGoalHandler = goalTitle => {
      setCourseGoals(currentGoals => [
        ...currentGoals,
        { id: Math.random().toString(), value: goalTitle }
      ]);
      setIsAddMode(false);
    };
  
    const removeGoalHandler = goalId => {
      setCourseGoals(currentGoals => {
        return currentGoals.filter(goal => goal.id !== goalId);
      });
    };
  
    const cancelGoalAdditionHandler = () => {
      setIsAddMode(false);
    };
  
    return (
      <View style={styles.screen}>
         

        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} style={styles.button}  />
        <br/>
        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={cancelGoalAdditionHandler}
        />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />
          )}
        />
          
          <Text onPress={onFooterLinkPress} style={styles.footerLinks}>
             About
            </Text>   
      </View>
      
      
    );
  }
  
  
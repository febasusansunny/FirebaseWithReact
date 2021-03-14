import React, {useState} from 'react';
import {Text,StyleSheet} from 'react-native'

export default function AboutScreen()
{
    return(
    <Text style={styles.footerLink}>To Do List app helps you to organize tasks and make life easier<br/>
     You can use it for: <br/>
     Planning a birthday party<br/>
    Managing tasks and chores at home<br/>
    Storing information like recipes<br/>
    Organizing school projects <br/> </Text>

    );
}
const styles = StyleSheet.create({
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    }
    
}
)



import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native'

export default function App(){
  


  const Calculate =()=>{
    const num1 = parseFloat(num1)
    const num2 = parseFloat(num2)
    let result = 0

    switch(operation) {
      case '+':
        result = num1 + num2
        break;
      case '-':
        result = num1 - num2
        break;
      case '*':
        result = num1 * num2
        break;
      case '/':
        result = num1 / num2
        break;
      default:
        result = 0
    }
    return result
  }
  const Clear=()=>{
    setnum1('0');
    setnum2('0');
    setoperation('');
  }

  return(
    <View style={styles.container}>
      <Text>
      </Text>
    </View>
    
  )
}

const styles= StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  }
})
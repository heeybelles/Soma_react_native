import { Text, SafeAreaView, StyleSheet, View, TextInput, ScrollView } from 'react-native';
import {Button} from 'react-native';
import React, { useState } from 'react';


//Declaraçõa de variável
const App = () => {
const [num1, setNum1] = useState('');
const [num2, setNum2] = useState('');
const [resultado, setResultado] = useState('');

//Funçao
const somarValores = () => {
const soma = parseFloat(num1) + parseFloat(num2); setResultado(soma.toString()) };

  return (
    <ScrollView style={styles.container} >
    <Text style ={styles.hackaton}>  Primeiro Número:</Text>
      <Text>    </Text>
    <TextInput style={styles.input} onChangeText={setNum1} value={num1}
    keyboardType="numeric"/>
  <Text>    </Text>
    <Text>    </Text>
     <Text style ={styles.hackaton}>  Segundo Número:</Text>
       <Text>    </Text>
    <TextInput style={styles.input} onChangeText={setNum2} value={num2}
    keyboardType="numeric"/>
  <Text>    </Text>
    <Text>    </Text>
    <Button style={styles.buttonn} title="Somar" onPress={somarValores}/>
      <Text>    </Text>
   <Text style={styles.resultado}> Resultado: {resultado}</Text>
   

              
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFF',
    alignItems: 'center',
    padding: 20,
    background:'#e4f2f7',
  },

  hackaton: {
  fontSize: 22,
  color: '#1E90FF',
  marginLeft: 25,
  },



  input: {
  width: '250px',
  height: 40,
  borderColor: '#e4f2f7',
  borderRadius:'50px',
  borderWidth: 1,
  padding: 10,
  background:'#FFFF',
  outline:'none',

  },

  resultado: {
  justifyContent: 'center',
  fontSize: 20,
  color: '#0000FF',
  },



  
  });



export default App
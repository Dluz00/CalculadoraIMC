import React, { useState } from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import ResultIMC from './ResultIMC/indexx';
import styles from './style';
 


export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [TextButton, setTextButton] = useState("Calcular");

  const calculateIMC = () => {
    if (height && weight) {
      const imcValue = (parseFloat(weight) / (parseFloat(height) * parseFloat(height))).toFixed(2);
      setImc(imcValue);
      setMessageImc("Seu IMC é:");
      setTextButton("Calcular novamente");
    } else {
      setMessageImc("Preencha os campos corretamente");
      setImc(null);
    }
  };

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          style={styles.input} // Adicione o estilo
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          onChangeText={setHeight}
        />

        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
        
          style={styles.input} // Adicione o estilo
          placeholder="Ex. 75.505"
          keyboardType="numeric"
          onChangeText={setWeight}
        />
        <TouchableOpacity
          style={styles.ButtonCalculator}
          onPress={() =>{
            calculateIMC()
          }}>
          <Text style={styles.textCalculateIMC}>Calcular</Text>
        </TouchableOpacity>
        
      </View>

      <ResultIMC messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}

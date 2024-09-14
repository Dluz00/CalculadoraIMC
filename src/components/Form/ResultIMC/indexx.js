import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';



export default function ResultIMC(props) {
  return (
    <View style={styles.resultImc}>
      <Text style={styles.numberImc}>{props.resultImc}</Text>
      <Text style={styles.information} >{props.messageResultImc}</Text>
    </View>
  );
}

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title/index';
import Main from './src/components/Main/index';

export default function App() {
  return (
    <View style={styles.container}>  
      {/* Renderiza o título da aplicação */}
      <Title/> 
      {/* Renderiza o componente principal que contém o formulário */}
      <Main/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupar toda a altura disponível
    backgroundColor: '#fff', // Fundo branco
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
  },
});

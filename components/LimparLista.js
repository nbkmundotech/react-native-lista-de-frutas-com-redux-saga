import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const LimparLista = props => {
  return (
    <TouchableOpacity style={styles.botaoLimpar} onPress={props.onPress}>
      <Text style={styles.botaoLimparTexto}>Limpar Lista</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botaoLimpar: {
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
    padding: 8,
    marginLeft: 32,
    marginRight: 32
  },
  botaoLimparTexto: {
    fontSize: 20
  },
});

export default LimparLista;

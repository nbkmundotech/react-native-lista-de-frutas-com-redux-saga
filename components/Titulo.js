import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Titulo = props => {
  return (
    <Text style={styles.titulo}>{props.texto}</Text>
  );
};

const styles = StyleSheet.create({
  titulo: {
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold'
  }
});

export default Titulo;

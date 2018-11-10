import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

const BotaoDeAcao = props => {
  return (
    <TouchableOpacity style={styles.botaoDeAcao} onPress={props.onPress}>
      <Text style={styles.botaoTexto}>{props.texto}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botaoDeAcao: {
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: 'gray',
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12
  },
  botaoTexto: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default BotaoDeAcao;

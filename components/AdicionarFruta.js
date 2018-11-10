import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import BotaoDeAcao from './BotaoDeAcao';

class AdicionarFruta extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: ''
    };
  }

  onChangeText = (nome) => {
    this.setState({ nome });
  }

  onPress = () => {
    this.props.onAdicionarFruta(this.state.nome);
  }

  render() {
    return (
      <View style={styles.containerDeAdicionarItem}>
        <TextInput
          style={styles.textInput}
          value={this.state.nome}
          onChangeText={this.onChangeText}
        />
        <BotaoDeAcao texto="+" onPress={this.onPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerDeAdicionarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    flex: 1,
    height: 40
  },
});

export default AdicionarFruta;

import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import BotaoDeAcao from './BotaoDeAcao';

const ItemDaLista = props => {
  return (
    <View style={styles.containerDoItem}>
      <Text style={styles.itemTexto}>{props.fruta.nome}</Text>
      <BotaoDeAcao
        texto="x"
        onPress={props.onRemover}
      />
    </View>
  );
};

class ListaDeFrutas extends React.Component {
  onRemover = id => () => {
    this.props.onRemoverFruta(id);
  }

  render() {
    return (
      <View style={styles.containerDaLista}>
        {this.props.frutas.map(fruta => (
          <ItemDaLista
            key={fruta.id}
            fruta={fruta}
            onRemover={this.onRemover(fruta.id)}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerDaLista: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
  },
  containerDoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  itemTexto: {
    fontSize: 24
  },
});

export default ListaDeFrutas;

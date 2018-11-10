import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Constants } from 'expo';

import AdicionarFruta from './AdicionarFruta';
import LimparLista from './LimparLista';
import ListaDeFrutas from './ListaDeFrutas';
import Titulo from './Titulo';
import {
  adicionarItem,
  limparLista,
  removerItem
} from '../actions';

class Main extends React.Component {
  onAdicionarFruta = (nome) => {
    this.props.adicionarItem(nome);
  }

  onRemoverFruta = (id) => {
    this.props.removerItem(id);
  }

  onLimparLista = () => {
    this.props.limparLista();
  }

  render() {
    console.log('Main props', this.props);

    return (
      <View style={styles.container}>
        <View>
          <Titulo texto="Lista de Frutas" />

          <AdicionarFruta onAdicionarFruta={this.onAdicionarFruta} />

          <ListaDeFrutas
            frutas={this.props.frutas}
            onRemoverFruta={this.onRemoverFruta}
          />
        </View>

        <LimparLista onPress={this.onLimparLista} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'space-between',
    paddingBottom: 12
  },
});

const mapStateToProps = state => {
  return {
    frutas: state
  };
};

const mapDispatchToProps = {
  adicionarItem: adicionarItem,
  removerItem: removerItem,
  limparLista: limparLista
};
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({
//     adicionarItem: adicionarItem,
//     removerItem: removerItem,
//     limparLista: limparLista
//   }, dispatch);
//
//   // return {
//   //   adicionarItem: (nome) => {
//   //     dispatch(adicionarItem(nome));
//   //   },
//   //   removerItem: (id) => {
//   //     dispatch(removerItem(id));
//   //   },
//   //   limparLista: () => {
//   //     dispatch(limparLista());
//   //   }
//   // };
// }

export default connect(mapStateToProps, mapDispatchToProps)(Main);

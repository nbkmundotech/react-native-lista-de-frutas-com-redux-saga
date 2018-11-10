import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Main from './components/Main';
import reducer from './reducer';

const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;

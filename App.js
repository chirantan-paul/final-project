import React, {Component} from 'react';

import Myapp from './src/list';

import storesett from './src/store';

import {Provider} from 'react-redux';

const st=storesett();

class App extends Component
{
  render() { 
    return(
      <Provider store={st}>
        <Myapp/>
      </Provider>
    );
  }
}

export default App; 
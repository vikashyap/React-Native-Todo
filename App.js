
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReduxStore from './reducer/store';
import ListComponent from './components/listComponent';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native'

const renderWeb = Platform.select({
  web: true
});

export default class App extends Component {
  componentDidMount = () => {
    if (renderWeb) {
      document.body.style.backgroundColor = 'rgb(244, 248, 245)';
    }
  }
  render() {
    return (
      <Provider store={ReduxStore}>
        <View style={styles.container}>
          <ListComponent />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFC',
    margin: 'auto',
    width: renderWeb && window.innerWidth > 700 ? '70%' : '100%',
  }
});

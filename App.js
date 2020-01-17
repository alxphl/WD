import React, {useState} from 'react';
import * as Axios from './components/Axios';
import * as Permissions from './components/Permissions';
import BalanceTouchable from './components/BalanceTouchable';
import BattleModeTouchable from './components/BattleModeTouchable';
import styles from './styles';
import { SafeAreaView, ScrollView, View, Text, StatusBar, TouchableOpacity } from 'react-native';
import * as Location from './components/Location';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import MainReducer from './store/reducers/MainReducer';

  
const App: () => React$Node = () => {

  const [user,setUser]=useState('Alex');
      Permissions.AccessFineLocation();
const logger = (store) => (next) => (action) => {
    console.log('[Middleware] Dispatching', action);
    const result = next(action);
    console.log('[Middleware] next state', store);
    return result;
};

const store = createStore(MainReducer,compose(applyMiddleware(logger,thunk)));
 return (
    <>
      <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Welcome {user} to</Text>
                   <Text style={styles.sectionTitle}>  World Domination!</Text>
            </View>
          <View style={styles.body}>
        <BattleModeTouchable/>
        <BalanceTouchable/>
          </View>
        </ScrollView>
      </SafeAreaView>
           </Provider>
    </>
  );
};

export default App;

import React from 'react';
import * as Axios from './components/Axios';
import * as Permissions from './components/Permissions';
import BalanceTouchable from './components/BalanceTouchable';
import BattleModeTouchable from './components/BattleModeTouchable';
import ToggleSwitcher from './components/ToggleSwitcher';
import User from './components/User';
import Logger from './components/Logger';
import styles from './styles';
import { SafeAreaView, ScrollView, View, Text, StatusBar, TouchableOpacity } from 'react-native';
import * as Location from './components/Location';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import MainReducer from './store/reducers/MainReducer';
import Swiper from 'react-native-web-swiper';
const App: () => React$Node = () => {

Permissions.AccessFineLocation();

const store = createStore(MainReducer,compose(applyMiddleware(Logger,thunk)));

 return (
    <>
      <Provider store={store}>
            <View style={styles.container}>
      <Swiper>
      <View style={[styles.slideContainer,styles.slide]}>
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
          <View style={styles.body}>
       <ToggleSwitcher/>
        <BattleModeTouchable/>
        <BalanceTouchable/>
          </View>
        </ScrollView>
      </SafeAreaView>
      </View>
      <View>
      <User/>
      </View>
      </Swiper>
          </View>
    </Provider>
    </>
  );
};

export default App;

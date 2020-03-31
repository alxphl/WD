import React from 'react';
import * as Permissions from './components/Permissions';
import Home from './components/Home';
import User from './components/User';
import Top100 from './components/Top100';
import Logger from './components/Logger';
import styles from './styles';
import {ScrollView, View} from 'react-native';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import MainReducer from './store/reducers/MainReducer';
import Swiper from 'react-native-web-swiper';
import Authenticate from './components/Authenticate';

const App: () => React$Node = () => {
  Permissions.AccessFineLocation();

  const store = createStore(
    MainReducer,
    compose(applyMiddleware(Logger, thunk)),
  );

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Authenticate />

        <Swiper from={1}>
          <View>
            <Top100 />
          </View>
          <View style={[styles.slideContainer, styles.slide]}>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
              <Home />
            </ScrollView>
          </View>
          <View>
            <User />
          </View>
        </Swiper>
      </View>
    </Provider>
  );
};

export default App;

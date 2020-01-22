import React from 'react';
import BalanceTouchable from './BalanceTouchable';
import BattleModeTouchable from './BattleModeTouchable';
import ToggleSwitcher from './ToggleSwitcher';
import User from './User';
import styles from '../styles';
import { View } from 'react-native';



const Home: () => React$Node = () => {
 return (
    <View style={styles.body}>
        <ToggleSwitcher/>
        <BattleModeTouchable/>
        <BalanceTouchable/>
    </View>
  );
};

export default Home;

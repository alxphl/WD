import React from 'react';
import BalanceTouchable from './BalanceTouchable';
import BattleModeTouchable from './BattleModeTouchable';
import ToggleSwitcher from './ToggleSwitcher';
import User from './User';
import styles from '../styles';
import { View, Text } from 'react-native';



const Top100: () => React$Node = () => {
 return (
    <View style={styles.slide}>
        <Text> TOP 100 of World Domination Best Players</Text>
    </View>
  );
};

export default Top100;
import React, {useState} from 'react';
import * as Axios from './components/Axios';
import Permissions from './components/Permissions';
import BalanceTouchable from './components/BalanceTouchable';
import BattleModeTouchable from './components/BattleModeTouchable';
import styles from './styles';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

  
 const findCoordinates = () => {
   var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
	const location=	Geolocation.getCurrentPosition(success, error, options);
console.log(location);
	};

const App: () => React$Node = () => {

  const [user,setUser]=useState('Alex');
  const [battleMode,setBattleMode]=useState(false);
  const [googleId,setGoogleId]=useState('');
  const [coins,setCoins]=useState(10);
  const [battleCoins,setBattleCoins]=useState(0);
      Permissions();
  const BattleModeHandler = ()=>{
    setBattleMode(false);
    setCoins(coins+battleCoins);
    setBattleCoins(0);
   //  Alert.alert('Battle Mode Turn Off');
  }

const AddBattleCoins= ()=>{
  if(coins>1){
 setBattleCoins(battleCoins+1);
 setCoins(coins-1);
   setBattleMode(true);
  }
  else{
     Alert.alert('Please Add More Coins!');
  }

}

 return (
    <>
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
    </>
  );
};

export default App;

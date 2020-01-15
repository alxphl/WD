import React, {useState} from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App: () => React$Node = () => {

  const [user,setUser]=useState('Alex');
  const [battleMode,setBattleMode]=useState(false);
  const [googleId,setGoogleId]=useState('');
  const [coins,setCoins]=useState(10);
  const [battleCoins,setBattleCoins]=useState(0);

  const BattleModeHandler = ()=>{
  if(battleMode===true){
    setBattleMode(false);
    setCoins(coins+battleCoins);
    setBattleCoins(0);
     Alert.alert('Battle Mode Turn Off');
  }
  else{
    setBattleMode(true);
     Alert.alert('Battle Mode Turn On');
  }
}

const AddBattleCoins= ()=>{
  if(coins>1){
 setBattleCoins(battleCoins+1);
 setCoins(coins-1);
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
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Battle Mode</Text>
              <Text style={styles.sectionDescription}/>
                    <Button
          title={battleMode? "Battle On, Coins: "+String(battleCoins):"Battle Off, Coins: "+String(battleCoins)}
          color="red"
          onPress={BattleModeHandler}
        />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Balance:</Text>
                    <Button
          title={String(coins)}
          color="green"
          onPress={AddBattleCoins}
        />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },                                        
});

export default App;

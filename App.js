import React, {useState} from 'react';
import axios from 'axios';
import {request, PERMISSIONS} from 'react-native-permissions';
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
  PermissionsAndroid
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
async function getPermissions () {
   const granted= await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
         if (granted === "granted") {
      console.log('You can use the location '+granted);
    } else {
      console.log('location permission denied '+granted);
    }
}
  

const App: () => React$Node = () => {

  const [user,setUser]=useState('Alex');
  const [battleMode,setBattleMode]=useState(false);
  const [googleId,setGoogleId]=useState('');
  const [coins,setCoins]=useState(10);
  const [battleCoins,setBattleCoins]=useState(0);
getPermissions();
  const BattleModeHandler = ()=>{
    setBattleMode(false);
    setCoins(coins+battleCoins);
    setBattleCoins(0);
   //  Alert.alert('Battle Mode Turn Off');
 
    // axios.get('https://pokeapi.co/api/v2/pokemon/151').then(res=>{console.log(res)});
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
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Battle Mode</Text>
              <Text style={styles.sectionDescription}/>
         <TouchableOpacity
   style={{
       borderWidth:1,
       borderColor:'rgba(255,0,0,0.2)',
       backgroundColor:'rgba(255,0,0,0.9)',
       alignItems:'center',
       justifyContent:'center',
       width:100,
       height:100,
       backgroundColor:'red',
       borderRadius:50,
       alignItems:'center',
     }}
       onPress={BattleModeHandler}
 >
     <View style={[styles.countContainer]}>
         <Text style={[styles.countText]}>
           {String(battleCoins)}
          </Text>
        </View>
 </TouchableOpacity>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Balance:</Text>
                     <TouchableOpacity
   style={{
       borderWidth:1,
       borderColor:'rgba(255,0,0,0.2)',
       backgroundColor:'rgba(255,0,0,0.9)',
       alignItems:'center',
       justifyContent:'center',
       width:100,
       height:100,
       backgroundColor:'green',
       borderRadius:50,
       alignItems:'center',
     }}
       onPress={AddBattleCoins}
 >
     <View style={[styles.countContainer]}>
         <Text style={[styles.countText]}>
           {String(coins)}
          </Text>
        </View>
 </TouchableOpacity>
 
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

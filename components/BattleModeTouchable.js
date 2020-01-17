import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
const BattleModeTouchable: (props) => React$Node = (props) => {

  const [coins,setCoins]=useState(10);
  const [battleCoins,setBattleCoins]=useState(0);
  const [battleMode,setBattleMode]=useState(false);
 const BattleModeHandler = ()=>{
    setBattleMode(false);
    setCoins(coins+battleCoins);
    setBattleCoins(0);
   //  Alert.alert('Battle Mode Turn Off');
  }




 return (
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
        );
}
export default BattleModeTouchable;
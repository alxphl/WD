import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles';
const BalanceTouchable: (props) => React$Node = (props) => {

  const [coins,setCoins]=useState(10);
  const [battleCoins,setBattleCoins]=useState(0);
  const [battleMode,setBattleMode]=useState(false);
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
        );
}
export default BalanceTouchable;
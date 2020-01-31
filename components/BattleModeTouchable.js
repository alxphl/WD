import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Pulse from 'react-native-pulse';
import * as actionCreators from '../store/actions/index';
import styles from '../styles';
import * as Axios from './Axios';
import  CurrentLocation from './CurrentLocation';
const BattleModeTouchable: (props) => React$Node = (props) => {
   const {
      PlayId,
      Coins,
      BattleCoins,
      BattleMode,
      onGetBattleMode,
      onGetCoins,
      onGetBattleCoins,
      Location,
    } = props;

 const BattleModeHandler =async ()=>{
    //onGetBattleMode(false);
   // onGetCoins(Coins+BattleCoins);
   // onGetBattleCoins(0);
var user= await Axios.BattleModeHandler(PlayId,BattleCoins,BattleMode,Location);
//console.log("USER AFTER BATTLE MODE      :" + user)

    //onGetCoins(user.coins);
    //onGetBattleCoins(user.battleCoins);
   // onGetBattleMode(user.battleMode);
    
  }

 return (
          <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>The Battle</Text>
              <Text style={styles.sectionDescription}/>
              <CurrentLocation/>
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
              { BattleMode ? <Pulse color='orange' numPulses={3} diameter={100} speed={20} duration={100} /> : null }
                <View style={[styles.countContainer]}>
                  <Text style={[styles.countText]}>
                    {String(BattleCoins)}
                  </Text>
                </View>
              </TouchableOpacity>
          </View>      
        );
}

const mapStateToProps = (state) => ( {
    PlayId: state.PlayId,
    Coins: state.Coins,
    BattleCoins: state.BattleCoins,
    BattleMode: state.BattleMode,
    Location:state.Location,
});

const mapDispatchToProps = (dispatch) => ({
    onGetCoins: (val) => dispatch(actionCreators.getCoins(val)),
    onGetBattleCoins: (val) => dispatch(actionCreators.getBattleCoins(val)),
    onGetBattleMode: (val) => dispatch(actionCreators.getBattleMode(val)),
    onGetLocation: (val) => dispatch(actionCreators.getLocation(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BattleModeTouchable);

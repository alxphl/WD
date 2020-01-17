import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles';
import * as actionCreators from '../store/actions/index';
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

   const {
      PlayId,
      Coins,
      BattleCoins,
      BattleMode,
    } = props;


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
});

const mapDispatchToProps = (dispatch) => ({
    onGetCoins: (val) => dispatch(actionCreators.getCoins(val)),
    onGetBattleCoins: (val) => dispatch(actionCreators.getBattleCoins(val)),
    onGetBattleMode: (val) => dispatch(actionCreators.getBattleMode(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BattleModeTouchable);
import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles';
import * as actionCreators from '../store/actions/index';
const BalanceTouchable: (props) => React$Node = (props) => {

const {
      PlayId,
      Coins,
      BattleCoins,
      BattleMode,
      onGetBattleCoins,
      onGetCoins,
      onGetBattleMode,
    } = props;

const AddBattleCoins= ()=>{
  if(Coins>1){
 onGetBattleCoins(BattleCoins+1);
 onGetCoins(Coins-1);
   onGetBattleMode(true);
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
                                {String(Coins)}
                            </Text>
                        </View>
                    </TouchableOpacity>
            </View>      
        );
}
//export default BalanceTouchable;

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

export default connect(mapStateToProps, mapDispatchToProps)(BalanceTouchable);
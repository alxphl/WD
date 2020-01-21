import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';
import * as Location from './Location';
import styles from '../styles';

const User: (props) => React$Node = (props) => {

const {
    PlayId,
    Username,
    FirstName,
    LastName,
    WinRate,
    LostRate,
    WorldDominationRank,
    Tear,
    Bank,
    onGetId,
    onGetUserName,
    onGetFirstName,
    onGetLastName,
    onGetWinRate,
    onGetLostRate,
    onGetWorldDominationRank,
    onGetTear,
    onGetBank,
    } = props;

 return (
    <View style={styles.sectionContainer}>
        <View> 
            <View>
                <Text>   {FirstName} {LastName}</Text>
                 <Text> {WorldDominationRank} place in Top Rating</Text>
            </View>
        </View>
            <Text>Win rate: {WinRate}%</Text>
            <Text>Lost rate: {LostRate}%</Text>
            <Text>Wolrd Domination Rate: {WorldDominationRank}</Text>
            <Text>Your Tear: {Tear}</Text>
            <Text>Your Bank: {Bank}</Text>
    </View>
        );
}

const mapStateToProps = (state) => ( {
    PlayId: state.PlayId,
    Username: state.Username,
    FirstName:state.FirstName,
    LastName:state.LastName,
    WinRate:state.WinRate,
    LostRate:state.LostRate,
    WorldDominationRank: state.WorldDominationRank,
    Tear:state.Tear,
    Bank:state.Bank,
});

const mapDispatchToProps = (dispatch) => ({
    onGetId: (val) => dispatch(actionCreators.getPlayId(val)),
    onGetUserName: (val) => dispatch(actionCreators.getUsername(val)),
    onGetFirstName:(val) => dispatch(actionCreators.getFirstName(val)),
    onGetLastName:(val) => dispatch(actionCreators.getLastName(val)),
    onGetWinRate:(val) => dispatch(actionCreators.getWinRate(val)),
    onGetLostRate:(val) => dispatch(actionCreators.getLostRate(val)),
    onGetWorldDominationRank:(val) => dispatch(actionCreators.getWorldDominationRank(val)),
    onGetTear:(val) => dispatch(actionCreators.getTear(val)),
    onGetBank:(val) => dispatch(actionCreators.getBank(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);

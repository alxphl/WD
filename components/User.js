import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';
import * as Location from './Location';
import styles from '../styles';

const User: (props) => React$Node = (props) => {

const { PlayId, Username, onGetId, onGetUserName } = props;

 return (
    <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Welcome {Username} to</Text>
        <Text style={styles.sectionTitle}>  World Domination!</Text>
    </View>
        );
}

const mapStateToProps = (state) => ( {
    PlayId: state.PlayId,
    Username: state.Username,
});

const mapDispatchToProps = (dispatch) => ({
    onGetId: (val) => dispatch(actionCreators.getPlayId(val)),
    onGetUserName: (val) => dispatch(actionCreators.getUsername(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);

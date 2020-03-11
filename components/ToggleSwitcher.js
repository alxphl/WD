import React from 'react';
import {connect} from 'react-redux';
import styles from '../styles';
import * as actionCreators from '../store/actions/index';
import ToggleSwitch from 'toggle-switch-react-native';

const ToggleSwitcher: props => React$Node = props => {
  const {AutoBattleMode, onGetAutoBattleMode} = props;

  const AutoBattleHandler = () => {
    onGetAutoBattleMode(!AutoBattleMode);
  };

  return (
    <ToggleSwitch
      isOn={AutoBattleMode}
      onColor="green"
      offColor="gray"
      label="Auto Battle Mode"
      labelStyle={{color: 'black', fontWeight: '900'}}
      size="medium"
      onToggle={AutoBattleHandler}
    />
  );
};

const mapStateToProps = state => ({
  AutoBattleMode: state.AutoBattleMode,
});

const mapDispatchToProps = dispatch => ({
  onGetAutoBattleMode: val => dispatch(actionCreators.getAutoBattleMode(val)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToggleSwitcher);

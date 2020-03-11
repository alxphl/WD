import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actions/index';
import Geolocation from '@react-native-community/geolocation';

class CurrentLocation extends React.Component {
  constructor(props) {
    super(props);
    this.ManageLocation();
  }

  ManageLocation = async () => {
    const {Location, onGetLocation} = this.props;

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      var crd = pos.coords;

      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
      onGetLocation({Latitude: crd.latitude, Longitude: crd.longitude});
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    const CurrentPosition = Geolocation.getCurrentPosition(
      success,
      error,
      options,
    );
    console.log(CurrentPosition);
  };

  render() {
    return <View />;
  }
}

const mapStateToProps = state => ({
  Location: state.Location,
});
const mapDispatchToProps = dispatch => ({
  onGetLocation: val => dispatch(actionCreators.getLocation(val)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrentLocation);

import React, {useState} from 'react';
import {request, PERMISSIONS} from 'react-native-permissions';


const Permissions: () => React$Node = async () => {


   const granted= await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
         if (granted === "granted") {
      console.log('You can use the location '+granted);
      findCoordinates();
      } else {
      console.log('location permission denied '+granted);
     }
   
}

export default Permissions;
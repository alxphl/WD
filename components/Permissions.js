import {request, PERMISSIONS} from 'react-native-permissions';

export const AccessFineLocation = async () =>
  await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

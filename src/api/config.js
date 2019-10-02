import {Platform} from 'react-native';

export default {
  hostname:
    Platform.OS === 'ios' ? 'http://localhost:4000' : 'http://10.0.2.2:4000',
  token: '00c25d96-ca8c-463d-8c1d-fadb39091ffe',
};

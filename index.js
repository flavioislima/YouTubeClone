import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native';

//Ignore some isMounted Warning that was not fixed in React Native
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('Kazagastao', () => App);

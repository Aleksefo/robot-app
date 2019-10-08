import {QueueScreen} from './screens/QueueScreen';
import {ControllerScreen} from './screens/ControllerScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import DpadScreen from './screens/DpadScreen';

const TabNavigator = createBottomTabNavigator({
  Queue: QueueScreen,
  Controller: ControllerScreen,
  Dpad: DpadScreen,
});

export default createAppContainer(TabNavigator);

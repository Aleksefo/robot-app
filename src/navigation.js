import {QueueScreen} from './screens/QueueScreen';
import {ControllerScreen} from './screens/ControllerScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const TabNavigator = createBottomTabNavigator({
  Queue: QueueScreen,
  Controller: ControllerScreen,
});

export default createAppContainer(TabNavigator);

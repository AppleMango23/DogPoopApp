import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Contents from './screens/Contents.js';
// import Login from './screens/Login.js';

const AppNavigator = createStackNavigator(
  {
    Contents: Contents,
    //This still in development...
    //Login:Login,
    
  },
  {
    initialRouteName: "Contents",
     headerMode: 'none',
  }
);
export default createAppContainer(AppNavigator);







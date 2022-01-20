import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/stackNavigation';
import { navigationRef, routeNameRef } from './src/services/navigationService';
import { Provider, useSelector } from 'react-redux';
import store from './src/redux/store'
import { View } from 'react-native';


function App() {


  return (
    <View testID={'APPTEST'}>
      <Provider store={store} >
        <NavigationContainer
          ref={navigationRef}
        >
          <StackNavigator />
        </NavigationContainer>
      </Provider>
    </View>
  );
}

export default App;

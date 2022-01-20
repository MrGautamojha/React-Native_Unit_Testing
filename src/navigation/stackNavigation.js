import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screen/Login/Login';
import Detail from '../screen/Detail/Detail';

const Stack = createNativeStackNavigator();

function StackNavigator() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    );
}

export default StackNavigator;

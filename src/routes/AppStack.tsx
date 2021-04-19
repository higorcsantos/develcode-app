import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../pages/SignUp';

const {Navigator,Screen} = createStackNavigator();
export default function Routes(){
    return(
        <NavigationContainer>
            <Navigator>
                <Screen
                name="SignUp"
                component={SignUp}/>
            </Navigator>
        </NavigationContainer>
    )
};
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import RecevierDetails from '../Screens/RecevierDetails';
import BookDonateScreen from '../Screens/BookDonateScreen';

export const AppStackNavigator = createStackNavigator({
    BookDonateList:{
        screen : BookDonateScreen
    },

    RecevierDetails:{
        screen : RecevierDetails
    },
},
{
    initialRouteName : 'BookDonateList'
}
)
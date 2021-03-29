import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import SideBarMenu from './SideBarMenu'
import SettingScreen from '../Screens/SettingScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import MyDonationScreen from '../Screens/MyDonationScreen';
export const AppDrawerNavigator = createDrawerNavigator({

Home : {
    screen : AppTabNavigator
},

MyDonations : {
   screen : MyDonationScreen 
},

Notifications : {
    screen : NotificationScreen
},

setting:{
screen : SettingScreen

},

},
{
    contentComponent : SideBarMenu
},


{
   initialRouteName : 'Home' 
})





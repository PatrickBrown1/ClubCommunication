import React from "react";
import { createBottomTabNavigator, createDrawerNavigator } from "react-navigation";

import DrawerContent from "../views/Sidebar"

import First from '../views/First';
import Home from '../views/Home';
import Club from '../views/Club'

export const Drawer = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  First: {
    screen: First,
  },
  Club: {
    screen: Club,
  },
}, {
  contentComponent: DrawerContent,
  drawerWidth: 250,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
});


export const Tab = createBottomTabNavigator({
  Home: {
    screen: Drawer,
  },
  First: {
    screen: First,
  },
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#f2f2f2',
    activeBackgroundColor: "#2EC4B6",
    inactiveTintColor: '#666',
    labelStyle: {
      fontSize: 22,
      padding: 12
    }
  }
});
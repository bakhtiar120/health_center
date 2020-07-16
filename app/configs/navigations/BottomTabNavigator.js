/*
 Date Created       : 14 July 2020
 Create Files       : Bakhtiar Hanafi
 Date Modified       : -
*/

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, BackHandler } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../views/home/HomeView';
import Color from '../../styles/colors';
import Style from '../../styles/styles';
import Profil from '../../views/profile/ProfileView';
import Activity from '../../views/activity/ActivityView';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ route, navigation }) => {



  return (
    <Tab.Navigator
      backBehavior="none"
      initialRouteName={"Home"}
      tabBarOptions={{
        activeTintColor: Color.active_tab,
        inactiveTintColor: Color.non_active_tab,
        style: { elevation: 0 },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            focused ? <MaterialCommunityIcons name="home" color={color} size={size} /> :
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarLabel: 'Activity',
          tabBarIcon: ({ focused, color, size }) => (
            focused ? <MaterialCommunityIcons name="book" color={color} size={size} /> :
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profil}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ focused, color, size }) => (
            focused ? <MaterialCommunityIcons name="account" color={color} size={size} /> :
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;


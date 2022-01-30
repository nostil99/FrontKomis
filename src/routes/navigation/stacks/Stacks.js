import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Home from '../../../scenes/home'
import Profile from '../../../scenes/profile'
import CarList from '../../../scenes/carList'
import AddCar from '../../../scenes/addCar'
import CarDetails from '../../../scenes/carDetails'
import CarModify from '../../../scenes/modifyCar'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
}

// ------------------------------------
// Navigators
// ------------------------------------

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => ({
        title: 'Home',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="CarList"
      component={CarList}
      options={({ navigation }) => ({
        title: 'carList',
      })}
    />
    <Stack.Screen
      name="AddCar"
      component={AddCar}
      options={({ navigation }) => ({
        title: 'AddCar',
      })}
    />
    <Stack.Screen
      name="CarDetails"
      component={CarDetails}
      options={({ navigation }) => ({
        title: 'CarDetails',
      })}
    />
    <Stack.Screen
      name="CarModify"
      component={CarModify}
      options={({ navigation }) => ({
        title: 'CarModify',
      })}
    />
  </Stack.Navigator>
)

export const ProfileNavigator = () => (
  <Stack.Navigator
    initialRouteName="Profile"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={({ navigation }) => ({
        title: 'Profile',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="carList"
      component={CarList}
      options={{
        title: 'carList',
      }}
    />
  </Stack.Navigator>
)

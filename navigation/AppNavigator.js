import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'


import Events from '../screen/Events';
import Event from '../screen/Event';
import Map from '../screen/Map';




const Stack = createNativeStackNavigator();

function EventsScreen() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Eventss" component={Events} />
      <Stack.Screen name="Eventt" component={Event} />
    </Stack.Navigator>
  )
}

function MapScreen() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Mapp" component={Map} />
    </Stack.Navigator>
  )
}



const Tab = createBottomTabNavigator();
//const Tab = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Events') {
              iconName = focused
                ? 'person'
                : 'person-outline';
            } else if (route.name === 'Map') {
              iconName = focused
                ? 'earth'
                : 'earth-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Events"
          component={EventsScreen}
          options={() => (
            {
              headerTitle: 'Home Page',
              headerShown: true,
            }
          )} />
        <Tab.Screen name="Map"
          component={MapScreen}
          options={() => (
            {
              headerTitle: 'Map Page',
              headerShown: true,
            }
          )}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import {
    Login, Register, Home
} from '../../pages'

const Stack     = createStackNavigator()
const BottomTab = createBottomTabNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Login" 
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                 />
                <Stack.Screen 
                    name="Register" 
                    component={Register} 
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="Home"
                    component={MyBottomTab}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const MyBottomTab = () => {
    return (
        <BottomTab.Navigator
            tabBarOptions={{
                style: {backgroundColor: '#111100'},
                showLabel: false
            }}
        >
            <BottomTab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name="home" size={24} color={focused? '#fff' : '#2C2B2E'} />
                    ),
                }}
            />
            <BottomTab.Screen 
                name="Favourites" 
                component={Home} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name="heart" size={24} color={focused? '#fff' : '#2C2B2E'} />
                    )
                }}
            />
            <BottomTab.Screen 
                name="Cart" 
                component={Home} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name="cart" size={24} color={focused? '#fff' : '#2C2B2E'} />
                    )
                }}
            />
            <BottomTab.Screen 
                name="Profile" 
                component={Home} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name="person" size={24} color={focused? '#fff' : '#2C2B2E'} />
                    )
                }}
            />
        </BottomTab.Navigator>
    )
}

export default Router
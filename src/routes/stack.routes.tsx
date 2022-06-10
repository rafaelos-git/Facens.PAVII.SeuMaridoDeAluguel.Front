import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import colors from "../styles/colors"
import { Auth } from '../screens/Auth'
import { Home } from '../screens/Home'
import { Profile } from "../screens/Profile"
import { Schedule } from '../screens/Schedule'

const stackRoutes = createStackNavigator()

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: colors.white
            }
        }}
    >
        <stackRoutes.Screen
            name="Auth"
            component={Auth}
        />
        <stackRoutes.Screen
            name="Home"
            component={Home}
        />
        <stackRoutes.Screen
            name="Profile"
            component={Profile}
        />
        <stackRoutes.Screen
            name="Schedule"
            component={Schedule}
        />
    </stackRoutes.Navigator>
)

export default AppRoutes
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import colors from "../styles/colors"
import { Auth } from '../screens/Auth'
import { Home } from '../screens/Home'

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
    </stackRoutes.Navigator>
)

export default AppRoutes
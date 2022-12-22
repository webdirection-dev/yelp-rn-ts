import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator()

import HomeScreen from "./screens/homeScreen/HomeScreen"
import RestaurantScreen from "./screens/restaurantScreen/RestaurantScreen"

import {Button} from "react-native"

const Navigation = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    title: 'Business Search',
                    headerStyle: {backgroundColor: '#ea7ba4'},
                    headerTintColor: '#fff',
                }}
            />

            <Stack.Screen
                name='Restaurant'
                component={RestaurantScreen}
                //VAR 2
                options={({navigation, route}) => ({
                    headerBackTitle: 'Search',
                    title: 'Restaurant',
                    headerStyle: {backgroundColor: '#ea7ba4'},
                    headerTintColor: '#fff',
                })}
            />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Navigation

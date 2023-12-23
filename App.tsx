import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native"
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import UserScreen from "./src/screens/UserScreen";
import {Ionicons} from "@expo/vector-icons"

// const Drawer = createDrawerNavigator();
const Bottom = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Bottom.Navigator initialRouteName={"User"} screenOptions={{
                headerStyle: {backgroundColor: "#3c0a6b"},
                headerTintColor: "white",
                tabBarActiveTintColor: "#3c0a6b"
            }}>
                <Bottom.Screen
                    name={"Welcome"}
                    component={WelcomeScreen}
                    options={{
                        tabBarIcon: ({color, size}) => <Ionicons name={"home"} color={color} size={size} />
                    }}

                />
                <Bottom.Screen
                    name={"User"}
                    component={UserScreen}
                    options={{
                        tabBarIcon: ({color, size}) => <Ionicons name={"person"} color={color} size={size} />
                    }}
                />
            </Bottom.Navigator>
        </NavigationContainer>
    );
}



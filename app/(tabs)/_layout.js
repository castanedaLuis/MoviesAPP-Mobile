import { Tabs } from "expo-router";
import { View } from "react-native";
import { InfoIcon, HomeIcon } from "../../Components/Icons";


export default function TabsLayout() {
    return <Tabs>
        <Tabs.Screen
            name="index"
            options={{
                headerShown: false,
                tabBarIcon: ({ color }) => <HomeIcon color={color} size={24} />,
                tabBarLabel: "Home",
                tabBarStyle: {
                    backgroundColor: '#000',
                    borderTopWidth: 0,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 60,
                },
            }}
        />
        <Tabs.Screen
            name="about"
            options={{
                headerShown: false,
                tabBarIcon: ({ color }) => <InfoIcon color={color} size={24} />,
                tabBarLabel: "About",
                tabBarStyle: {
                    backgroundColor: '#000',
                    borderTopWidth: 0,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 60,
                },
            }}
        />
    </Tabs>
}
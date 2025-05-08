import { Stack, Link } from "expo-router"
import { Text, Pressable } from "react-native";
import { InfoIcon } from "../Components/Icons";

export default function _layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitle: "",
                headerLeft: () => <Text style={{ color: '#fff', fontSize: 24, marginBottom: 20 }}>Popular Movies</Text>,
                headerRight: () => (<Link href="/about" asChild>
                    <Pressable>
                        <InfoIcon color='white' size={24} />
                    </Pressable>
                </Link>),
            }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="about" />
        </Stack>
    )
}

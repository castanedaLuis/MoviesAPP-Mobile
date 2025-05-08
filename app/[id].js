import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { ScreenLayout } from "../Components/ScreenLayout";

export default function DetailsMovie() {
    const { id } = useLocalSearchParams();
    return (
        <ScreenLayout>
            <Text style={{ color: '#fff' }}>Details Movie{id}</Text>
        </ScreenLayout>
    )
}
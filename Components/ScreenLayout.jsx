import { View } from "react-native"
export function ScreenLayout({ children }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#000', paddingTop: 16, paddingHorizontal: 8 }}>
            {children}
        </View>
    )
}
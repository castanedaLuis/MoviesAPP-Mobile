import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export const InfoIcon = ({ name = "info", size, color }) => {
    return (
        <Feather name={name} size={size} color={color} />
    )
}

export const HomeIcon = ({ name = "home", size, color }) => {
    return (
        <FontAwesome name={name} size={size} color={color} />
    )
}
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { View } from 'react-native';

export const BellIcon = (props) => {
    return <FontAwesome5 name="bell" size={24} color="white" {...props}/>
}

export const HomeIcon = (props) => {
    return <Octicons name="home" size={24} color="black" {...props} />
}

export const FriendIcon = (props) => {
    return <Octicons name="people" size={24} color="black" {...props}/>
}

export const FlameIcon = (props) => {
    return <Octicons name="flame" size={24} color="black" {...props} />
}

export const Bars = (props) => {
    return <Octicons name="three-bars" size={24} color="white" {...props} />
}


import {View, TouchableOpacity, StyleSheet, Text} from 'react-native'
import { Colors } from '../styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface HeaderProps {
    reloadGame: () => void,
    pauseGame: () => void,
    children: JSX.Element;
    isPaused: boolean
}

export default function Header({
    children,
    reloadGame,
    pauseGame,
    isPaused,
}: HeaderProps): JSX.Element {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={reloadGame}>
                <Ionicons name="reload-circle" size={30} color={Colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity onPress={pauseGame}>
                <AntDesign name={isPaused ? "play" :'pausecircle'} size={30} color={Colors.primary} />
            </TouchableOpacity>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.06,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: Colors.primary,
        borderWidth: 12,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomWidth: 0,
        padding: 15,
        backgroundColor: Colors.background
    }
})
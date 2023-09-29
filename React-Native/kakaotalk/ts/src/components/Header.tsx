import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { Header } from "../types/BaseType";


const IconButton = ({ name } :Header) => {
    return (
        <TouchableOpacity hitSlop={{ top: 15, bottom: 15 }} style={styles.icon}>
            <Ionicons name={ name } size={24} color="black" />
        </TouchableOpacity>
    )
}


export default () => {
    return (
        <View style={styles.headerWrap}>
            <Text style={styles.title}>친구</Text>
            <View style={styles.iconWrap}>
                <IconButton name={"search-outline"} />
                <IconButton name={"person-add-outline"} />
                <IconButton name={"md-musical-notes-outline"} />
                <IconButton name={"ios-settings-outline"} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    headerWrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },

    iconWrap: {
        flexDirection: 'row',
    },

    icon: {
        paddingHorizontal: 6,
    }
})
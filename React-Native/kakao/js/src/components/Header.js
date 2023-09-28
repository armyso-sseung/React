import {View, Text, SafeAreaView, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ name }) => {
    return (
        <View style={styles.icon}>
            <Ionicons name={ name } size={24} color="black" />
        </View>
    )
}


export default  () => {
    return (
        <View style={styles.headerContainer}>
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
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
    },

    title: {
        fontSize: 22,
        fontWeight: "bold",
    },

    iconWrap: {
        flexDirection: "row",
    },

    icon: {
        paddingHorizontal: 6,
    },
})
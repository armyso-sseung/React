import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { FriendSection } from "../types/BaseType"
import { MaterialIcons } from '@expo/vector-icons';


export default ({ friendProfileLen, onPress, isOpened } :FriendSection) => {
    return (
        <View style={styles.friendSectionWrap}>
            <Text style={styles.title}>친구 { friendProfileLen }</Text>

            <TouchableOpacity onPress={onPress}>
                <MaterialIcons name={ isOpened ? "keyboard-arrow-up" : "keyboard-arrow-down" } size={24} color="lightgrey" />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    friendSectionWrap: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    title:  {
        color: "grey"
    }
})
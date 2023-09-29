import {StyleSheet, TouchableOpacity, View} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {getBottomSpace} from "react-native-iphone-x-helper";


const bottomSpace = getBottomSpace()


const TabButton = ({ onPress, isSelected, activeIcon, inactiveIcon, isIconFontisto, isIconIonIcons, isIconEntypo }) => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.tabButton} >
            { isIconFontisto && <Fontisto name={ isSelected ? activeIcon : inactiveIcon } size={24} color="black" /> }
            { isIconIonIcons && <Ionicons name={ isSelected ? activeIcon : inactiveIcon } size={24} color="black" /> }
            { isIconEntypo && <Entypo name={ isSelected ? activeIcon : inactiveIcon } size={24} color="black" /> }
        </TouchableOpacity>
    )
}


export default ({ selectedTabIdx, setSelectedTabIdx }) => {
    return (
        <View style={styles.tabBarWrap}>
            <TabButton
                isSelected={selectedTabIdx === 0}
                onPress={() => setSelectedTabIdx(0)}
                activeIcon={"person"}
                inactiveIcon={"person-outline"}
                isIconIonIcons
            />
            <TabButton
                isSelected={selectedTabIdx === 1}
                onPress={() => setSelectedTabIdx(1)}
                activeIcon={"chatbubble"}
                inactiveIcon={"chatbubble-outline"}
                isIconIonIcons
            />
            <TabButton
                isSelected={selectedTabIdx === 2}
                onPress={() => setSelectedTabIdx(2)}
                activeIcon={"hashtag"}
                inactiveIcon={"hashtag"}
                isIconFontisto
            />
            <TabButton
                isSelected={selectedTabIdx === 3}
                onPress={() => setSelectedTabIdx(3)}
                activeIcon={"dots-three-horizontal"}
                inactiveIcon={"dots-three-horizontal"}
                isIconEntypo
            />
        </View>
    )
}


const styles = StyleSheet.create({
    tabBarWrap: {
        flexDirection: "row",
        width: "100%",
        paddingBottom: bottomSpace,
        borderTopWidth: 0.5,
        borderTopColor: "grey"
    },

    tabButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10
    }
})
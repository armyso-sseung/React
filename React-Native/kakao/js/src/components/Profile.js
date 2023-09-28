import {StyleSheet, View, Image, Text} from "react-native";
import Margin from "./common/Margin";


export default ({ name, uri, introduction }) => {
    return (
        <View style={styles.profileWrap}>
            <Image source={{ uri }} style={styles.image} />
            <View style={styles.textWrap}>
                <Text style={styles.name}>{ name }</Text>

                <Margin height={6} />

                <Text style={styles.introduction}>{ introduction }</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    profileWrap: {
        flexDirection: "row",
    },

    image: {
        width: 50,
        height: 50,
        borderRadius: 20,
    },

    textWrap: {
        justifyContent: "center",
        marginLeft: 10,
    },

    name: {
        fontWeight: "bold",
        fontSize: 16,
    },

    introduction: {
        fontSize: 12,
        color: "grey"
    },
});
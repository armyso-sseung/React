import { Image, StyleSheet, Text, View } from "react-native"
import { Profile } from "../types/BaseType"
import Margin from "./common/Margin"


export default ({ uri, name, introduction, isMe } :Profile) => {
    const size :number = isMe ? 50 : 40


    return (
        <View style={styles.profileWrap}>
            <Image source={{ uri }} style={{
                width: size,
                height: size,
                borderRadius: size * 0.4
            }} />
            <View style={styles.textWrap}>
                <Text style={{
                    fontSize: isMe ? 16 : 15,
                    fontWeight: isMe ? "bold" : undefined
                }}>{ name }</Text>
                {!!introduction && (
                    <View>
                        <Margin height={ isMe ? 6 : 2 } />
                        <Text style={{
                            fontSize: isMe ? 12 : 11,
                            color: "grey"
                        }}>{ introduction }</Text>
                    </View>
                )}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    profileWrap: {
        flexDirection: "row",
    },

    textWrap: {
        justifyContent: "center",
        marginLeft: 10,
    }
})
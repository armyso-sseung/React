import {StyleSheet, View, Image, Text, styled} from "react-native";
import Margin from "./common/Margin";


// const Container = styled.View`
//     flex-direction: row;
// `


export default ({ name, uri, introduction, isMe }) => {
    const size = isMe ? 50 : 40


    return (
        <View style={styles.profileWrap}>
            <Image source={{ uri }} style={{
                width: size,
                height: size,
                borderRadius: size * 0.4
            }} />
            <View style={styles.textWrap}>
                <Text style={{
                    fontWeight: isMe ? "bold" : undefined,
                    fontSize: isMe ? 16 : 15
                    }}>{ name }</Text>

                {!!introduction && (
                    <View>
                        <Margin height={isMe ? 6 : 2} />
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


const styles = (isMe) = StyleSheet.create({
    profileWrap: {
        flexDirection: "row"
    },

    textWrap: {
        justifyContent: "center",
        marginLeft: 10,
    },
});
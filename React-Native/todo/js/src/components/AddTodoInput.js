import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import {bottomSpace, ITEM_WIDTH} from "../util/commonUtil";
import { AntDesign } from "@expo/vector-icons"


export default ({ value, handleChangeText, placeholder, handleClickAdd, handleFocusInput }) => {
    return (
        <View style={styles.inputWrap}>
            <TextInput
                value={value}
                onChangeText={handleChangeText}
                placeholder={placeholder}
                onSubmitEditing={handleClickAdd}
                blurOnSubmit={false}
                onFocus={handleFocusInput}
                style={styles.input}
            />

            <TouchableOpacity onPress={handleClickAdd} style={styles.plus} >
                <AntDesign name={"plus"} size={18} color={"#595959"} />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    inputWrap: {
        flexDirection: "row",
        width: ITEM_WIDTH,
        alignItems: "center",
        alignSelf: "center",
    },

    input: {
        flex: 1,
        padding: 5,
        color: "#595959",
    },

    plus: {
        padding: 5,
    },
})
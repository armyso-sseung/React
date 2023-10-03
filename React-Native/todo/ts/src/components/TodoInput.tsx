import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import {TodoInputType} from "../type/baseType";
import {ITEM_WIDTH} from "../util/commonUtil";



export default ({ input, setInput, placeholder, handleClickAdd, handleFocusInput } :TodoInputType) => {
    return (
        <View style={ styles.inputWrap }>
            <TextInput
                value={ input }
                placeholder={ placeholder }
                onChangeText={ setInput }
                onSubmitEditing={ handleClickAdd }
                onFocus={ handleFocusInput }
                blurOnSubmit={ false }
                style={ styles.inputText }
            />

            <TouchableOpacity onPress={ handleClickAdd } style={ styles.inputButton }>
                <AntDesign name={"plus"} size={18} color={"#595959"} />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    inputWrap: {
        flexDirection: "row",
        width: ITEM_WIDTH,
        alignSelf: "center",
        alignItems: "center"
    },

    inputText: {
        flex: 1,
        padding: 5,
        color: "#595959"
    },

    inputButton: {
        padding: 5
    },
})
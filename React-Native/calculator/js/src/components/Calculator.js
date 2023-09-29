import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import styled from "styled-components/native";
import {useCalculator} from "../hooks/use-calculator";


const colorMap = {
    RESULT: '#4e4c51',
    RESET: '#5f5e62',
    OPERATOR: '#f39c29',
    NUM: '#5c5674',
}


const Button = ({ text, onPress, flex, type, isSelected }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                flex,
                justifyContent: "center",
                alignItems: "center",
                height: 80,
                borderWidth: isSelected ? 1 : 0.2,
                borderColor: "black",
                backgroundColor: colorMap[type]
            }}
        >
            <Text style={styles.buttonText}>{ text }</Text>
        </TouchableOpacity>
    )
}


const ButtonContainer = styled.View`
    flex-direction: row;
    width: 100%;
`

const InputContainer = styled.View`
    background-color: ${ colorMap["RESULT"] };
    min-height: 80px;
    justify-content: center;
    align-items: flex-end;
    padding: 10px 5px;
`

const DevText = styled.Text`
  font-size: 20px;
`


export default () => {
    const {
        input,
        currentOperator,
        result,
        tempInput,
        tempOperator,
        hasInput,
        onPressNum,
        onPressOperator,
        onPressReset
    } = useCalculator()


    return (
        <View style={styles.calculator}>
            <View style={styles.devResultCheck}>
                <DevText>input ==> {input}</DevText>
                <DevText>currentOperator ==> {currentOperator}</DevText>
                <DevText>result ==> {result}</DevText>
                <DevText>tempInput ==> {tempInput}</DevText>
                <DevText>tempOperator ==> {tempOperator}</DevText>
            </View>

            {/* 결과 */}
            <InputContainer>
                <Text style={styles.inputText}>{ input }</Text>
            </InputContainer>

            {/* [AC ~ /] */}
            <ButtonContainer>
                <Button
                    text={hasInput ? "C" : "AC"}
                    onPress={() => onPressReset()}
                    flex={3}
                    type={"RESET"}
                />
                <Button
                    text={"/"}
                    onPress={() => onPressOperator("/")}
                    flex={1}
                    type={"OPERATOR"}
                    isSelected={currentOperator === "/"}
                />
            </ButtonContainer>

            {/* [7 ~ x] */}
            <ButtonContainer>
                { [7, 8, 9].map(( num ) => (
                    <Button
                        key={`num_${ num }`}
                        text={`${num}`}
                        onPress={() => onPressNum(num)}
                        flex={1}
                        type={"NUM"}
                    />
                ))}
                <Button
                    text={"*"}
                    onPress={() => onPressOperator("*")}
                    flex={1}
                    type={"OPERATOR"}
                    isSelected={currentOperator === "*"}
                />
            </ButtonContainer>

            {/* [4 ~ -] */}
            <ButtonContainer>
                { [4, 5, 6].map(( num ) => (
                    <Button
                        key={`num_${ num }`}
                        text={`${num}`}
                        onPress={() => onPressNum(num)}
                        flex={1}
                        type={"NUM"}
                    />
                ))}
                <Button
                    text={"-"}
                    onPress={() => onPressOperator("-")}
                    flex={1}
                    type={"OPERATOR"}
                    isSelected={currentOperator === "-"}
                />
            </ButtonContainer>

            {/* [1 ~ +] */}
            <ButtonContainer>
                { [1, 2, 3].map(( num ) => (
                    <Button
                        key={`num_${ num }`}
                        text={`${num}`}
                        onPress={() => onPressNum(num)}
                        flex={1}
                        type={"NUM"}
                    />
                ))}
                <Button
                    text={"+"}
                    onPress={() => onPressOperator("+")}
                    flex={1}
                    type={"OPERATOR"}
                    isSelected={currentOperator === "+"}
                />
            </ButtonContainer>

            {/* [0 ~ =] */}
            <ButtonContainer>
                <Button
                    text={"0"}
                    onPress={() => onPressNum(0)}
                    flex={3}
                    type={"NUM"}
                />
                <Button
                    text={"="}
                    onPress={() => onPressOperator("=")}
                    flex={1}
                    type={"OPERATOR"}
                />
            </ButtonContainer>
        </View>
    )
}


const styles = StyleSheet.create({
    calculator: {
        flex: 1,
        justifyContent: "flex-end",
    },

    buttonWrap: {
        flexDirection: "row",
        width: "100%"
    },

    buttonText: {
        color: "#fff",
        fontSize: 25,
    },

    inputText: {
        color: "#fff",
        fontSize: 40,
        textAlign: "right",
    },

    devResultCheck: {
        paddingVertical: 50,
    }
})
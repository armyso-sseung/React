import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import styled from "styled-components/native";
import {useState} from "react";


const colorMap = {
    RESULT: '#4e4c51',
    RESET: '#5f5e62',
    OPERATOR: '#f39c29',
    NUM: '#5c5674',
}


const Button = ({ type, text, flex, onPress, isSelected }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                flex,
                height: 80,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: isSelected ? 1 : 0.2,
                borderColor: "black",
                backgroundColor: colorMap[type]
            }}>
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
    justify-content: center;
    align-items: flex-end;
    min-height: 80px;
    padding: 10px 5px;
`

const DevText = styled.Text`
  font-size: 20px;
`


export default () => {
    const [input, setInput] = useState<number>(0)
    const [currentOperator, setCurrentOperator] = useState<string>(null)
    const [result, setResult] = useState<number>(null)
    const [tempInput, setTempInput] = useState<number>(null)
    const [tempOperator, setTempOperator] = useState<string>(null)
    const [isClickedOperator, setIsClickedOperator] = useState<boolean>(false)
    const [isClickedEqual, setIsClickedEqual] = useState<boolean>(false)
    const hasInput :boolean = !!input


    const handleClickNum = ( num :number ) => {
        if (currentOperator && isClickedOperator) {
            setResult(input)
            setInput(num)
            setIsClickedOperator(false)
            return
        }

        const newInput :number = Number(`${input}${num}`)
        setInput(newInput)
    }

    const handleClickOperator = ( operator :string ) => {
        if ( operator !== "=" ) {
            setCurrentOperator(operator)
            setIsClickedOperator(true)
            setIsClickedEqual(false)
            return
        }

        let finalResult :number = result
        switch (currentOperator) {
            case "/" :
                finalResult = result / input
                break

            case "*" :
                finalResult = result * input
                break

            case "-" :
                finalResult = result - input
                break

            case "+" :
                finalResult = result + input
                break

            default :
                break
        }

        setInput(finalResult)
        setCurrentOperator(null)
    }

    const handleClickReset = () => {
        if (hasInput) {
            setInput(0)
            return
        }

        setInput(0)
        setResult(null)
        setCurrentOperator(null)
        setIsClickedOperator(false)
        setIsClickedEqual(true)
    }


    return (
        <View style={styles.container}>
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
            {/* [ AC ~ / ] */}
            <ButtonContainer>
                <Button
                    type={"RESET"}
                    text={hasInput ? "C" : "AC"}
                    flex={3}
                    onPress={() => handleClickReset()}
                />
                <Button
                    type={"OPERATOR"}
                    text={"/"}
                    flex={1}
                    onPress={() => handleClickOperator("/")}
                    isSelected={currentOperator === "/"}
                />
            </ButtonContainer>

            {/* [ 7 ~ X ] */}
            <ButtonContainer>
                { [7, 8, 9].map(( num ) => (
                    <Button
                        key={`num_${num}`}
                        type={"NUM"}
                        text={`${num}`}
                        flex={1}
                        onPress={() => handleClickNum(num)}
                    />
                ))}
                <Button
                    type={"OPERATOR"}
                    text={"*"}
                    flex={1}
                    onPress={() => handleClickOperator("*")}
                    isSelected={currentOperator === "*"}
                />
            </ButtonContainer>

            {/* [ 4 ~ - ] */}
            <ButtonContainer>
                { [4, 5, 6].map(( num ) => (
                    <Button
                        key={`num_${num}`}
                        type={"NUM"}
                        text={`${num}`}
                        flex={1}
                        onPress={() => handleClickNum(num)}
                    />
                ))}
                <Button
                    type={"OPERATOR"}
                    text={"-"}
                    flex={1}
                    onPress={() => handleClickOperator("-")}
                    isSelected={currentOperator === "-"}
                />
            </ButtonContainer>

            {/* [ 1 ~ + ] */}
            <ButtonContainer>
                { [1, 2, 3].map(( num ) => (
                    <Button
                        key={`num_${num}`}
                        type={"NUM"}
                        text={`${num}`}
                        flex={1}
                        onPress={() => handleClickNum(num)}
                    />
                ))}
                <Button
                    type={"OPERATOR"}
                    text={"+"}
                    flex={1}
                    onPress={() => handleClickOperator("+")}
                    isSelected={currentOperator === "+"}
                />
            </ButtonContainer>

            {/* [ 0 ~ = ] */}
            <ButtonContainer>
                <Button
                    type={"NUM"}
                    text={"0"}
                    flex={3}
                    onPress={() => handleClickNum(0)}
                />
                <Button
                    type={"OPERATOR"}
                    text={"="}
                    flex={1}
                    onPress={() => handleClickOperator("=")}
                />
            </ButtonContainer>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
    },

    buttonWrap: {
    },

    buttonText: {
        color: "#fff",
        fontSize: 40
    },

    inputText: {
        color: "#fff",
        fontSize: 60,
    },

    devResultCheck: {
        paddingVertical: 50,
    }
})
import {
    Alert,
    FlatList,
    Image, Keyboard, KeyboardAvoidingView, Platform, Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import { Ionicons } from "@expo/vector-icons"

import {
    bottomSpace,
    getCalendarColumns,
    getDayColor,
    getDayText,
    ITEM_WIDTH,
    statusBarHeight
} from "./src/util/commonUtil";
import {useCalendar} from "./src/hooks/use-calendar";
import {useTodoList} from "./src/hooks/use-todo-list";
import Calendar from "./src/components/Calendar";
import Margin from "./src/components/common/Margin";
import AddTodoInput from "./src/components/AddTodoInput";
import dayjs from "dayjs";
import { useRef } from 'react';


export default function App() {
    const flatListRef = useRef()

    const {
        selectedDate,
        setSelectedDate,
        isDatePickerVisible,
        showDatePicker,
        hideDatePicker,
        handleConfirm,
        subtract1Month,
        add1Month
    } = useCalendar()
    const {
        input,
        setInput,
        todoList,
        setTodoList,
        filteredTodoList,
        addTodo,
        removeTodo,
        toggleTodo,
        resetInput
    } = useTodoList(selectedDate)

    const columns = getCalendarColumns(selectedDate)



    const handleClickLeftArrow = subtract1Month
    const handleClickRightArrow = add1Month
    const handleClickDate = setSelectedDate

    const handleClickAdd = () => {
        if (!input) return
        addTodo()
        resetInput()
        scrollToEnd()
    }

    const scrollToEnd = () => {
        setTimeout(() => {
            flatListRef.current?.scrollToEnd()
        }, 200)
    }

    const ListHeaderComponent = () => {
        return (
            <View>
                <Calendar
                    columns={columns}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    handleClickLeftArrow={handleClickLeftArrow}
                    handleClickRightArrow={handleClickRightArrow}
                    handleClickHeaderDate={showDatePicker}
                    handleClickDate={handleClickDate}
                    todoList={todoList}
                />

                <Margin height={15} />

                <View style={{ width: 4, height: 4, borderRadius: 4/2, backgroundColor: "#a3a3a3", alignSelf: "center" }} />

                <Margin height={15} />
            </View>
        )
    }

    const renderItem = ({item: todo}) => {
        const isSuccess = todo.isSuccess


        const handleClickTodoToggle = () => toggleTodo(todo.id)
        const handleClickTodoRemove = () => {
            Alert.alert("정말 삭제하시겠습니까?", "", [
                {
                    text: "아니요",
                    style: "cancel"
                }, {
                    text: "예",
                    onPress: () => removeTodo(todo.id),
                }
            ])
        }


        return (
            <Pressable
                onPress={handleClickTodoToggle}
                onLongPress={handleClickTodoRemove}
                style={styles.todoWrap}
            >
                <Text style={styles.todoText}>{todo.content}</Text>
                <Ionicons name={"ios-checkmark"} size={17} style={{ color: isSuccess ? "#595959" : "#bfbfbf" }} />
            </Pressable>
        )
    }


    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            <Image
                source={{
                    uri: "https://img.freepik.com/free-photo/white-crumpled-paper-texture-for-background_1373-159.jpg?w=1060&t=st=1667524235~exp=1667524835~hmac=8a3d988d6c33a32017e280768e1aa4037b1ec8078c98fe21f0ea2ef361aebf2c",
                }}
                style={styles.image}
            />

            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View>
                    <FlatList
                        ref={flatListRef}
                        data={filteredTodoList}
                        contentContainerStyle={{ paddingTop: statusBarHeight + 30 }}
                        ListHeaderComponent={ ListHeaderComponent }
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                    />

                    <AddTodoInput
                        value={input}
                        handleChangeText={setInput}
                        placeholder={`${dayjs(selectedDate).format("MM.D")}에 추가할 투두`}
                        handleClickAdd={handleClickAdd}
                        handleFocusInput={scrollToEnd}
                    />
                </View>
            </KeyboardAvoidingView>

            <Margin height={bottomSpace + 30} />

            <DateTimePicker
                isVisible={isDatePickerVisible}
                mode={"date"}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </Pressable>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },

    todoWrap: {
        flexDirection: "row",
        width: ITEM_WIDTH,
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderBottomWidth: 0.6,
        borderColor: "#a6a6a6",
        alignSelf: "center",
    },

    todoText: {
        flex: 1,
        fontSize: 14,
        color: "#595959",
    }
});

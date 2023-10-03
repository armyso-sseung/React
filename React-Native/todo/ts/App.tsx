import {
    FlatList,
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {bottomSpace, getCalendarColumns} from "./src/util/commonUtil";
import DateTimePicker from "react-native-modal-datetime-picker";
import { Ionicons } from "@expo/vector-icons"
import dayjs from "dayjs";
import React, {useRef} from "react";

import Calendar from "./src/components/Calendar";
import {useCalendar} from "./src/hooks/use-calendar";
import Margin from "./src/components/common/Margin";
import {useTodoList} from "./src/hooks/use-todo-list";
import {TodoListType} from "./src/type/baseType";
import TodoInput from "./src/components/TodoInput";


export default function App () {
    const {
        selectedDate,
        setSelectedDate,
        handleClickArrow,
        isDatePickerVisible,
        showDatePicker,
        hideDatePicker,
        handleConfirm,
    } = useCalendar()
    const {
        todoList,
        setTodoList,
        filterTodoList,
        input,
        setInput,
        handleClickAdd,
        handleClickRemove,
        handleClickToggle,
    } = useTodoList( selectedDate )
    const flatListRef: any = useRef()
    const columns = getCalendarColumns(selectedDate)


    const handleClickDate:React.Dispatch<any> = setSelectedDate

    const handleTodoAdd = () => {
        if ( !input ) return

        handleClickAdd()
        handleFocusInput()
        setInput("")
    }

    const handleFocusInput = () => {
        setTimeout(() => {
            flatListRef.current?.scrollToEnd()
        }, 200)
    }


    const renderItem = ({ item: todo } :{ item: TodoListType }) => {
        return (
            <Pressable
                onPress={ () => handleClickToggle(todo.id) }
                onLongPress={ () => handleClickRemove(todo.id)}
                style={ styles.todoWrap }
            >
                <Text style={ styles.todoText }>{ todo.content }</Text>
                <Ionicons name={"ios-checkmark"} size={17} style={{ color: todo.isSuccess ? "#595959" : "#bfbfbf" }} />
            </Pressable>
        )
    }

    const ListHeaderComponent = () => {
        return (
            <View>
                <Calendar
                    columns={ columns }
                    selectedDate={ selectedDate }
                    handleClickDate={ handleClickDate }
                    handleClickArrow={ handleClickArrow }
                    handleShowDate={ showDatePicker }
                    todoList={ todoList }
                />

                <Margin height={15} />
                <View style={{ width: 4, height: 4, borderRadius: 4/2, backgroundColor: "#a3a3a3", alignSelf: "center" }} />
                <Margin height={15} />
            </View>
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
                <FlatList
                    ref={ flatListRef }
                    keyExtractor={( _, idx ) => `TODO-${ idx }`}
                    data={ filterTodoList }
                    renderItem={ renderItem }
                    ListHeaderComponent={ ListHeaderComponent }
                    contentContainerStyle={{ paddingTop: bottomSpace + 30 }}
                />

                <TodoInput
                    input={ input }
                    setInput={ setInput }
                    placeholder={ `${ dayjs(selectedDate).format("MM.D") }애 추가할 투두` }
                    handleClickAdd={ handleTodoAdd }
                    handleFocusInput={ handleFocusInput }
                />
            </KeyboardAvoidingView>

            <Margin height={ bottomSpace + 30 } />

            <DateTimePicker
                isVisible={ isDatePickerVisible }
                mode={"date"}
                onConfirm={ handleConfirm }
                onCancel={ hideDatePicker }
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
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderBottomWidth: 0.6,
        borderColor: "#a6a6a6",
        alignSelf: "center"
    },

    todoText: {
        flex: 1,
        fontSize: 14,
        color: "#595959"
    },
});

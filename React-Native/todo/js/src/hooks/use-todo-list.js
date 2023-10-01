import {useEffect, useState} from "react";
import dayjs from "dayjs";
import AsyncStorageNative from "@react-native-async-storage/async-storage/src/AsyncStorage.native";


const TODO_LIST_KET = "TODO_LIST_KET"


const defaultTodoList = [
    {
        id: 1,
        content: "운동하기",
        date: dayjs(),
        isSuccess: true,
    }, {
        id: 2,
        content: "공부하기",
        date: dayjs(),
        isSuccess: false,
    }, {
        id: 3,
        content: "강의 수강하기",
        date: dayjs(),
        isSuccess: true,
    }
]


export const useTodoList = ( selectedDate ) => {
    const [todoList, setTodoList] = useState(defaultTodoList)
    const [input, setInput] = useState("")


    const saveTodoList = ( todoList ) => {
        setTodoList(todoList)
        AsyncStorageNative.setItem(TODO_LIST_KET, JSON.stringify(todoList))
    }

    const addTodo = () => {
        const todoListLenth = todoList.length
        const newTodoList = [
            ...todoList,
            {
                id: todoListLenth === 0 ? 0 : todoList[todoListLenth - 1]?.id + 1,
                content: input,
                date: selectedDate,
                isSuccess: false,
            }
        ]

        saveTodoList(newTodoList)
    }

    const removeTodo = ( todoId ) => {
        const newTodoList = todoList.filter( todo => todo.id !== todoId )
        saveTodoList(newTodoList)
    }

    const toggleTodo = ( todoId ) => {
        const newTodoList = todoList.map(todo => {
            if ( todo.id !== todoId ) return todo
            return {...todo, isSuccess: !todo.isSuccess}
        })
        saveTodoList(newTodoList)
    }

    const resetInput = () => setInput("")

    const filteredTodoList = todoList.filter(( todo ) => {
        return dayjs(todo.date).isSame(selectedDate, "date")
    })


    useEffect(() => {
        init()
    }, [])

    const init = async () => {
        const res = await AsyncStorageNative.getItem(TODO_LIST_KET)
        if ( res ) {
            setTodoList(JSON.parse(res))
        }
    }


    return {
        input,
        setInput,
        todoList,
        setTodoList,
        filteredTodoList,
        addTodo,
        removeTodo,
        toggleTodo,
        resetInput
    }
}
import {useEffect, useState} from "react";
import dayjs from "dayjs";
import {TodoListType} from "../type/baseType";
import {Alert} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const TODO_LIST_KET :string = "TODO_LIST_KET"


const defaultTodoList :TodoListType[] = [
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


export const useTodoList = ( selectedDate: dayjs.Dayjs ) => {
    const [ todoList, setTodoList ] = useState(defaultTodoList)
    const [ input, setInput ] = useState<string>("")


    useEffect(() => {
        init()
    }, []);


    const init = async () => {
        const res :any = await AsyncStorage.getItem(TODO_LIST_KET)
        if (res) {
            setTodoList(JSON.parse(res))
        }
    }

    const saveTodoList = ( todoList :TodoListType[] ) => {
        setTodoList(todoList)
        AsyncStorage.setItem(TODO_LIST_KET, JSON.stringify(todoList))
    }

    const handleClickAdd = () => {
        const todoLength :number = todoList.length
        const newTodoList :TodoListType[] = [
            ...todoList,
            {
                id: todoList[todoLength - 1].id + 1,
                content: input,
                date: selectedDate,
                isSuccess: false
            }
        ]
        saveTodoList(newTodoList)
    }

    const handleClickRemove = ( todoId: number ) => {
        Alert.alert("정말 삭제하시겠습니까?", "", [
            {
                text: "아니요",
                style: "cancel"
            }, {
                text: "예",
                onPress: () => {
                    const newTodoList: TodoListType[] = todoList.filter( todo => todo.id !== todoId )
                    saveTodoList(newTodoList)
                }
            }
        ])
    }

    const handleClickToggle = ( todoId :number ) => {
        const newTodoList: TodoListType[] = todoList.map(todo => {
            if ( todo.id !== todoId ) return todo
            return {
                ...todo,
                isSuccess: !todo.isSuccess
            }
        })
        saveTodoList(newTodoList)
    }

    const filterTodoList: TodoListType[] = todoList.filter(( todo :TodoListType ) => {
        return dayjs(selectedDate).isSame(todo.date, "date")
    })


    return {
        todoList,
        setTodoList,
        filterTodoList,
        input,
        setInput,
        handleClickAdd,
        handleClickRemove,
        handleClickToggle,
    }
}
import React, {Dispatch} from "react";
import dayjs from "dayjs";


export type CalendarType = {
    columns: any;
    selectedDate: any;
    handleClickDate: Dispatch<any>;
    handleClickArrow: (num: number) => void;
    handleShowDate: () => void;
    todoList: TodoListType[];
}

export type ColumnType = {
    text :number | string;
    color :string;
    opacity: number;
    onPress: () => void;
    isSelected: boolean;
    disabled: boolean;
    hasTodo: boolean;
}

export type CalendarArrowType = {
    iconName: any;
    type: number;
}

export type TodoListType = {
    id :number;
    content :string;
    date :dayjs.Dayjs;
    isSuccess :boolean;
}

export type TodoInputType = {
    input :string;
    setInput :React.Dispatch<string>;
    placeholder :string;
    handleClickAdd :() => void;
    handleFocusInput: () => void;
}
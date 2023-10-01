import {useState} from "react";
import dayjs from "dayjs";


export const useCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(dayjs())
    const [isDatePickerVisible, setDatePickerVisivility] = useState(false)


    const showDatePicker = () => {
        setDatePickerVisivility(true)
    }

    const hideDatePicker = () => {
        setDatePickerVisivility(false)
    }

    const handleConfirm = ( date ) => {
        setSelectedDate(dayjs(date))
        hideDatePicker()
    }

    const subtract1Month = (  ) => {
        const newSelectedDate = dayjs(selectedDate).subtract(1, "month")
        setSelectedDate(newSelectedDate)
    }

    const add1Month = (  ) => {
        const newSelectedDate = dayjs(selectedDate).add(1, "month")
        setSelectedDate(newSelectedDate)
    }


    return {
        selectedDate,
        setSelectedDate,
        isDatePickerVisible,
        showDatePicker,
        hideDatePicker,
        handleConfirm,
        subtract1Month,
        add1Month
    }
}
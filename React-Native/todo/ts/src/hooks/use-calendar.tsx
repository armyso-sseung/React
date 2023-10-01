import {useState} from "react";
import dayjs from "dayjs";


export const useCalendar = () => {
    const [ selectedDate, setSelectedDate ] = useState<any>(dayjs())
    const [isDatePickerVisible, setDatePickerVisivility] = useState<boolean>(false)


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

    const handleClickArrow = ( type :number ) => {
         switch ( type ) {
             case 1:
                 arrowLeft()
                 break
             case 2:
                 arrowRight()
                 break
             default:
                 break
         }
    }

    const arrowLeft = () => {
        const newSelectedDate = dayjs(selectedDate).subtract(1, "month")
        setSelectedDate(newSelectedDate)
    }

    const arrowRight = () => {
        const newSelectedDate = dayjs(selectedDate).add(1, "month")
        setSelectedDate(newSelectedDate)
    }



    return {
        selectedDate,
        setSelectedDate,
        handleClickArrow,
        isDatePickerVisible,
        showDatePicker,
        hideDatePicker,
        handleConfirm,
    }
}
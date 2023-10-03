import {useState} from "react";
import dayjs from "dayjs";


export const useCalendar = () => {
    const [ selectedDate, setSelectedDate ] = useState<any>(dayjs())
    const [isDatePickerVisible, setDatePickerVisivility] = useState<boolean>(false)


    const showDatePicker = () :void => {
        setDatePickerVisivility(true)
    }

    const hideDatePicker = () :void => {
        setDatePickerVisivility(false)
    }

    const handleConfirm = ( date :any ) :void => {
        setSelectedDate(dayjs(date))
        hideDatePicker()
    }

    const handleClickArrow = ( type :number ) :void => {
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

    const arrowLeft = () :void => {
        const newSelectedDate :dayjs.Dayjs = dayjs(selectedDate).subtract(1, "month")
        setSelectedDate(newSelectedDate)
    }

    const arrowRight = () :void => {
        const newSelectedDate :dayjs.Dayjs = dayjs(selectedDate).add(1, "month")
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
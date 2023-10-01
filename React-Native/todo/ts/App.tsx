import {Pressable, StyleSheet, Text, View} from 'react-native';
import Calendar from "./src/components/Calendar";
import {getCalendarColumns} from "./src/util/commonUtil";
import dayjs from "dayjs";
import {useCalendar} from "./src/hooks/use-calendar";
import DateTimePicker from "react-native-modal-datetime-picker";

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
    const columns = getCalendarColumns(selectedDate)


    const handleClickDate = setSelectedDate


    return (
        <Pressable style={styles.container}>
            <Calendar
              columns={ columns }
              selectedDate={ selectedDate }
              handleClickDate={ handleClickDate }
              handleClickArrow={ handleClickArrow }
              handleShowDate={ showDatePicker }
            />

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
});

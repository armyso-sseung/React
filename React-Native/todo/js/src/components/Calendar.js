import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {getStatusBarHeight} from "react-native-iphone-x-helper";
import dayjs from "dayjs";

import {getDayColor, getDayText} from "../util/commonUtil";
import {SimpleLineIcons} from "@expo/vector-icons";
import Margin from "./common/Margin";


const Column = ({ text, color, opacity, onPress, disabled, isSelected, hasTodo }) => {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={[ styles.calendarWrap, isSelected && styles.isSelected ]}>
            <Text style={{
                color,
                opacity,
                fontWeight: hasTodo ? "bold" : "normal"
            }}>
                { text }
            </Text>
        </TouchableOpacity>
    )
}

const ArrowButton = ({ onPress, iconName }) => {
    return (
        <TouchableOpacity onPress={ onPress } style={styles.dateArrow}>
            <SimpleLineIcons name={ iconName } size={15} color={"#404040"} />
        </TouchableOpacity>
    )
}


export default ({ columns, selectedDate, setSelectedDate, handleClickLeftArrow, handleClickRightArrow, handleClickHeaderDate, handleClickDate, todoList }) => {


    const ListHeaderComponent = () => {
        const currentDateText = dayjs(selectedDate).format("YYYY.MM.DD.")


        return (
            <View>
                <View style={styles.dateWrap}>
                    <ArrowButton onPress={() => handleClickLeftArrow()} iconName={"arrow-left"} />

                    <TouchableOpacity onPress={handleClickHeaderDate} >
                        <Text style={styles.dateText}>{ currentDateText }</Text>
                    </TouchableOpacity>

                    <ArrowButton onPress={() => handleClickRightArrow()} iconName={"arrow-right"} />
                </View>

                <View style={styles.dayWrap}>
                    {[0, 1, 2, 3, 4, 5, 6].map(day => {
                        return (
                            <Column
                                key={`DAY_${day}`}
                                text={getDayText(day)}
                                color={getDayColor(day)}
                                opacity={1}
                                disabled={true}
                            />
                        )
                    })}
                </View>
            </View>
        )
    }

    const renderItem = ({ item: date }) => {
        // 일(날짜) 구하기
        const dateText = dayjs(date).get("date")
        // 요일 구하기
        const day = dayjs(date).get("day")
        const color = getDayColor(day)
        const isCurrentMonth = dayjs(date).isSame(selectedDate, "month")
        const hasTodo = todoList.find(todo => dayjs(todo.date).isSame(dayjs(date), "date"))


        const onPress = () => handleClickDate(date)


        return (
            <Column
                text={dateText}
                color={color}
                opacity={isCurrentMonth ? 1 : 0.4}
                onPress={onPress}
                isSelected={dayjs(date).isSame(selectedDate, "date")}
                hasTodo={hasTodo}
            />
        )
    }


    return (
        <FlatList
            keyExtractor={ (_, idx) => `column_${idx}` }
            scrollEnable={false}
            data={ columns }
            renderItem={ renderItem }
            numColumns={ 7 }
            ListHeaderComponent={ ListHeaderComponent }
        />
    )
}


const styles =StyleSheet.create({
    dayWrap: {
        flexDirection: "row",
    },

    dateWrap: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    dateText: {
        fontSize: 20,
        color: "#404040"
    },

    calendarWrap: {
        width: 35,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 35 /2,

    },

    dateArrow: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },

    isSelected: {
        backgroundColor: "#c2c2c2",
    },
})
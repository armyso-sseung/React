import {FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View} from 'react-native';
import { SimpleLineIcons } from "@expo/vector-icons";
import {useEffect, useState} from "react";
import dayjs from "dayjs";

import {getCalendarColumns, getDayColor, getDayText} from "./src/util/commonUtil";
import Margin from "./src/components/common/Margin";


const Column = ({ text, color, opacity, onPress, disabled, isSelected }) => {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={[ styles.calendarWrap, isSelected && styles.isSelected ]}>
            <Text style={{
                color,
                opacity,
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


export default function App() {
    const [selectedDate, setSelectedDate] = useState(dayjs())
    const columns = getCalendarColumns(selectedDate)


    const ListHeaderComponent = () => {
        const currentDateText = dayjs(selectedDate).format("YYYY.MM.DD.")


        return (
            <View>
                <View style={styles.dateWrap}>
                    <ArrowButton onPress={() => null} iconName={"arrow-left"} />

                    <TouchableOpacity>
                        <Text style={styles.dateText}>{ currentDateText }</Text>
                    </TouchableOpacity>

                    <ArrowButton onPress={() => null} iconName={"arrow-right"} />
                </View>

                <View style={styles.dayWrap}>
                    {[0, 1, 2, 3, 4, 5, 6, 7].map(day => {
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


        const onPress = () => {
            setSelectedDate(date)
        }


        return (
            <Column
                text={dateText}
                color={color}
                opacity={isCurrentMonth ? 1 : 0.4}
                onPress={onPress}
                isSelected={dayjs(date).isSame(selectedDate, "date")}
            />
        )
    }


    useEffect(() => {
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                keyExtractor={ (_, idx) => `column_${idx}` }
                data={ columns }
                renderItem={ renderItem }
                numColumns={ 7 }
                ListHeaderComponent={ ListHeaderComponent }
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    calendarWrap: {
        width: 35,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 35 /2,

    },

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

    dateArrow: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },

    isSelected: {
       backgroundColor: "#c2c2c2",
    },
});

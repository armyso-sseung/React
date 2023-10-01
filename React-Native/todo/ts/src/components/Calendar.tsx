import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {SimpleLineIcons} from "@expo/vector-icons";
import dayjs from "dayjs";

import {getDayColor, getDayText, statusBarHeight} from "../util/commonUtil";


const Column = ({ text, color, opacity, onPress, isSelected, disabled } :ColumnType) => {
    return (
        <TouchableOpacity disabled={ disabled } onPress={ onPress } style={[ styles.columnWrap, isSelected && styles.columnSelected ]}>
            <Text style={{
                color,
                opacity
            }}
            >{ text }</Text>
        </TouchableOpacity>
    )
}


export default ({ columns, selectedDate, handleClickDate, handleClickArrow, handleShowDate } :CalendarType) => {
    const ArrowButton = ({ iconName, type } :CalendarArrowType) => {
        return (
            <TouchableOpacity onPress={ () => handleClickArrow( type ) } style={styles.dateArrow} >
                <SimpleLineIcons name={ iconName } size={15} color={"#404040"} />
            </TouchableOpacity>
        )
    }


    const renderItem = ({ item: date} :{}) => {
        const dateText :number = dayjs(date).get("date")
        const day :number = dayjs(date).get("day")

        const isCurrentMonth :boolean = dayjs(date).isSame(selectedDate, "month")
        const isSelected :boolean = dayjs(date).isSame(selectedDate, "date")


        return (
            <Column
                text={ dateText }
                color={ getDayColor(day) }
                opacity={ isCurrentMonth ? 1 : 0.4 }
                isSelected={ isSelected }
                onPress={ () => handleClickDate( date ) }
            />
        )
    }

    const ListHeaderComponent = () => {
        const currentDate :string = dayjs(selectedDate).format("YYYY.MM.DD.")


        return (
            <View>
                <View style={ styles.dateWrap }>
                    <ArrowButton iconName={ "arrow-left" } type={ 1 } />

                    <TouchableOpacity onPress={handleShowDate}>
                        <Text style={ styles.dateText }>{ currentDate }</Text>
                    </TouchableOpacity>

                    <ArrowButton iconName={ "arrow-right" } type={ 2 } />
                </View>

                <View style={ styles.dayWrap }>
                    {[ 0, 1, 2, 3, 4, 5, 6 ].map(day => {
                        return (
                            <Column
                                key={ `day-${ day }` }
                                text={ getDayText(day) }
                                color={ getDayColor(day) }
                                opacity={ 1 }
                                disabled={ true }
                            />
                        )
                    })}
                </View>
            </View>

        )
    }


    return (
        <FlatList
            keyExtractor={( _, idx ) => `column-${ idx }`}
            data={ columns }
            renderItem={ renderItem }
            ListHeaderComponent={ ListHeaderComponent }
            numColumns={ 7 }
            scrollEnabled={ false }
            contentContainerStyle={{ paddingTop: statusBarHeight }}
        />
    )
}


const styles = StyleSheet.create({
    columnWrap: {
        width: 35,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 35 / 2,
    },

    columnSelected: {
        backgroundColor: "#c2c2c2",
    },

    dayWrap: {
        flexDirection: "row",
    },

    dateWrap: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    dateArrow: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },

    dateText: {
        fontSize: 20,
        color: "#404040"
    },
})
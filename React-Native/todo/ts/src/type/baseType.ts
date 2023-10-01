type CalendarType = {
    column :{};
    selectedDate: any;
    handleClickDate: (date: {}) => void;
    handleClickArrow: (num: number) => void;
    handleShowDate: () => void;
}

type ColumnType = {
    text :number | string;
    color :string;
    opacity: number;
    onPress: () => void;
    isSelected: boolean;
    disabled: boolean;
}

type CalendarArrowType = {
    iconName: string;
    type: number;
}
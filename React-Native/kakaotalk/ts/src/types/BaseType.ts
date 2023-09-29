export type Profile = {
    uri: string;
    name: string;
    introduction: string;
    isMe: boolean;
}

export type Header = {
    name: any
}

export type FriendSection = {
    friendProfileLen: number;
    onPress: () => void;
    isOpened: boolean;
}

export type FriendListType = {
    friendList: Profile[],
    isOpened: boolean,
}

export type TabBarType = {
    selectedTabIdx: number,
    setSelectedTabIdx: any
}

export type TabBarButtonType = {
    onPress: () => void; 
    isSelected: boolean;
    activeIcon: any;
    inactiveIcon: any;
    isIconFontisto: boolean;
    isIconIonIcons: boolean;
    isIconEntypo: boolean;
}

export type Margin = {
    height: number
}
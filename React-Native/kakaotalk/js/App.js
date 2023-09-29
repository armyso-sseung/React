import {FlatList, StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header'
import {getBottomSpace, getStatusBarHeight} from "react-native-iphone-x-helper";
import Profile from "./src/components/Profile";
import {friendProfiles, myProfile} from "./src/data/data";
import Margin from "./src/components/common/Margin";
import Division from "./src/components/common/Division";
import FriendSection from "./src/components/FriendSection";
import FriendList from "./src/components/FriendList";
import {useState} from "react";
import TabBar from "./src/components/TabBar";


const statusBarHeight = getStatusBarHeight(true)


export default function App() {
    const [isOpened, setIsOpened] = useState(true)
    const [selectedTabIdx, setSelectedTabIdx] = useState(0)


    const onPressArrow = () => {
        setIsOpened(!isOpened)
    }


    const ItemSeparatorComponent = () => <Margin height={13} />

    const renderItem = ({ item }) => (
        <View>
            <Profile
                uri={ item.uri }
                name={ item.name }
                introduction={ item.introduction }
                isMe={false}
            />
        </View>
    )

    const ListHeaderComponent = () => (
        <View style={styles.body}>
            <Header />

            <Margin height={10} />

            <Profile
                uri={myProfile.uri}
                name={myProfile.name}
                introduction={myProfile.introduction}
                isMe={false}
            />

            <Margin height={15} />
            <Division />
            <Margin height={12} />

            <FriendSection
                friendProfileLen={friendProfiles.length}
                onPress={onPressArrow}
                isOpened={isOpened}
            />

            <Margin height={5} />
        </View>
    )

    const ListFooterComponent = () => <Margin height={10} />


    return (
        <View style={styles.container}>
            <FlatList
                data={ isOpened ? friendProfiles : [] }
                contentContainerStyle={{ paddingHorizontal: 15 }}
                keyExtractor={(_, idx) => idx}
                stickyHeaderIndices={[0]}
                ItemSeparatorComponent={ItemSeparatorComponent}
                renderItem={renderItem}
                ListHeaderComponent={ListHeaderComponent}
                ListFooterComponent={ListFooterComponent}
                showsVerticalScrollIndicator={false}
            />
            <TabBar
                selectedTabIdx={selectedTabIdx}
                setSelectedTabIdx={setSelectedTabIdx}
            />
        </View>
    )


    // return (
    //     <View style={styles.container}>
    //         <View style={styles.content} >
    //             <Header />
    //
    //             <Margin height={10} />
    //
    //             <Profile
    //                 uri={myProfile.uri}
    //                 name={myProfile.name}
    //                 introduction={myProfile.introduction}
    //             />
    //
    //             <Margin height={15} />
    //             <Division />
    //             <Margin height={12} />
    //
    //             <FriendSection
    //                 friendProfileLen={friendProfiles.length}
    //                 onPress={onPressArrow}
    //                 isOpened={isOpened}
    //             />
    //
    //             <FriendList
    //                 friendList={friendProfiles}
    //                 isOpened={isOpened}
    //             />
    //         </View>
    //
    //         <TabBar
    //             selectedTabIdx={selectedTabIdx}
    //             setSelectedTabIdx={setSelectedTabIdx}
    //         />
    //     </View>
    // );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: statusBarHeight,
        // paddingBottom: bottomSpace,
        // justifyContent: "flex-end",
    },

    content: {
        flex: 1,
        paddingHorizontal: 15,
    },

    body: {
        backgroundColor: "white",
    }
});

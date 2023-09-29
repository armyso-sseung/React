import { ScrollView, StyleSheet, View } from "react-native"
import { FriendListType, Profile } from "../types/BaseType"
import Margin from "./common/Margin"
import FriendProfile from "./Profile"


export default ({ friendList, isOpened } :FriendListType) => {
    if ( !isOpened ) return null
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            { friendList.map((friend :Profile, idx :number) => (
                <View key={idx}>
                    <FriendProfile
                        uri={friend.uri}
                        name={friend.name}
                        introduction={friend.introduction}
                        isMe={false}
                    />
                    <Margin height={13} />
                </View>
            ))}
        </ScrollView>
    )
}


const styles = StyleSheet.create({

})
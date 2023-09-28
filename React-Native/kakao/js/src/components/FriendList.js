import {ScrollView, Text, View} from "react-native";
import Profile from "./Profile";
import Margin from "./common/Margin";


export default ({ friendList, isOpened }) => {
    if (!isOpened) return null
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            { friendList.map((friend, idx) => (
                <View key={idx}>
                    <Profile
                        uri={ friend.uri }
                        name={ friend.name }
                        introduction={ friend.introduction }
                    />
                    <Margin height={13} />
                </View>
            ))}
        </ScrollView>
    )
}
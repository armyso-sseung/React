import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {getStatusBarHeight} from "react-native-iphone-x-helper";
import Division from './src/components/common/Division';
import Margin from './src/components/common/Margin';
import FriendList from './src/components/FriendList';
import FriendSection from './src/components/FriendSection';
import Header from './src/components/Header';
import Profile from './src/components/Profile';
import TabBar from './src/components/TabBar';
import { friendProfiles, myProfile } from './src/data/data';


const statusBarHeight = getStatusBarHeight(true)


export default function App() {
  const [isOpened, setIsOpened] = useState<boolean>(true)
  const [selectedTabIdx, setSelectedTabIdx] = useState<number>(0)


  const onPressArrow = () => {
    setIsOpened(!isOpened)
  }


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header />

        <Profile
          uri={ myProfile.uri }
          name={ myProfile.name } 
          introduction={ myProfile.introduction }
          isMe
        />

        <Margin height={10} />
        <Division />
        <Margin height={12} />

        <FriendSection
          friendProfileLen={friendProfiles.length}
          onPress={onPressArrow}
          isOpened={isOpened}
        />

        <FriendList
          friendList={friendProfiles}
          isOpened={isOpened}
        />
      </View>

      <TabBar
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdx} 
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: statusBarHeight
  },

  content: {
    flex: 1,
    paddingHorizontal: 15
  }
});

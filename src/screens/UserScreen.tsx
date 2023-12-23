import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

interface UserScreenProps {
    navigation: any
    route: any
}
export default function UserScreen(props: UserScreenProps) {

    console.log(props)
    function openDrawerHandler() {
        props.navigation.toggleDrawer()
    }

  return (
      <View style={styles.rootContainer}>
          <Text>
              This is the <Text style={styles.highlight}>"User"</Text> screen!
          </Text>
          <Button title={"Open Drawer"} onPress={openDrawerHandler}/>
      </View>
  );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    highlight: {
        fontWeight: 'bold',
        color: '#eb1064',
    },
});

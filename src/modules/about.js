import React, { PureComponent } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default class About extends PureComponent {
  static navigationOptions = {
    tabBarLabel: 'About',
    tabBarIcon: () => <Icon size={24} color="white" name="guy-fawkes-mask" />,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> TODO.... </Text>
      </View>
    )
  }
}

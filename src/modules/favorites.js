import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

export default class Favorites extends PureComponent {
  componentDidMount = () => {}

  render() {
    return (
      <View style={styles.container}>
        <Text> TODO </Text>
      </View>
    )
  }
}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

export default class Details extends PureComponent {
  componentDidMount = () => {
    // this.ref = firebase.firestore().collection('todos')
    // this.ref.add({
    //   title: 'Something',
    //   complete: false,
    // })
    // this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> TODO </Text>
      </View>
    )
  }
}

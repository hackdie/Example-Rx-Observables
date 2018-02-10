import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
} from 'react-native'

const imgGhost = require('../../assets/icons/ghost.png')

const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.75,
  },
  lblTextSearching: {
    color: '#666',
    fontSize: 12,
    marginTop: 20,
    marginBottom: 10,
  },
  lblNotFound: {
    color: 'red',
    fontSize: 12,
  },
})

const EmptySearch = ({ query, loading }) => (
  <View style={styles.container}>
    <Image source={imgGhost} />
    <Text style={styles.lblTextSearching}>
      Searching for:
      <Text style={{ fontWeight: 'bold' }}> {query} </Text>
    </Text>
    {!loading ? <Text style={styles.lblNotFound}> NOT FOUND </Text> : null}
  </View>
)

export default EmptySearch

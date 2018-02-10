import React, { PureComponent } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  Dimensions,
} from 'react-native'
import { connect } from 'react-redux'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Touchable from 'react-native-platform-touchable'

import FavoriteCard from '../components/favoritCard'

const { width, height } = Dimensions.get('screen')

const noRepos = require('../../assets/icons/icNoInformation.png')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerEmpty: {
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
  }
})

const mapReduxStoreToProps = reduxStore => ({
  favorites: reduxStore.favorites.items,
})
const mapDispatchToProps = () => ({})

@connect(mapReduxStoreToProps, mapDispatchToProps)
export default class Favorites extends PureComponent {
  static navigationOptions = {
    tabBarLabel: 'Favorites',
    tabBarIcon: () => <Icon size={24} color="white" name="heart" />,
  }

  state = {}

  seeDetails = item => {
    this.props.navigation.navigate('Details', { ...item })
  }

  renderItem = ({ item }) => (
    <Touchable style={{ flex: 1 }} onPress={() => this.seeDetails(item)}>
      <FavoriteCard {...item} />
    </Touchable>
  )

  renderNoItems = () => (
    <View style={styles.containerEmpty}>
      <Image source={noRepos} />
      <Text style={styles.lblTextSearching}>
        No Cool repos saved Try
        <Text style={{ fontWeight: 'bold' }}> sarching </Text>
        for some
      </Text>
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1, marginTop: 22 }}
          removeClippedSubviews
          numColumns={2}
          ListEmptyComponent={this.renderNoItems}
          renderItem={this.renderItem}
          extraData={this.props.favorites}
          data={this.props.favorites}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    )
  }
}

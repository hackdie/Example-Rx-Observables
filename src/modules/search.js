import React, { PureComponent } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  TextInput,
  Keyboard,
} from 'react-native'
import Touchable from 'react-native-platform-touchable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import SearchRow from '../components/rowSearch'
import EmptySearch from '../components/emptySearch'
import { newSearch } from '../actions/search'


const keyExtractor = item => `item_${item.id}`

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  separator: {
    width: width - 80,
    alignSelf: 'flex-end',
    height: 1,
    backgroundColor: '#ddd',
  },
  searchContainer: {
    paddingTop: 20,
    backgroundColor: '#5A90DC',
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtSearch: {
    height: 42,
    backgroundColor: '#f3f3f3',
    margin: 10,
    padding: 5,
    flex: 1,
  },
  btnSearch: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    backgroundColor: '#666',
    borderRadius: 20,
  },
})

const mapReduxStoreToProps = reduxStore => ({
  search: reduxStore.search,
})
const mapDispatchToProps = dispach => ({
  newSearch: bindActionCreators(newSearch, dispach),
})

@connect(mapReduxStoreToProps, mapDispatchToProps)
export default class Search extends PureComponent {
  static navigationOptions = {
    tabBarLabel: 'Newsstand',
    tabBarIcon: () => <Icon size={24} color="white" name="github-circle" />,
  }

  constructor(props) {
    super(props)

    this.state = {
      query: props.search.query,
    }
  }

  componentDidMount = () => {}

  componentWillReceiveProps = nextProps => {
    this.setState({ query: nextProps.search.query })
  }

  onItemPressed = item => {
    this.props.navigation.navigate('Details', { ...item })
  }

  onNewSearch = () => {
    Keyboard.dismiss()
    if (this.state.query.trim() === '') return
    this.props.newSearch(this.state.query)
  }

  renderItem = ({ item }) => (
    <Touchable onPress={() => this.onItemPressed(item)}>
      <SearchRow {...item} />
    </Touchable>
  )

  // TODO maybe put it in a diff component to use RX
  renderSearch = () => (
    <View style={styles.searchContainer}>
      <TextInput
        value={this.state.query}
        placeholder="My Awesome Repo"
        style={styles.txtSearch}
        onSubmitEditing={this.onNewSearch}
        onChangeText={query => {
          this.setState({ query })
        }}
      />
      <Touchable style={styles.btnSearch} onPress={this.onNewSearch}>
        <Icon size={24} color="white" name="magnify" />
      </Touchable>
    </View>
  )

  render = () => (
    <View style={styles.container}>
      {this.renderSearch()}
      <FlatList
        style={{ flex: 1 }}
        refreshing={this.props.search.loading}
        onRefresh={() => {
          this.props.newSearch(this.props.search.query)
        }}
        removeClippedSubviews
        renderItem={this.renderItem}
        extraData={this.props.search.items}
        data={this.props.search.items}
        keyExtractor={keyExtractor}
        ListEmptyComponent={<EmptySearch {...this.props.search} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  )
}

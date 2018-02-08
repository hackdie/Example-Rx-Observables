import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'

import { StackNavigator, TabNavigator } from 'react-navigation'
import Favorites from './favorites'
import Search from './search'
import Details from './details'

import Store from '../store/configureStore'

const TabNav = TabNavigator(
  {
    Search: {
      screen: Search,
    },
    Favorites: {
      screen: Favorites,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  }
)

const BaseNav = StackNavigator(
  {
    Index: { screen: TabNav },
    Details: { screen: Details },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
)

export default class App extends PureComponent {
  componentDidMount = () => {}

  render() {
    return (
      <Provider store={Store}>
        <BaseNav />
      </Provider>
    )
  }
}

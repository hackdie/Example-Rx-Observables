import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { StackNavigator, TabNavigator } from 'react-navigation'

import Favorites from './favorites'
import Search from './search'
import Details from './details'
import About from './about'

import Store from '../store/configureStore'

const TabNav = TabNavigator(
  {
    Search: {
      screen: Search,
    },
    Favorites: {
      screen: Favorites,
    },
    About: {
      screen: About,
    },
  },
  {
    tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      bottomNavigationOptions: {
        labelColor: 'white',
        rippleColor: 'white',
        tabs: {
          Search: {
            barBackgroundColor: '#5A90DC',
          },
          Favorites: {
            barBackgroundColor: '#00796B',
          },
          About: {
            barBackgroundColor: '#37474F',
          },
        },
      },
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

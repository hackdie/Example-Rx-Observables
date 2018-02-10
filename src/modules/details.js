import React, { PureComponent } from 'react'
import { StyleSheet, Text, View, Dimensions, SectionList } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { find } from 'lodash'

import Toolbar from '../components/toolbar'
import DetailsHeader from '../components/detailsHeader'
import RowDetails from '../components/rowSectionDetails'
import { getRepoDetails } from '../epics/details'
import { addFavorite, removeFavorite } from '../actions/details'


const { width } = Dimensions.get('screen')
const keyExtractor = (item, index) => `item_${item.id}_${index}`

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
  sectionHeader: {
    height: 40,
    backgroundColor: '#f3f3f3',
    justifyContent: 'center',
    padding: 20,
  },
  lblSectionHeader: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
})

const mapReduxStoreToProps = reduxStore => ({
  favorites: reduxStore.favorites.items,
})

const mapDispatchToProps = dispatch => ({
  addFavorite: bindActionCreators(addFavorite, dispatch),
  removeFavorite: bindActionCreators(removeFavorite, dispatch),
})

@connect(mapReduxStoreToProps, mapDispatchToProps)
export default class Details extends PureComponent {
  constructor(props) {
    super(props)

    const repo = props.navigation.state.params
    const favorite = find(props.favorites, fv => fv.id === repo.id)

    this.state = {
      repo,
      loading: true,
      issues: [],
      subscribers: [],
      favorite: !!favorite,
    }
  }
  componentDidMount = () => {
    this.getExtraData()
  }

  componentWillReceiveProps = props => {
    const { repo } = this.state
    const favorite = find(props.favorites, fv => fv.id === repo.id)
    this.setState({ favorite: !!favorite })
  }

  getExtraData = () => {
    const { owner, name } = this.state.repo

    this.setState({ loading: true })

    const subId = getRepoDetails(owner, name).subscribe(
      ({ issues, subscribers }) => {
        this.setState({ issues, subscribers, loading: false })
        subId.unsubscribe()
      }
    )
  }

  saveRepo = () => {
    const fav = find(this.props.favorites, fv => fv.id === this.state.repo.id)
    if (fav) {
      this.props.removeFavorite(fav.id)
    } else {
      this.props.addFavorite(this.state.repo)
    }
  }

  goBack = () => {
    this.props.navigation.goBack()
  }

  renderHeader = ({ section: { title } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.lblSectionHeader}>{title}</Text>
    </View>
  )

  renderIssues = ({ item: { issue: { user, title }, created_at } }) => (
    <RowDetails uri={user.avatar_url}>
      <RowDetails.Issues date={created_at} user={user.login} issue={title} />
    </RowDetails>
  )

  renderFollowers = ({ item: { login, avatar_url, html_url } }) => (
    <RowDetails uri={avatar_url}>
      <RowDetails.Follower user={login} url={html_url} />
    </RowDetails>
  )

  renderHeaderList = () => {
    const {
      created_at,
      description,
      forks_count,
      id,
      owner,
      score,
      stargazers_count,
      full_name,
    } = this.state.repo
    return (
      <DetailsHeader
        date={created_at}
        description={description}
        forks={forks_count}
        key={id}
        name={full_name}
        score={score}
        starts={stargazers_count}
        uri={owner.avatar_url}
      />
    )
  }

  render = () => (
    <View style={styles.container}>
      <Toolbar
        title={this.state.repo.owner.login}
        description={this.state.repo.owner.html_url}
        leftImg="chevron-left"
        rightImg={this.state.favorite ? 'heart' : 'heart-outline'}
        leftAction={this.goBack}
        rightAction={this.saveRepo}
      />
      <SectionList
        renderItem={this.renderItem}
        renderSectionHeader={this.renderHeader}
        ListFooterComponent={this.renderFooter}
        keyExtractor={keyExtractor}
        refreshing={this.state.loading}
        onRefresh={this.getExtraData}
        ListHeaderComponent={this.renderHeaderList}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        sections={[
          {
            data: this.state.subscribers,
            title: 'Followers',
            renderItem: this.renderFollowers,
          },
          {
            data: this.state.issues,
            title: 'Issues',
            renderItem: this.renderIssues,
          },
        ]}
      />
    </View>
  )
}

// keyExtractor={this.keyExtractor}

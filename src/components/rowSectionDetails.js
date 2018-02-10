import React, { PureComponent } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import moment from 'moment'

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  lblFollower: {
    color: '#666',
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 18,
  },
  lblUrl: {
    color: 'blue',
    fontSize: 12,
  },
  lblDate: {
    fontSize: 12,
    color: '#666',
    alignSelf: 'flex-end',
  },
  lblAutor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  lblIssue: {
    fontSize: 12,
    color: '#666',
  },
})

const Avatar = ({ uri }) => <Image source={{ uri }} style={styles.avatar} />

const FollowerBody = ({ user, url }) => (
  <View>
    <Text style={styles.lblFollower}>{user}</Text>
    <Text style={styles.lblUrl}>{url}</Text>
  </View>
)
const IssuesBody = ({ date, user, issue }) => (
  <View style={{ flex: 1 }}>
    <Text style={styles.lblDate}>{moment(date).format('YY/MM/DD')}</Text>
    <View>
      <Text style={styles.lblAutor}>{user}</Text>
      <Text style={styles.lblIssue}>{issue}</Text>
    </View>
  </View>
)

export default class RowDetails extends PureComponent {
  static Follower = FollowerBody
  static Issues = IssuesBody

  render() {
    return (
      <View style={{ padding: 20, flexDirection: 'row', alignItems: 'center' }}>
        <Avatar uri={this.props.uri} />
        {this.props.children}
      </View>
    )
  }
}

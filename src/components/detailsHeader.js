import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import moment from 'moment'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5A90DC',
  },
  head: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  lblTitle: {
    flex: 1,
    marginTop: 10,
    fontSize: 26,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  lblDescription: {
    marginHorizontal: 20,
    marginTop: 20,
    color: '#fff',
    fontSize: 12,
  },
  imgAvatar: {
    width: 100,
    height: 100,
    marginTop: 20,
    borderRadius: 50,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bottomBody: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Avatar = ({ uri }) => (
  <Image
    source={{
      uri,
    }}
    style={styles.imgAvatar}
  />
)

const BottomItem = ({ title, number, icon }) => (
  <View style={styles.bottomContainer}>
    <Text style={styles.bottomTitle}>{title}</Text>
    <View style={styles.bottomBody}>
      <Icon size={16} color="white" name={icon} />
      <Text style={{ color: 'white', marginLeft: 5 }}> {number} </Text>
    </View>
  </View>
)

const DetailsHeader = ({
  description,
  name,
  date,
  uri,
  forks,
  score,
  starts,
}) => (
  <View style={styles.container}>
    <View style={styles.head}>
      <Avatar uri={uri} />
      <View style={{ flex: 1, padding: 10 }}>
        <Text style={{ alignSelf: 'flex-end', color: 'white' }}>
          {moment(date).format('YY/MM/DD')}
        </Text>
        <Text style={styles.lblTitle}>{name}</Text>
      </View>
    </View>
    <Text style={styles.lblDescription}>{description}</Text>
    <View style={{ flexDirection: 'row', height: 70 }}>
      <BottomItem title="Forks" number={forks} icon="directions-fork" />
      <BottomItem title="Score" number={score} icon="chart-bar-stacked" />
      <BottomItem title="Starts" number={starts} icon="star" />
    </View>
  </View>
)

export default DetailsHeader

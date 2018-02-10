import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'

const { width } = Dimensions.get('screen')

const style = StyleSheet.create({
  container: {
    padding: 10,
    height: 120,
    width,
    backgroundColor: '#fcfcfc',
    flexDirection: 'row',
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  bodyContainer: {
    flex: 1,
    marginHorizontal: 5,
    flexDirection: 'row',
    padding: 5,
  },
  lblTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  lblDescription: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  lblDate: {
    color: '#666',
    fontSize: 12,
  },
})

const RowSearch = ({
  name,
  description,
  owner: { avatar_url },
  created_at,
  stargazers_count,
}) => (
  <View style={style.container}>
    <Image source={{ uri: avatar_url }} style={style.avatar} />
    <View style={style.bodyContainer}>
      <View style={{ flex: 1 }}>
        <Text numberOfLines={1} style={style.lblTitle}>
          {name}
        </Text>
        <Text numberOfLines={3} style={style.lblDescription}>
          {description}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon size={12} color="#666" name="heart" />
          <Text style={{ marginLeft: 5 }}>{stargazers_count}</Text>
        </View>
      </View>
      <Text style={style.lblDate}>{moment(created_at).format('YY/MM/DD')}</Text>
    </View>
  </View>
)

RowSearch.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  created_at: PropTypes.string,
  stargazers_count: PropTypes.number,
}

RowSearch.defaultProps = {
  name: '',
  description: '',
  owner: {},
  created_at: '',
  stargazers_count: 0,
}

export default RowSearch

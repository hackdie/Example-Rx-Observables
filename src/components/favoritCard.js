import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    marginHorizontal: 3,
    marginVertical: 5,
    backgroundColor: 'white',
    shadowColor: '#666',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    paddingBottom: 10,
  },
  imgFav: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  lblTitle: {
    padding: 5,
    fontWeight: 'bold',
  },
  lblDescription: {
    fontSize: 12,
    color: '#333',
    paddingHorizontal: 5,
  },
})

const FavoriteCard = ({ description, name, owner: { avatar_url } }) => (
  <View style={styles.cardContainer}>
    <View style={{ height: 160 }}>
      <Image
        style={{ height: 160 }}
        source={{
          uri: avatar_url,
        }}
      />
      <View style={styles.imgFav}>
        <Icon size={24} color="red" name="heart" />
      </View>
    </View>
    <Text style={styles.lblTitle}>{name}</Text>
    <Text numberOfLines={3} style={styles.lblDescription}>
      {description}
    </Text>
  </View>
)

export default FavoriteCard

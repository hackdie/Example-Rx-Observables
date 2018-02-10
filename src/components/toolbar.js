import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import Touchable from 'react-native-platform-touchable'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height } = Dimensions.get('screen')

const renderItem = (action, img) => (
  <Touchable
    onPress={action}
    style={{
      height: 40,
      width: 40,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Icon size={24} color="white" name={img} />
  </Touchable>
)
const empytItem = <View style={{ width: 40, height: 40 }} />

const Toolbar = ({
  leftImg,
  leftAction,
  rightImg,
  rightAction,
  title,
  description,
}) => (
  <View
    style={{
      paddingTop: 23,
      paddingBottom: 5,
      width,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#5A90DC',
    }}
  >
    {leftImg ? renderItem(leftAction, leftImg) : empytItem}
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold' }}>
        {title}
      </Text>
      <Text style={{ fontSize: 12, color: '#eee' }}> {description} </Text>
    </View>
    {leftImg ? renderItem(rightAction, rightImg) : empytItem}
  </View>
)

export default Toolbar

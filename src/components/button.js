import { View,Pressable,StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { presets } from './text/text.preset'
import { spacing } from '../theme/spacing'

export default function Button({children,style}) {

    const buttonStyle=StyleSheet.compose(buttonDefaultStyle,style,presets["h3"])
  return <Pressable  style={buttonStyle}>{children}</Pressable>
}

const buttonDefaultStyle={
    width:155,
    height:48,
    borderRadius:50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: spacing[4]
}
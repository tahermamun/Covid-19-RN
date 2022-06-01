import { View,StyleSheet,Image } from 'react-native'
import React from 'react'
import Text from './text/text'
import { colors } from '../theme/colors'

export default function PreventionCard({ item }) {
    const { img, title } = item
    return (
        <View  style={styles.PreventionCard}>
            <Image 
            style={styles.PreventionImage}
            source={img}
            resizeMode="contain"
             />
            <Text preset="h3" style={{ color: colors.dark ,textAlign: "center" }}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    PreventionCard:{
        height: 90,
        width: 90,
        marginTop: 20,
        textAlign: 'center'

    },
    PreventionImage: {
        height: 90,
        width: 90,
        alignItems: "center",
        justifyContent: "center"
        
    },
})
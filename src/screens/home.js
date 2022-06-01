import { View, StyleSheet, Image,ImageBackground } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { EvilIcons } from '@expo/vector-icons';
import Text from '../components/text/text';
import img from "../../assets/flag-usa.png"
import img1 from "../../assets/1.png"
import img2 from "../../assets/2.png"
import img3 from "../../assets/3.png"
import ownTest from "../../assets/ownTest.png"
import { spacing } from '../theme/spacing';
import { AntDesign } from '@expo/vector-icons';
import Button from '../components/button';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import PreventionCard from '../components/preventionCard';



const preventionData = [
    {
        img: img1,
        title: 'Avoid close contact'
    },
    {
        img: img2,
        title: 'Clean your hands often'
    },
    {
        img: img3,
        title: 'Wear a facemask'
    }
]



export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <View style={styles.headerIcons}>
                    <EvilIcons name="navicon" size={24} color="white" />
                    <EvilIcons name="bell" size={24} color="white" />
                </View>
                <View style={styles.covid}>
                    <Text preset="h1">Covid-19</Text>
                    <View style={styles.currency}>

                        <Image style={styles.tinyLogo} source={img} />
                        <Text preset="small" style={{ color: colors.dark }}>USA</Text>
                        <AntDesign name="caretdown" size={14} color="black" />
                    </View>
                </View>
                <View style={styles.headerContent}>
                    <Text preset="h2">Are you feeling sick?</Text>
                    <Text preset="small" style={{ opacity: .8, lineHeight: 22 }}>If you feel sick with any of covid-19 symptoms {"\n"}please call or SMS us immediately for help.</Text>
                    <View style={styles.headerButtons}>
                        <Button style={{ backgroundColor: colors.red }}>
                            <Ionicons name="call" size={16} color="white" />
                            <Text preset="h3">Call Now</Text>
                        </Button>
                        <Button style={{ backgroundColor: colors.sky }}>
                            <Feather name="message-circle" size={16} color="white" />
                            <Text preset="h3" >Send SMS</Text>
                        </Button>

                    </View>
                </View>
            </View>
            <View style={styles.bodySection}>
                <Text preset="h2" style={{ color: colors.dark, paddingHorizontal: spacing[3] }}>Prevention</Text>
                <View style={styles.preventionCardContainer}>

                    {
                        preventionData.map((item,index) => <PreventionCard key={index} item={item} />)
                    }
                </View>

                <View style={styles.ownTestStyle}>
                  
                    <Image style={styles.ownTestStyle} resizeMode="cover" source={ownTest} />

                </View>

            </View>





        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.whiteGray,

    },
    headerSection: {
        backgroundColor: colors.darkBlue,
        height: 350,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        paddingHorizontal: 23,
    },
    headerIcons: {
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    covid: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    currency: {
        height: 40,
        width: 116,
        backgroundColor: colors.white,
        borderRadius: 50,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: spacing[0],
        alignItems: "center"

    },
    tinyLogo: {
        height: 30,
        width: 30,
        borderRadius: 50
    },
    headerContent: {
        marginTop: 50
    },
    headerButtons: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    bodySection: {
        paddingHorizontal: 23,
        marginTop: 30,
        backgroundImage: img
    },
    preventionCardContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "nowrap"

    },
    ownTestStyle:{
        width:357,
        height:125,
        marginTop:30

    }
})
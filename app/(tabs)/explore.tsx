import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Ps from '@/components/Ps'
import Chart from '@/components/Chart'
import Button from '@/components/Button'
import Holdings from '@/components/Holding'
import TimeSelector from '@/components/TimeSelector'
import Invest from '@/components/Invest'



const index = () => {
    return (
        <ScrollView>
        <View style={styles.background}>
            <Ps />
            
            <Invest />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
    },
})

export default index

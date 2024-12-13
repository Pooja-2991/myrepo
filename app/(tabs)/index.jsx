import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import PortfolioScreen from '@/components/PortfolioScreen'
import Chart from '@/components/Chart'
import Button from '@/components/Button'
import Holdings from '@/components/Holding'
import TimeSelector from '@/components/TimeSelector'
import SubscriptionCard from '@/components/SubscriptionCard'
import InfoRow from '@/components/InfoRow'
import PortfolioComparision from '@/components/PortfolioComparision'
// import PortfolioComparisonCard from '@/components/PortfolioComparisonCard '

const index = () => {
    return (
        <ScrollView>
        <View style={styles.background}>
            <PortfolioScreen />
            <Button />
            <SubscriptionCard />
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

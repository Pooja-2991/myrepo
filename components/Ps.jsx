import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../components/Button';
import Chart from '../components/Chart';
import Holdings from '../components/Holding'
import TimeSelector from '../components/TimeSelector'
import InfoRow from '../components/InfoRow'
import PortfolioComparison from '../components/PortfolioComparision'
import Invest from '../components/Invest'
import StockList from './StockList';



const screenWidth = Dimensions.get('window').width;

export default function PortfolioScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}><Image source={require('../assets/images/back1.png')} style={styles.iconback} />  Equity Portfolio</Text>
                <Image source={require('../assets/images/share.png')} style={styles.icon} />
            </View>


            <View style={styles.portfolioInfo}>
                <Text style={styles.subtitle}><Image source={require('../assets/images/train.png')} style={styles.icontrain} />  Railway & Defence</Text>
                <Text style={styles.description}>
                    A portfolio of high-growth stocks benefited by increase in Govt. spend towards Railways & Defence.
                </Text>
                <View style={styles.stats}>
                    <Text style={styles.cagr}>CAGR: +23.98%</Text>
                    <Text>Duration: 3 years</Text>
                </View>
            </View>
            <InfoRow />
            <PortfolioComparison />
            {/* <PortfolioComparisonCard  /> */}
            <Chart />
            <TimeSelector />

            <View style={styles.holdingsSection}>
                <Text style={styles.sectionTitle}>Holdings Distribution</Text>
                <Holdings/>
            </View>

            <StockList />
           

            <View style={styles.managerSection}>
                <Text style={styles.sectionTitle}>About the Manager</Text>
                <Text style={styles.managerDescription}>
                    Lock N Key Advisors - Description in detail about the portfolio manager including their SEBI registration
                    Read more...
                </Text>
              
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 16 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    title: { fontSize: 20, fontWeight: 'bold' },
    icon: { width: 24, height: 24 },
    icontrain:{top:10,width: 24, height: 24,marginLeft:3},
    iconback:{top:10,width: 24, height: 24,marginLeft:3},
    portfolioInfo: { marginVertical: 16 },
    subtitle: { fontSize: 18, fontWeight: '600' },
    description: { color: '#6e6e6e', marginVertical: 8 },
    stats: { flexDirection: 'row', justifyContent: 'space-between' },
    cagr: { color: 'green', fontWeight: 'bold' },
    holdingsSection: { marginVertical: 16 },
    sectionTitle: { fontSize: 16, fontWeight: 'bold' },
    pieChart: { width: '100%', height: 200, resizeMode: 'contain' },
    stocksSection: { padding: 16, backgroundColor: '#f9f9f9', borderRadius: 8 },
    lockSection: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
    lockIcon: { width: 24, height: 24, marginRight: 8 },
    lockText: { color: '#6e6e6e' },
    managerSection: { marginVertical: 16 },
    managerDescription: { color: '#6e6e6e', marginVertical: 8 },
});

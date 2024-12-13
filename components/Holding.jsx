import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { Circle, G, Line } from 'react-native-svg';

const HoldingsDistribution = () => {
    const data = [
        {
            key: 1,
            value: 50,

            svg: { fill: '#A78BFA' },
            label: 'Largecap',
        },
        {
            key: 2,
            value: 25,

            svg: { fill: '#FBBF24' },
            label: 'Midcap',
        },
        {
            key: 3,
            value: 25,

            svg: { fill: '#60A5FA' },
            label: 'Smallcap',
        },
    ];

    const Labels = ({ slices }) => {
        return slices.map((slice, index) => {
            const { labelCentroid, pieCentroid, data } = slice;
            return (
                <G key={index}>
                    <Line
                        x1={pieCentroid[0]}
                        y1={pieCentroid[1]}
                        x2={labelCentroid[0]}
                        y2={labelCentroid[1]}
                        stroke={data.svg.fill}
                    />
                    <Circle
                        cx={labelCentroid[0]}
                        cy={labelCentroid[1]}
                        r={5}
                        fill={data.svg.fill}
                    />
                </G>
            );
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Holdings distribution</Text>
            <View style={styles.holdingContainer}>

                <PieChart
                    style={styles.chart}
                    data={data}
                    outerRadius={'95%'}
                    innerRadius={'70%'}
                    labelRadius={110}
                >
                    <Labels />
                </PieChart>
                <View style={styles.legendContainer}>
                    {data.map((item) => (
                        <View key={item.key} style={styles.legendItem}>
                            <View
                                style={[styles.legendColor, { backgroundColor: item.svg.fill }]}
                            />
                            <Text style={styles.legendText}>{item.label}</Text>
                            <Text style={styles.legendText}>{item.value}%</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'left',
        padding: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 20,
    },
    chart: {
        height: 180,
        width: 180,
    },
    legendContainer: {
        marginTop: 20,
        alignItems: 'flex-start',
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 28,
        marginTop: 10

    },
    legendColor: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    legendText: {
        fontSize: 14,
        marginRight: 5,
    },
    holdingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

export default HoldingsDistribution;

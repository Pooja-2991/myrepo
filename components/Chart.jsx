import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions, View } from 'react-native';

const Chart = () => {
    const screenWidth = Dimensions.get('window').width;

    return (
        <View>
            <LineChart
                data={{
                    labels: ['Jan', 'Apr', 'Jul', 'Oct'],
                    datasets: [
                        { data: [56, 140, 67, 180, 34,102] },
                        { data: [35, 120, 78, 200, 98,164] },
                    ],
                }}
                width={screenWidth - 32}
                height={220}
                chartConfig={{
                    backgroundColor: '#fff',
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                }}
            />
        </View>
    );
};

export default Chart;

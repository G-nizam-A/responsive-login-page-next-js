import React from 'react'
import { ResponsiveBump } from '@nivo/bump'
import data from './data'

class Chart extends React.Component {

    render() {
        return (
            <div className="chart">
                <ResponsiveBump
                    data={data}
                    xPadding={0.5}
                    colors={{ scheme: 'spectral' }}
                    lineWidth={3}
                    activeLineWidth={6}
                    inactiveLineWidth={3}
                    inactiveOpacity={0.15}
                    startLabel={true}
                    startLabelPadding={15}
                    startLabelTextColor="#555555"
                    endLabel={false}
                    endLabelPadding={15}
                    endLabelTextColor={{ theme: 'background' }}
                    pointSize={0}
                    inactivePointSize={0}
                    pointColor={{ from: 'serie.color', modifiers: [] }}
                    pointBorderColor={{ theme: 'background' }}
                    enableGridX={false}
                    axisTop={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    axisLeft={null}
                    margin={{ top: 105, right: 30, bottom: 25, left: 55 }}
                    axisRight={null}
                />
                <style jsx>{
                    `
                   .chart {
                        height:40vh;
                        width:60vw;
                        transition: 0.3s;
                    }
                    `
                }
                </style>
            </div>
        )
    }
}

export default Chart
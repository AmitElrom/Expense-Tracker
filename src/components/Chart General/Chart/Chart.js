import React from 'react'
import './Chart.css'
import ChartBar from '../Chart Bar/ChartBar'

const Chart = ({ dataPoints }) => {

    // max expense on the year
    const values = dataPoints.map(dataPoint => dataPoint.value)
    let maxValue = Math.max(...values)

    const dataPointsBars = dataPoints.map(dataPoint => {
        return <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxValue}
            label={dataPoint.label}
        />
    })

    return (
        <div className='chart'>
            {dataPointsBars}
        </div>
    )
}

export default Chart
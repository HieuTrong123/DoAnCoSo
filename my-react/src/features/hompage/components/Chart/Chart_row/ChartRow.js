import React, { useEffect, useState } from 'react'
import './chartRow.css'
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis, Tooltip, Legend
} from '@devexpress/dx-react-chart-material-ui';
import { Animation, Stack, EventTracker, HoverState } from '@devexpress/dx-react-chart';

export default function ChartRow(props) {

    const [loadAxis, setLoadAxis] = useState(false)

    useEffect(() => {
        const renderAxis = setTimeout(() => (
            setLoadAxis(true)
        ), 1400)

        return () => clearTimeout(renderAxis)
    }, [])

    return (
        <div className='chartrow Container__box'>
            <Chart
                data={props.data}
            >
                {loadAxis && (< ArgumentAxis />)}
                {loadAxis && (<ValueAxis max={2400} />)}

                < BarSeries
                    name="Số lượng xe vào"
                    valueField="in"
                    argumentField="name"
                />
                <BarSeries
                    name="Số lượng xe ra"
                    valueField="out"
                    argumentField="name"
                />
                <Animation />
                <Legend position="bottom" rootComponent={props.Root} labelComponent={props.Label} />
                <Title text="Tổng số lượng ra/vào trong 7 ngày gần đây" />
                <Stack
                    stacks={[
                        { series: ['Số lượng xe vào', 'Số lượng xe ra'] },
                    ]}
                />
                <EventTracker />
                <HoverState />
                <Tooltip />
            </Chart >
        </div >
    )
}

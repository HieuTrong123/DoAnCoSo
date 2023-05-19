import React from 'react'
import './chartpie.css'
import {
    Chart,
    Title,
    PieSeries,
    Tooltip, Legend
} from '@devexpress/dx-react-chart-material-ui';
import { Animation, EventTracker, HoverState } from '@devexpress/dx-react-chart';

export default function ChartPie(props) {
    return (
        <div className='chartpie Container__box'>
            <Chart
                data={props.data}
            >
                <PieSeries
                    valueField="value"
                    argumentField="name"
                />
                <Title
                    text="Biểu đồ số lượng xe vào/ra 19/04/2023"
                />
                <Animation />
                <EventTracker />
                <HoverState />
                <Tooltip />
                <Legend position="bottom" rootComponent={props.Root} labelComponent={props.Label} />
            </Chart>
        </div>
    )
}

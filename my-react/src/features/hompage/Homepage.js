import React from 'react'
import './homepage.css'
import { Legend } from '@devexpress/dx-react-chart-material-ui';
import ChartPie from './components/Chart/Chart__pie/ChartPie';
import ChartRow from './components/Chart/Chart_row/ChartRow';
import ListHeader from './List_item_Header/ListHeader';
export default function Homepage() {
    document.title = "Trang chủ"
    const data = [
        {
            name: 'Số lượng xe vào', value: 50,
        }, {
            name: 'Số lượng xe ra', value: 50,
        }
    ];
    const data_bar = [
        {
            name: '12/04', in: 570.8, out: 337.6,
        },
        {
            name: '13/04', in: 440.2, out: 637.6,
        },
        {
            name: '14/04', in: 200, out: 728.5,
        },
        {
            name: '15/04', in: 90, out: 741.5,
        },
        {
            name: '16/04', in: 200, out: 728.5,
        },
        {
            name: '17/04', in: 440.2, out: 637.6,
        },
        {
            name: '18/04', in: 570.8, out: 337.6,
        }
    ];
    const item_Headers = [
        {
            title: 'Tổng số tài khoản: ',
            icon: 'fa-solid fa-user-group',
            numble: '114'
        },
        {
            title: 'Số lượng xe hôm nay: ',
            icon: 'fa-solid fa-car',
            numble: '138'
        },
        {
            title: 'Tổng số camera: ',
            icon: 'fa-solid fa-camera',
            numble: '0'
        }
    ]
    const Root = props => (
        <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
    );

    const Label = props => (
        <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />
    );
    return (
        <div>

            <ListHeader item_Headers={item_Headers} />
            <div className='Chart__Box'>
                <ChartPie data={data} Root={Root} Label={Label} />
                <ChartRow data={data_bar} Root={Root} Label={Label} />
            </div>
        </div>
    )
}

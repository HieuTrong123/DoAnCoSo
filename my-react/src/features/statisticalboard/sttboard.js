import React, { useState } from 'react'
import './sttboard.css'
import ChartPie from '../hompage/components/Chart/Chart__pie/ChartPie'
import { Legend } from '@devexpress/dx-react-chart-material-ui';
import Table from '../../Components/table/Table';
import { Link } from 'react-router-dom';
import Model from '../../Components/Model/Model';
import AvtImg from '../../Components/AvatarImage/AvtImg';
export default function SttBoard() {
    const data = [
        {
            name: 'Số lượng xe vào', value: 50,
        }, {
            name: 'Số lượng xe ra', value: 50,
        }
    ];
    const Root = props => (
        <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
    );

    const Label = props => (
        <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />
    );
    const table =
    {
        title: 'Danh sách chi tiết các phương tiện',
        header: [
            'ID', 'Ngày', 'Biển số', 'Khu vực'
        ],
        items: [
            [
                '6338e8b...', '16-05-2023', '43S6-0133', 'khu nhà xe A'
            ],
            [
                '6338e8b...', '16-05-2023', '43S6-0132', 'khu nhà xe A'
            ],
            [
                '6338e8b...', '16-05-2023', '43S6-0133', 'khu nhà xe A'
            ],
            [
                '6338e8b...', '16-05-2023', '43S6-0133', 'khu nhà xe A'
            ],
            [
                '6338e8b...', '16-05-2023', '43S6-0133', 'khu nhà xe A'
            ],
        ]
    }
    const [view, setview] = useState(false);
    function HandleClick() {
        setview(!view);
    }
    const tabletgd =
    {
        title: 'Thông tin ra vào',
        header: [
            'Thời gian vào', 'Thời gian ra'
        ],
        items: [
            [
                '06:00', ' 07:06'
            ],
            [
                ' 07:10', ' 08:10'
            ],

        ]
    }
    const element = (<>
        <div className='element__model' onClick={e => { e.stopPropagation() }}>
            <h2 className='element__title'>Thông tin chi tiết phương tiện</h2>
            <div className='element__inf'>
                <AvtImg />
                <div className='inf__name'>
                    <span>43S6-0133</span>
                    <div >
                        <p>Bolt</p>
                        <i className="fa-solid fa-car-side"></i>
                    </div>
                </div>
                <div className='element__area'>Khu nhà xe A</div>
            </div>
            <div className='element__container'>
                <Table title={tabletgd.title} header={tabletgd.header} items={tabletgd.items} />
            </div>
        </div>
    </>)
    return (
        <div className='Container__box'>
            <Model color='#00000099' mode={view} children={element} handleSettings={HandleClick} />
            <div className='sstboard__head'>
                <h2 className='Sttboard__tittle'>Kết quả thống kê số lượng xe vào/ra</h2>
                <p className='Sttboard__date'>Theo ngày: 16/05/2023 - 16/05/2023</p>
                <Link to={'/Statistical'} style={{ marginLeft: 'auto' }}>
                    <button className='Sttboard__btn'>Thống kê lại</button>
                </Link>
            </div>
            <div className='sstboard__container'>
                <div className='sstboard__Chart'>
                    <ChartPie data={data} Root={Root} Label={Label} />
                </div>
                <div className='sstboard__table'>
                    <Table title={table.title} header={table.header} items={table.items} click={HandleClick} />
                </div>
            </div>
        </div>
    )
}

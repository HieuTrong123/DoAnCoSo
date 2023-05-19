import React from 'react'
import './sttboard.css'
import ChartPie from '../hompage/components/Chart/Chart__pie/ChartPie'
import { Legend } from '@devexpress/dx-react-chart-material-ui';
import Table from '../../Components/table/Table';
import { Link } from 'react-router-dom';
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
            'ID', 'Ngày', 'Biển số', 'Khu vực', 'Chi tiết'
        ],
        items: [
            [
                '6338e8b...', '16-05-2023', '43S6-0133', 'khu nhà xe A', (<button>Xem thêm</button>)
            ],
            [
                '6338e8b...', '16-05-2023', '43S6-0133', 'khu nhà xe A', (<button>Xem thêm</button>)
            ],
            [
                '6338e8b...', '16-05-2023', '43S6-0133', 'khu nhà xe A', (<button>Xem thêm</button>)
            ],
            [
                '6338e8b...', '16-05-2023', '43S6-0133', 'khu nhà xe A', (<button>Xem thêm</button>)
            ],
            [
                '6338e8b...', '16-05-2023', '43S6-0133', 'khu nhà xe A', (<button>Xem thêm</button>)
            ],
        ]
    }
    return (
        <div className='Container__box'>
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
                    <Table title={table.title} header={table.header} items={table.items} />
                </div>
            </div>
        </div>
    )
}

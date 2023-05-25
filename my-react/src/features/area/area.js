import React from 'react'
import './area.css'
import Table from '../../Components/table/Table'
export default function Area() {
    document.title = "Khu vực"
    const table =
    {
        title: 'Danh sách các khu vực',
        header: [
            'ID', 'Region', 'Type', 'Longitude', 'Latitude'
        ],
        items: [
            [
                '633eab6969d', 'khu nhà xe A', 'parking', 'str', 'str'
            ],
            [
                '633eab6969d', 'khu nhà xe A', 'parking', 'str', 'str'
            ],
            [
                '633eab6969d', 'khu nhà xe A', 'parking', 'str', 'str'
            ],
            [
                '633eab6969d', 'khu nhà xe A', 'parking', 'str', 'str'
            ],
        ]
    }
    return (
        <div className='Container__box'>

            <Table title={table.title} header={table.header} items={table.items} />
        </div>
    )
}

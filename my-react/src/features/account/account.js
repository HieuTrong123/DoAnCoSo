import React from 'react'
import './account.css'
import Table from '../../Components/table/Table'
export default function Account() {
    const table =
    {
        title: 'Danh sách các tài khoản',
        header: [
            'ID', 'Username', 'Email', 'SĐT', 'Họ và tên lót', 'Tên'
        ],
        items: [
            [
                '6338e8b61a0a2', 'str', 'str@gmail.com', '0911445111', 'Vo Dinh Hòn', 'Long'
            ],
            [
                '6338e8b61a0a2', 'str', 'str@gmail.com', '0911445111', 'Vo Dinh Hòn', 'Long'
            ],
            [
                '6338e8b61a0a2', 'str', 'str@gmail.com', '0911445111', 'Vo Dinh Hòn', 'Long'
            ],
            [
                '6338e8b61a0a2', 'str', 'str@gmail.com', '0911445111', 'Vo Dinh Hòn', 'Long'
            ],
            [
                '6338e8b61a0a2', 'str', 'str@gmail.com', '0911445111', 'Vo Dinh Hòn', 'Long'
            ],
            [
                '6338e8b61a0a2', 'str', 'str@gmail.com', '0911445111', 'Vo Dinh Hòn', 'Long'
            ],
            [
                '6338e8b61a0a2', 'str', 'str@gmail.com', '0911445111', 'Vo Dinh Hòn', 'Long'
            ],
            [
                '6338e8b61a0a2', 'str', 'str@gmail.com', '0911445111', 'Vo Dinh Hòn', 'Long'
            ],
        ]
    }
    return (
        <div className='Container__box'>
            <Table title={table.title} header={table.header} items={table.items} />
        </div>
    )
}

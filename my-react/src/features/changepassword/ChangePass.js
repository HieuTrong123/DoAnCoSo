import React from 'react'
import './changepass.css'
import FormVLD from '../../Components/Form/FormVLD'
import AvtImg from '../../Components/AvatarImage/AvtImg'
export default function ChangePass() {
    return (
        <div className='changepass Container__box'>
            <div className='changepass__avt'>
                <p className='changepass__title'>Ảnh đại diện</p>
                <AvtImg />
            </div>
            <div className='changepass__form'>
                <p className='changepass__title'>Thay đổi mật khẩu</p>
                <form>
                    <FormVLD name='Mật khẩu cũ' type='text' />
                    <FormVLD name='Mật khẩu mới' type='password' icon='fa-sharp fa-solid fa-eye-slash' />
                    <FormVLD name='Nhập lại mật khẩu' type='password' icon='fa-sharp fa-solid fa-eye-slash' />
                </form>
                <button className='changepass__btn'><i class="fa-solid fa-floppy-disk"></i>Lưu</button>
            </div>
        </div>
    )
}

import React from 'react'
import './userif.css'
import FormVLD from '../../Components/Form/FormVLD'
import AvtImg from '../../Components/AvatarImage/AvtImg'
export default function Userif() {
    document.title = "Thông tin tài khoản"
    return (
        <div className='changepass Container__box'>
            <div className='changepass__avt'>
                <p className='changepass__title'>Ảnh đại diện</p>
                <AvtImg />
                {/* <div className='change__avt'>
                    <i class="fa-solid fa-camera"></i>
                    <p>CẬP NHẬT ẢNH</p>
                </div> */}
                <label className='change__avt' for="image_uploads">
                    <i class="fa-solid fa-camera"></i>
                    <p>CẬP NHẬT ẢNH</p></label>
                <input
                    style={{ opacity: 0 }}
                    type="file"
                    id="image_uploads"
                    name="image_uploads"
                // onClick={(e) => { e.preventDefault(); }}
                />
            </div>
            <div className='changepass__form'>
                <p className='changepass__title'>Thông tin</p>
                <form>
                    <FormVLD name='Email *' type='text' />
                    <FormVLD name='Tên đăng nhập *' type='text' />
                    <FormVLD name='Họ và tên lót *' type='text' />
                    <FormVLD name='Tên *' type='text' />
                    <FormVLD name='SĐT *' type='text' />
                </form>
                <button className='changepass__btn'><i class="fa-solid fa-floppy-disk"></i>Lưu</button>
            </div>
        </div>
    )
}

import { Link } from 'react-router-dom';
import './Statistical.css'
import React, { useState } from 'react'
export default function Statistical() {
    document.title = "Thống kê"
    const [isActiveDate, setisActiveDate] = useState(true);
    const [isActiveTime, seTisActiveTime] = useState(false);
    const [isActiveRegion, setIsActiveRegion] = useState(false);
    const [isActiveCar, setIsActiveCar] = useState(false);

    const handleChangeDate = () => {
        setisActiveDate(!isActiveDate);
    }
    const handleChangeTime = () => {
        seTisActiveTime(!isActiveTime);
    }
    const handleChangeRegion = () => {
        setIsActiveRegion(!isActiveRegion);
    }
    const handleChangeCar = () => {
        setIsActiveCar(!isActiveCar);
    }

    return (
        <div>
            <div className='Container__box'>
                <h3 className='Container__title'>
                    Thống kê số lượng vào/ra
                </h3>
                <ul className='Statistical__list'>

                    <h3 className='Statistical__title'>Chọn loại thống kê: </h3>
                    <li className='Statistical__item'>
                        <input type='checkbox' checked={isActiveDate} onChange={handleChangeDate}></input>
                        <span>Ngày</span>
                    </li>
                    <li className='Statistical__item'>
                        <input type='checkbox' checked={isActiveTime} onChange={handleChangeTime}></input>
                        <span>Khoảng thời gian</span>
                    </li>
                    <li className='Statistical__item'>
                        <input type='checkbox' checked={isActiveRegion} onChange={handleChangeRegion}></input>
                        <span>Khu vực</span>
                    </li>
                    <li className='Statistical__item'>
                        <input type='checkbox' checked={isActiveCar} onChange={handleChangeCar}></input>
                        <span>Phương tiện</span>
                    </li>
                </ul>
                <div className='content'>
                    {
                        isActiveDate
                            ? (
                                <div className='Statistical__box'>
                                    <div>
                                        <h3>Theo ngày</h3>
                                    </div>
                                    <div className='box__item'>
                                        <div className='Statistical__list'>
                                            <div className='Statistical__box-item'>
                                                <p>Từ ngày</p>
                                                <i className="fa-regular fa-calendar">
                                                    {/* <input type='date' /> */}
                                                </i>
                                            </div>
                                            <div className='Statistical__box-item'>
                                                <p>Đến ngày</p>
                                                <i className="fa-regular fa-calendar"></i>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                            : (
                                <></>
                            )
                    }
                    {
                        isActiveTime
                            ? (
                                <div className='Statistical__box'>
                                    <div>
                                        <h3>Theo thời gian</h3>
                                    </div>
                                    <div className='box__item'>
                                        <div className='box__title'>
                                            <input type='checkbox'></input>
                                            <span>Thời gian vào</span>
                                        </div>
                                        <div className='Statistical__list'>
                                            <div className='Statistical__box-item'>
                                                <p>Từ ngày</p>
                                                <i className="fa-regular fa-clock"></i>
                                            </div>
                                            <div className='Statistical__box-item'>
                                                <p>Đến ngày</p>
                                                <i className="fa-regular fa-clock"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='box__item'>
                                        <div className='box__title'>
                                            <input type='checkbox'></input>
                                            <span>Thời gian ra</span>
                                        </div>
                                        <div className='Statistical__list'>
                                            <div className='Statistical__box-item'>
                                                <p>Từ ngày</p>
                                                <i className="fa-regular fa-clock"></i>
                                            </div>
                                            <div className='Statistical__box-item'>
                                                <p>Đến ngày</p>
                                                <i className="fa-regular fa-clock"></i>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                            : (<></>)
                    }
                    {
                        isActiveRegion
                            ? (
                                <div className='Statistical__box'>
                                    <div>
                                        <h3>Theo khu vực</h3>
                                    </div>
                                    <div className='box__item'>
                                        <div className='Statistical__list'>
                                            <div className='Statistical__box-item'>
                                                <p>Biển số xe</p>
                                                <i className="fa-solid fa-chevron-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            : (<></>)
                    }
                    {
                        isActiveCar
                            ? (
                                <div className='Statistical__box'>
                                    <div>
                                        <h3>Theo phương tiện</h3>
                                    </div>
                                    <div className='box__item'>
                                        <div className='Statistical__list'>
                                            <div className='Statistical__box-item'>
                                                <p>Biển số xe</p>
                                                <i className="fa-solid fa-chevron-down"></i>
                                            </div>
                                            <div className='Statistical__box-item'>
                                                <p>Chọn loại phương tiện</p>
                                                <i className="fa-solid fa-chevron-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            : (<></>)
                    }
                </div>
                <Link to={'/statisticalboard'} style={{ marginLeft: 'auto' }}>
                    <button className='Statistical__btn'>Thống kê</button>
                </Link>

            </div>
        </div>
    )
}

import React, { useState } from 'react';
import filter from '../../static/filter.svg';
import Style from './style';

const checkboxItems = ['Voucher khuyến mại', 'Thẻ điện thoại', 'Quà tặng'];
export default function Filters({ amount }) {
    const [openFilter, setOpenFilter] = useState(false);
    return (
        <Style>
            <div className="filters-container">
                <div className={openFilter ? "filters small" : "filters"}>
                    <label className="label">
                        <input type="checkbox" name="all"/>
                        <span className="checkmark"></span>
                        <p className="label-text">Tất cả ({amount})</p>
                    </label>
                    {
                        checkboxItems && checkboxItems.map((item, index) => (
                            <label className="label" key={item}>
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                                <p className="label-text">{item}</p>
                            </label>
                    ))
                    }
                    <select className="select">
                        <option>Sắp xếp theo: Phổ biến</option>
                    </select>
                </div>
                <div className="button-filter">
                    <button className="navbar-toggler" onClick={() => setOpenFilter(!openFilter)}>                                      
                        <img src={filter} className="img-filter" alt="filter" /><p className="text">Lọc</p>
                    </button>
                </div>
            </div>
        </Style>
    )
}
import React, {useState} from 'react';
import Style from './style';

const tabItems = [
    {
        name: 'Đổi quà tặng',
        notice: false,
    },
    {
        name: 'Vòng quay may mắn',
        notice: true,
    }
];
export default function Tabs() {
  const [tabItemSelect, setTabItemSelect] = useState(0);
    return (
        <Style>
            <div className="tabs-container">
                <p className="text">Nhận quà tặng</p>
                <div className="tabs">
                {
                    tabItems && tabItems.map((item, index) => (
                        <button key={item.name} className={tabItemSelect === index ? 'tab-select' : 'tab'} onClick={() => setTabItemSelect(index)}>{item.name} {item.notice && <div className="ret-dot"/>}</button>
                    ))
                }
                </div>
            </div>
        </Style>
    )
}
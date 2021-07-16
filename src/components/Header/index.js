import React, {useState} from 'react';
import logo from '../../static/logo-header.svg';
import logoSmall from '../../static/logo-small.svg';
import Style from './style';

const menuItems = ['Nhận quà tặng', 'Nhận điểm thưởng', 'Xếp hạng', 'Câu hỏi thường gặp'];
export default function Header({user}) {
  const [menuItemSelect, setMenuItemSelect] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Style>
      <div className="header-container">
        <img src={logo} className="logo" alt="logo" />
        <div className={openMenu ? "navigation-menu small" : "navigation-menu"}>
          {
            menuItems && menuItems.map((item, index) => (
              <div className="nav-item" key={item}>
                <p className={menuItemSelect === index ? 'text' : ''} onClick={() => setMenuItemSelect(index)}>
                  {item}
                </p>
              </div>
            ))
          }
          <div className="nav-item">
            <img src={user.avatar} className="avatar" alt="logo" />
            <div className="name-point">
              <p>{user.name.length>20?`${user.name.slice(0,20)}...`:user.name}-</p>
              <p className="point">{user.points.toLocaleString('de-DE')}</p>
            </div>
              <img src={logoSmall} className="logo-small" alt="logo small"></img>
          </div>
        </div>
        <div className="button-menu">
          <button className={openMenu ? "navbar-toggler change" : "navbar-toggler"} onClick={()=>setOpenMenu(!openMenu)}>
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </button>
        </div>
      </div>
    </Style>
  );
}

import React, {useState} from 'react';
import logo from '../../static/logo-footer.svg';
import linkedin from '../../static/linkedin.svg';
import facebook from '../../static/facebook.svg';
import insta from '../../static/insta.svg';
import youtube from '../../static/youtube.svg';
import twitter from '../../static/twitter.svg';
import Style from './style';

export default function Footer({user}) {
  return (
    <Style>
      <div className="footer-container">
        <img src={logo} className="logo" alt="logo" />
        <div className="nav-menu-small">
            <div className="nav-item">
              <p>Điều khoản sử dụng</p>
            </div>
            <div className="nav-item">
              <p>Chính sách bảo mật</p>
            </div>
        </div>
        <div className="navigation-menu">
          <img src={linkedin} className="social" alt="linkedin" />
          <img src={facebook} className="social" alt="facebook" />
          <img src={insta} className="social" alt="insta" />
          <img src={youtube} className="social" alt="youtube" />
          <img src={twitter} className="social" alt="twitter" />
        </div>
        <div className="under">
          <p className="©">© 2021.Bản quyền thuộc về Công ty TNHH Cốc Cốc.</p>
          <div className="nav-menu">
            <div className="nav-item">
              <p>Điều khoản sử dụng</p>
            </div>
            <div className="nav-item">
              <p>Chính sách bảo mật</p>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}

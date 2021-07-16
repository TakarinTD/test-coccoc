import styled from 'styled-components';

export default styled.div`
    .footer-container{
        position: relative;
        height: 150px;
        background: #141515;
    }
    .logo{
        position: absolute;
        width: auto;
        height: 40px;
        left: calc(50% - 262px/2 - 424px);
        top: 32px;
    }
    .navigation-menu{
        width: fit-content;
        position: absolute;
        right: calc(50% - 262px/2 - 424px);
        top: 34px;
    }
    .social{
        width:24px;
        height:24px;
        margin-left: 8px;
    }
    .under{
        position: absolute;
        left: calc(50% - 262px/2 - 424px);
        right: calc(50% - 262px/2 - 424px);
        top: 92px;
        border-top: 1px solid #A2A3A3;
        margin: 0px;
        padding: 0px;
    }
    .©{
        position: absolute;
        color: #A2A3A3;
        font-size: 14px;
        line-height: 150%;
        margin-top: 10px;
    }
    .nav-menu{
        display: flex;
        flex-direction: row;
        padding: 0px;
        position: absolute;
        width: auto;
        right: 0%;
    }
    .nav-menu-small{
        display: none;
    }
    .nav-item{
        width: auto;
        cursor: pointer;
        color: #A2A3A3;
        font-size: 14px;
        line-height: 150%;
        margin-left: 24px;
    }
    @media only screen and (max-width: 1170px) {
        .logo{         
            left: 5%;
        }
       .navigation-menu{
            right: 5%;
        }
        .under{         
            left: 5%;
            right: 5%;
        }
    }
    @media only screen and (max-width: 670px) {
        .footer-container{
            height: 190px;
        }
        .logo{
            height: 24px;
        }
        .nav-menu{
            display: none;
        }
        .navigation-menu{
            padding:0px;
            left: 5%;
            top: 95px;
        }
        .nav-menu-small{
            position: absolute;
            display: flex;
            flex-direction: row;
            padding: 0px;
            width: auto;
            left: 5%;
            top: 48px;
        }
        .under{         
            top: 135px;
        }
        .nav-item{
            margin-left: 0px;
            margin-right: 24px;
        }
        .social{
            margin-left: 0px;
            margin-right: 8px;
        }
    }
`;

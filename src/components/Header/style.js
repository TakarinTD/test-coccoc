import styled from 'styled-components';

export default styled.div`
    .header-container{
        position: relative;
        height: 90px;
        background: #FFFFFF;
    }
    .logo{
        position: absolute;
        width: auto;
        height: 40px;
        left: calc(50% - 262px/2 - 424px);
        top: calc(50% - 40px/2);
    }
    .navigation-menu{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px;
        position: absolute;
        width: auto;
        height: 24px;
        right: calc(50% - 262px/2 - 424px);
        top: calc(50% - 24px/2 + 10px);
        max-width: 787px;
    }
    .nav-item{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: auto;
        height: 24px;
        margin: 5px 10px;
        cursor: pointer;
        &:hover,
        &:active {
            color: #4FBA69;
        }
        .text{
            color: #4FBA69;
        }
    }
    .avatar{
        width: 24px;
        height: 24px;
        border-radius: 100%;
    }
    .name-point{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px;
        width: auto;
        height: 24px;
    }
    .point{
        color: #F48120;
    }
    .logo-small{
        height: 12px;
        padding-top: 3px;
    }
    .navbar-toggler {
        display: none;
        background-color: transparent;
        border: 0;
        cursor: pointer;
    }
    .change .bar1 {
        transform: rotate(-45deg) translate(-4px,5px);
    }
    .change .bar2 {
        opacity: 0;
    }
    .change .bar3 {
        transform: rotate(45deg) translate(-7px,-9px);
    }
    .bar1, .bar2, .bar3 {
        width: 1.78571rem;
        height: .21429rem;
        background-color: #000;
        margin: .35714rem 0;
        display: block;
        transition: .4s;
    }
    .button-menu{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px;
        position: absolute;
        width: auto;
        height: 24px;
        right: 1%;
        top: calc(50% - 24px/2 + 5px);
    }
    
    @media only screen and (max-width: 1170px) {
        .logo{         
            left: 5%;
        }
       .navigation-menu{
            right: 5%;
        }
    }
    @media only screen and (max-width: 1020px) {
        .navbar-toggler {
            display: block;
        }
        .navigation-menu{
            display: none;
        }
        .button-menu{
            right: 5%;
        }
        .small{
            display: block;
            transform: scaleY(1);
            position: absolute;
            background-color: #fff;
            right: 0;
            top: 70px;
            max-width:100%;
            width: 100%;
            box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
            text-align: center;
            height: auto;
            padding: 10px 0px;
            z-index:1000;
        } 
    }
`;

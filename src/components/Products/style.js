import styled from 'styled-components';

export default styled.div`
    .products-container{      
        position: relative;
        display: grid;
        justify-content: center;
        grid-gap: 30px 37px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-columns: repeat(auto-fit, 249px);
        max-width: 1110px;
        left: calc(50% - 262px/2 - 424px);
        margin-top: 24px;
    }
    .card{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 100%;
        width: 100%;
        height: 303px;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
    }
    .image{
        width: 100%;
        height: 143px;
    }
    .frame{
        position: absolute;
        max-width: 100%;
        width: 100%;
        bottom: 16px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .name{
        position: static;
        text-align: left;
        font-weight: 500;
        font-size: 16px;
        line-height: 17px;
        color: #212121;
        margin:12px 0px 0px 16px;
    }
    .expiry{
        position: static;
        text-align: left;
        font-size: 14px;
        line-height: 150%;
        color: #6E7171;
        margin:4px 0px 0px 16px;
    }
    .point{
        display: flex;
        flex-direction: row;
        margin:4px 0px 0px 16px;
    }
    .text{
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        padding-top: 2px;
        margin: 0px;
        color: #F48120;
    }
    .logo-small{
        padding-top: 9px;
        margin: 0px 0px 0px 1px;
        height: 12px;
        width: 12px;
    }
    .button{
        padding: 6px 16px;
        width: 87px;
        height: 33px;
        border: 1px solid #F16037;
        border-radius: 8px;
        margin:10px 0px 0px 16px;
        background-color: #ffffff;
        font-weight: 500;
        font-size: 14px;
        line-height: 150%;
        color: #F16037;
        cursor: pointer;
        &:hover,
        &:active {
            background-color: #B7B7B7;
        }
    }
    .pagination {
        display: inline-block;
        margin-top: 24px;
    }

    .pagination p {
        color:  #848687;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
        font-weight: 500;
        font-size: 16px;
        line-height: 17px;
        border-radius: 8px;
        cursor: pointer;
    }

    .pagination p.active {
        background-color: #F16037;
        color: white;
    }

    .pagination p:hover:not(.active) {background-color: #ddd;}

    @media only screen and (max-width: 1170px) {
        .products-container{         
            left: 5%;
            width: 90%;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
    @media only screen and (max-width: 930px) {
        .products-container{         
            grid-template-columns: 1fr 1fr;
        }
    }
    @media only screen and (max-width: 550px) {
        .products-container{         
            grid-template-columns: 1fr;
        }
    }
`;

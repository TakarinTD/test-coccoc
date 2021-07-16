import styled from 'styled-components';

export default styled.div`
    .tabs-container{      
        position: relative;
        width: 100%;
        height: 161px;
        background: linear-gradient(180deg, #FFFFFF 0%, #E3F0EE 67.14%);
    }
    .text{
        position: absolute;
        width: auto;
        left: calc(50% - 262px/2 - 424px);
        bottom: 86px;
        font-weight: bold;
        font-size: 18px;
        line-height: 150%;
        color: #2A2B2B;
    }
    .tabs{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        width: auto;
        height: 50px;
        position: absolute;
        left: calc(50% - 262px/2 - 424px);
        bottom: 0%;
    }
    .tab{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px 16px;
        position: static;
        height: 50px;
        left: 1%;
        top: 0px;
        background: #F5FAF9;
        border-radius: 4px 4px 0px 0px;
        border-color: #F5FAF9;
        border: none;
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0px 4px 0px 0px;
        color: #B7B7B7;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        width: auto;
        cursor: pointer;
    }
    .tab-select{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px 16px;
        position: static;
        height: 50px;
        left: 1%;
        top: 0px;
        background: #FFFFFF;
        border-radius: 4px 4px 0px 0px;
        border-color: #FFFFFF;
        border: none;
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0px 4px 0px 0px;
        color: #4FBA69;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        width: auto;
        cursor: pointer;
    }
    .ret-dot{
        background: #F16037;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        position: absolute;
        top: 25%;
        right: 4%;
    }
    @media only screen and (max-width: 1170px) {
        .text{         
            left: 5%;
        }
        .tabs{
            left: 5%; 
        }
    }
`;

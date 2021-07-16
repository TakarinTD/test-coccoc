import styled from 'styled-components';

export default styled.div`
    .filters-container{      
        position: relative;
        display: flex;
        flex-direction: row;
        max-width: 1110px;
        height: 53px;
        left: calc(50% - 262px/2 - 424px);
        right: calc(50% - 262px/2 - 424px);
        border-bottom: 1px solid #F5F5F5;
        margin-top: 36px;
    }
    .filters{
        position: absolute;
        display: flex;
        flex-direction: row;
        width: 100%;
    };
    .label {
        display: flex;
        align-items: center;
        flex-direction: row;
        position: relative;
        cursor: pointer;
        margin-right: 26px;
    }

    .label input {
        opacity: 0;
    }
    .checkmark {
        position: absolute;
        height: 12px;
        width: 12px;
        background-color: #ffffff;
        border: 1px solid #444545;
        z-index: 1;
    }
    .label:hover input ~ .checkmark {
        background-color: #ccc;
    }
    .label input:checked ~ .checkmark {
        background-color: #4FBA69;
        border: none;
    }

    .label input:checked ~ .label-text {
        color: #4FBA69;
    }
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }
    .label input:checked ~ .checkmark:after {
        display: block;
    }
    .label .checkmark:after {
        left: 4px;
        top: 1px;
        width: 3px;
        height: 6px;
        border: solid white;
        border-width: 0 1.44px 1.44px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    select {
        background-color: white;
        border: thin solid #E3E3E3;
        border-radius: 4px;
        position: absolute;
        display: flex;
        right: 0%;
        width: 255px;
        height: 40px;
        padding: 0.5em 3.5em 0.5em 1em;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-appearance: none;
        -moz-appearance: none;
        color: #848687;
    }
    select.select:focus{
        border: none;
    }
    select.select {
        background-image:
            linear-gradient(45deg, transparent 50%, #2A2B2B 50%),
            linear-gradient(135deg, #2A2B2B 50%, transparent 50%),
            linear-gradient(to right, white, white);
        background-position:
            calc(100% - 20px) calc(1em + 2px),
            calc(100% - 15px) calc(1em + 2px),
            100% 0;
        background-size:
            5px 5px,
            5px 5px,
            2.5em 2.5em;
        background-repeat: no-repeat;
    }

    .navbar-toggler {
        display: none;
        align-items: center;
        width:100;
        background-color: transparent;
        border: 0;
        cursor: pointer;
        .text{
            margin-left: 5px;
        }
    }
    @media only screen and (max-width: 1170px) {
        .filters-container{         
            left: 5%;
            width: 90%;
        }  
    }
    @media only screen and (max-width: 1145px) {
        .filters{         
            display:none;
        }
        .navbar-toggler{         
            display:flex;
        }

        .small{
            display: block;
            transform: scaleY(1);
            position: absolute;
            background-color: #fff;
            left: 0;
            top: 50px;
            width: auto;
            box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
            text-align: center;
            height: auto;
            padding: 5px;
            z-index:1000;
        }
        .label{
            margin:5px;
        }
        select{
            position: static;
        }
    }

`;

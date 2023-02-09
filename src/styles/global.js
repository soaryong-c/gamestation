import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;

        ::-webkit-scrollbar {
            width: 7px;
        }

        ::-webkit-scrollbar-track {
            background: #404a42;
        }

        ::-webkit-scrollbar-thumb {
            background: #7d9181;
            border-radius: 999px;
        }
    }
    
    ul {
        list-style-type: none;
    }

    #root {
        width: 100%;
        height: 100%;
    }
    
    body {
        background-color: #181c19;
        height: 100vh;
        color: #fff;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`;


export const HeaderDiv = styled.div`
padding: 1.1rem;
display: flex;
justify-content:space-between;
align-items:center;
background: linear-gradient(45deg, rgba(15,148,226,1) 9%, rgba(0,67,194,1) 55%, rgba(127,37,173,1) 100%);
`;


export const ProfileIcon = styled.img`
width:13px;
margin-left:5px;
margin-right:5px;
`;

export const ProfileDiv = styled.div`
margin-bottom:5px;
text-overflow: ellipsis;
right: 40px;
overflow:hidden;
border-radius:20px;
`;

export const WalletDiv = styled.div`
padding: 0.5rem;
text-overflow: ellipsis;
right: 40px;
width:30vh;
overflow:hidden;
border-radius:20px;
border:1px solid;
`;

export const ConnectButton = styled.div`
padding: 0.5rem;
text-overflow: ellipsis;
right: 40px;
overflow:hidden;
border-radius:20px;
border:1px solid;
`;

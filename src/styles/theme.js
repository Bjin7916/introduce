import styled, { keyframes } from "styled-components";


export const sidebar = styled.div`
    width: 20%;
    height: 100vh;
    font-size: 20px;
    background-color: blanchedalmond;
    text-align: center;
    position: fixed;
    p {
        margin-bottom: 20px;
        padding: 20px;
        color: cadetblue;
        font-weight: bold;
        font-size: 24px;
    }
    a {
        text-decoration: none;
        color: cadetblue;
        font-weight: bold;
    }
`;

export const content_wrap = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    align-content: center;
    justify-content: center;
    min-width: 100%;
    font-weight: bold;
    padding-left: 20%;
    margin-left: 38%;
    height: 100vh;
    width: 100vw;
    text-align: center;
    margin-left: 0;
`;

export const content = styled.div`
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    margin: 0 auto;
    table {
        border: 1px solid #999;
        height: fit-content;
        tr {
            height: 30px;
        }
        td {
            width: 180px;
        }
    }
`;

export const title = styled.h1`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const imgBox = styled.div`
    width: 200px;
    height: 300px;
    align-content: center;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 20px;
    
`

export const PJ = styled.div`
    display: flex;
    margin: 0 auto;
    align-content: center;
    justify-content: center;
    padding: 8px;
`





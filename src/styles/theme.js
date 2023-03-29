import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "./common";


export const sidebar = styled.div`
    width: 20%;
    height: 100vh;
    font-size: 20px;
    background-color: blanchedalmond;
    text-align: center;
    p{
        margin-bottom: 20px;
        padding: 20px;
        color: cadetblue;
        font-weight: bold;
    }
    a{
        text-decoration: none;
        color: cadetblue;
        font-weight: bold;
    }
`

export const content = styled.div`
    background-color: lightslategray;
    display: inline-block;
    position: inherit;
    font-weight: bold;
    font-size: 18px;
`

export const title = styled.h1`
    font-size: 36px;
    font-weight: bold;
`


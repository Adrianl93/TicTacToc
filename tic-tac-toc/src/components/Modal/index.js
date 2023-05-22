import React from "react";
import ReactDOM  from "react-dom";
import { VictoryScreen } from "../VictoryScreen";
const Modal = ({winPlayer, onClickReplay}) =>{
    return ReactDOM.createPortal(
        <VictoryScreen winPlayer={winPlayer} onClickReplay={onClickReplay}/>,
        document.getElementById('modal')
    )
}

export {Modal};
import React, {useState} from 'react';

type OnOffType = {
    on: boolean
    onClick:(on:boolean)=>void
}

const OnOff = (props:OnOffType) => {


    const switchOn = () => {
        if (!props.on) {props.onClick(true)}
    }

    const switchOff = () => {
        if (props.on) {props.onClick(false)}
    }

    const onStyle = {
        fontSize: '16px',
        display: "inline-block",
        height: "20%",
        border: "2px solid black",
        padding: "5px",
        backgroundColor: props.on ? "green" : "white",
    }
    const offStyle = {
        fontSize: '16px',
        display: "inline-block",
        height: "20%",
        border: "2px solid black",
        padding: "5px",
        backgroundColor: props.on ? "white" : "red"
    }
    const indicatorStyle = {
        display: "inline-block",
        width: "12px",
        height: "12px",
        borderRadius: "10px",
        border: "2px solid black",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red",

    }
    return (
        <div className='onOff'>
            <div className='onOffBlock'>
                <button onClick={switchOn} style={onStyle}>on</button>
                <button onClick={switchOff} style={offStyle}>off</button>
                <div style={indicatorStyle}></div>
            </div>
        </div>
    );
};

export default OnOff;
import React, {useState} from 'react';

type OnOffType = {
    on: boolean
}

const UncontrolledOnOff = () => {
    const [on, setOn] = useState(false)

    const switchOn = () => {
        if (!on) {setOn(true)}
    }

    const switchOff = () => {
        if (on) {setOn(false)}
    }

    const onStyle = {
        fontSize: '16px',
        display: "inline-block",
        height: "20%",
        border: "2px solid black",
        padding: "5px",
        backgroundColor: on ? "green" : "white",
    }
    const offStyle = {
        fontSize: '16px',
        display: "inline-block",
        height: "20%",
        border: "2px solid black",
        padding: "5px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        display: "inline-block",
        width: "12px",
        height: "12px",
        borderRadius: "10px",
        border: "2px solid black",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red",

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

export default UncontrolledOnOff;
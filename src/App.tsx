import React, {useState} from 'react';

import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import Rating, {RValueType} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
import OnOff from "./components/OnOff/OnOff";


const App =() => {
    const [collapsed, setCollapsed] = useState(false)
    const toggleHandler = () => {
        collapsed ? setCollapsed(false) : setCollapsed(true)
    }
    const [ratingValue, setValue] = useState<RValueType>(0)
    const [on, setOn] = useState(false)
    return (
        <div className="App">
            <OnOff on={on} onClick={setOn}/>
            <UncontrolledOnOff/>
           <Accordion title={"Menu"} toggleHandler={toggleHandler} collapsed={collapsed} />
            <Rating value={ratingValue} onClick={setValue}/>

        </div>
    );
}

export default App;

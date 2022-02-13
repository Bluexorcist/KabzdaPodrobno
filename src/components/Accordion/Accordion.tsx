import React from "react";

type AccordionType = {
    title: string
    toggleHandler:()=> void
    collapsed?:boolean
}
type AccordionTitleType = {
    title:string
    toggleHandler:()=> void

}

export const Accordion = (props: AccordionType) => {

    return (
        <div className='accordion'>
            <div className='accordionSection'>
                <AccordionTitle toggleHandler={props.toggleHandler} title={props.title}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        </div>
    )
}

const AccordionTitle = (props:AccordionTitleType) => {
    return (
        <div>
            <h3 onClick={props.toggleHandler}>{props.title}</h3>
        </div>
    )
}

const AccordionBody = () => {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

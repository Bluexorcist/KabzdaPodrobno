import React from 'react';


export type RValueType = 0 | 1 | 2 | 3 | 4 | 5;


type StarType = {
    selected: boolean
    onClick:()=>void
}
type RatingType = {
    value:RValueType
    onClick:(value:RValueType)=>void
}

export const Rating = (props:RatingType) => {
    return (
        <div className='stars'>
            <Star selected={props.value > 0} onClick={()=>props.onClick(1)} />
            <Star selected={props.value > 1} onClick={()=>props.onClick(2)}/>
            <Star selected={props.value > 2} onClick={()=>props.onClick(3)}/>
            <Star selected={props.value > 3} onClick={()=>props.onClick(4)}/>
            <Star selected={props.value > 4} onClick={()=>props.onClick(5)}/>
        </div>
    )
};
const Star = (props: StarType) => {
    const ratingHandler = () => {
  props.onClick()
    }
    return (<div onClick={ratingHandler}>
            {props.selected ? <b>Star</b> : "Star"}
        </div>
    )

}
export default Rating;
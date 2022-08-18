import React from 'react';


const PersonCard = (props) => {
    return(
        <>
        <h1>{props.firstName } {props.lastName }  </h1>
        <div></div>
        <div>{props.age}</div>
        <div> {props.colorhir}</div>
        </>
   
    );
}

export default PersonCard;
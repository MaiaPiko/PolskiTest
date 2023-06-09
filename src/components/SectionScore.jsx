import React from 'react'

export default function SectionScore({fullmark,points}){
    return(
        <h3>{points}/{fullmark}</h3>
    );
}
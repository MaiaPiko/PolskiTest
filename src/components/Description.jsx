import React from 'react'

import Timer from "./Timer";

export default function Description({intro, time}){
    return(
        <>
<h1>
{intro}
</h1>
<h3>

</h3>
<h4>

<Timer minutes={time}/>
</h4>
</>
    )
}
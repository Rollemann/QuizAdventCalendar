import React from 'react'

const speachbubble = ({mirror}:{mirror:boolean}) => {
    
    const pixelSize:number = 4;
    const qube:string = `l ${pixelSize},0 l 0,${pixelSize}`;
    const startX:number = 70;
    const width:number = 300;
    const height:number = 180;
    const diagLength:number = 5;

    let diagLine:string = "";
    for(let i:number = 0; i < diagLength; ++i){
        const offset:number = i*pixelSize;
        diagLine += `M ${startX + offset},${offset} ${qube}`;
    }

    return (
        <svg viewBox={`0 0 ${width} ${height}`}>
            <path
                transform={mirror? 'scale(-1,1) translate(-300,0)' : ""}
                stroke='black'
                strokeWidth={1}
                fill='orange'
                d={`${diagLine} M ${startX+diagLength*pixelSize},${diagLength*pixelSize} L ${width-10},${diagLength*pixelSize} L ${width-10},${height} L 10,${height} L 10,${diagLength*pixelSize} L ${startX},${diagLength*pixelSize} L ${startX},0`}
            />
            <text x={15} y={37}>
                Placholder Text for later on.
            </text>
        </svg>
    )
}

export default speachbubble
import React from 'react';
import Seat from './Seat.js';
export default function SeatList(props){
     const array=[1,2,3,4,5,6,7,8,9,10]
     const col=['A','B','C','D','E','F','G','H','I','J']
     return(
          col.map((y) =><div>{y}{array.map((x) => <Seat status="empty" sno={x} row={y}  />)}</div>)    
     )
}

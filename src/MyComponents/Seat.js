import { useState } from 'react';
import './seat.css';

const seatColors = {
    empty: "white",
    selected: "green",
    reserved: "lightgray",
}
let selectseats=[]
export default function Seat(props) {
    const [seatStatus, setStatus] = useState(props.status);
    const seatStyle = {
        backgroundColor: seatColors[seatStatus],
        display: "inline-block"
    };
    const onSeatSelection = () => {
        if (seatStatus === "empty") {
            setStatus("selected");
            selectseats.push(props.row+""+props.sno);
        }
         else if (seatStatus === "selected") {
            let x=selectseats.indexOf(props.row+""+props.sno)
            setStatus("empty");
            selectseats.splice(x,1)    
        }
        console.log(selectseats)
    }

    return (
        <div className="seat" style={seatStyle} onClick={onSeatSelection}/>
    )
};

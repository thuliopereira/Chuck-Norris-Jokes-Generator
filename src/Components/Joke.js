import React, { useEffect } from "react";
import { getPiadas } from "../Api";
import './Joke.css';

function Joke( {value} ) {
    const [piadas, setPiadas] = React.useState([]);

    const fetchPiadas = async (value) => {
        try {
            const data = await getPiadas(value);
            console.log("Data: ", data);
            setPiadas(data.value);
        } catch (error) {
            console.log("fetchPiadas error: ", error);
        }
    }

        

    useEffect(() => {
      fetchPiadas(value)
    }, [value]);


return(
    <div className="Joke-container"> 
        <div className="Joke-text">{piadas}</div> 
        <button onClick={fetchPiadas} className="Joke-btn"> Tell me a new Joke 😃 </button>
    </div>
)


}
    

export default Joke;
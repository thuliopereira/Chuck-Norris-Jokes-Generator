import React from "react";


    export const getPiadas = async (value) => {
        try {
            let url = `https://api.chucknorris.io/jokes/random`;
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            console.log("getPiadas error: ", error)
        }
    }

export default getPiadas;
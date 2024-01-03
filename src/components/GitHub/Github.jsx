import React, { useEffect, useState } from "react";

function GitHub(){
    const [ data  , setData] = useState([]);
    useEffect(()=>{
        fetch("https://api.github.com/users/AbhishekPatil313")
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setData(data);
        })
    },[])
    return( 
    <>
    

    </>
    )
}

export default GitHub;
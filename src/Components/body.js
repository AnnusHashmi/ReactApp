import React from "react"
import './body.css'

function Body(){
    return(
        <div className="body-style">
        <h2>TODO list (very basic)</h2>
        <ul>
            <li>Do Breakfast: <input type="checkbox" /></li>
            <li>Do Homework: <input type="checkbox" /></li>
            <li>Go Gym: <input type="checkbox" /></li>
            <li>Go to class: <input type="checkbox" /></li>
        </ul>
        </div>
    )
}

export default Body
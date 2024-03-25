import { useState } from "react";
import { filterData } from "../data";

function Buttons(props) {
    function buttonHandler(value) {
        props.handleFilter(value.target.innerText);
    }
    return (
        <button className="filter-button" key={props.id} id={'filter-button-' + props.id} onClick={buttonHandler}>{props.title}</button>
    )
}
export default Buttons;
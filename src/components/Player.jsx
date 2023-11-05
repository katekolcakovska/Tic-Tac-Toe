import { useState } from "react";
import App from "../App";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // setIsEditing(true);
        //so setIsEditing(!isEditing) ne rabotese nz zaso? 
        // --- raboti koa ne stavame gore vo zagradata is Editing
        // setIsEditing(isEditing ? false : true);
        // setIsEditing(!isEditing) vo React ne treba ni vaka 
        setIsEditing((editing) => !editing);

        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        // console.log(event);
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    let buttonCaption = "Edit";

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
        buttonCaption = "Save";
    }

    return (
        <li className={isActive ? "active" : ""}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>

            <button onClick={handleEditClick}>{buttonCaption}</button>
        </li>
    );
}


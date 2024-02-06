import { useState } from 'react';

export default function Player({initialName, symbol, isActive,onChangeName,}){
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // you can update your states based on previous state like this but it is not recommended by react
        // setIsEditing(isEditing ? false : true);
        //                 or
        // setIsEditing(!isEditing)
        // The problem with this syntax is that, react does not perform this instantly but schedule it for later

        // Instead you should pass a function to your state updating function
        setIsEditing((editing) => !editing);

        if (isEditing) {
        onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    // let btnCaption = 'Edit';

    if (isEditing) {
        editablePlayerName = (
        <input type="text" required value={playerName} onChange={handleChange} />
        );
        // btnCaption = 'Save';
    }

    return (
        <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}

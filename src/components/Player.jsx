import { useState } from "react";

export default function Player({ initialName, symbol, isActive,onChangeName }) {
  const [playerName, setplayerName] = useState(initialName);
  const [isEditing, setisEditing] = useState(false);
  function handleEditClick() {
    setisEditing((editing) => !editing);
    if(isEditing){
    onChangeName(symbol,playerName)
    }
  }

  function handleChange(e){
    setplayerName(e.target.value)
    
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";
  if (isEditing) {
    editablePlayerName = <input type="text" value={playerName} onChange={handleChange}/>;
    btnCaption = "Save";
  }
  return (
    <li className={isActive?'active':undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}

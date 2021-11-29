import React from "react";

const IndexLevel = ({ levels })=>{
    return <div>
    <h2>Liste des Niveaux</h2>
    {levels.map((level, key) => <div key={key} className="flex justify-between">
        <div>{level.name}</div>
        <div>
            <button>Modifier</button>
            <button>Supprimer</button>
        </div>
    </div>)}
</div>
}
export default IndexLevel;

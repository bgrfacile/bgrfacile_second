import React from "react";

const IndexMatiere = ({ matieres }) => {
    return <div>
        <h2>Liste des matieres</h2>
        {matieres.map((matiere, key) => <div key={key} className="flex justify-between">
            <div>{matiere.name}</div>
            <div>
                <button>Modifier</button>
                <button>Supprimer</button>
            </div>
        </div>)}
    </div>
}

// Index.layout = (page) => (
//     <DashboardLayout>
//         {page}
//     </DashboardLayout>
// );

export default IndexMatiere;

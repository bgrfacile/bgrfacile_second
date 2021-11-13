import React from 'react';
import Layout from '../../Shared/Layout';


const Index = ({ name }) => {
    return (<>
        <div className="text-red-800">
            Bienvenue dans l'index {name}
        </div>
    </>);
}

Index.layout = page => <Layout children={page} />;

export default Index;

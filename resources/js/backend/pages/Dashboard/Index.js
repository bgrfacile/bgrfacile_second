import React from 'react';
import App from '../layouts/app';


const Index = ({ users }) => {
    return (<>
        Tableau de bord
    </>);
}

Index.layout = (page) => (
    <App>
        {page}
    </App>
);
export default Index;

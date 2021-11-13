import React from 'react';
import { DashboardLayout } from '../dashboard-layout';


const Index = ({ name }) => {
    return (<>
        <div className="text-red-800">
            Bienvenue dans l'index {name}
        </div>
    </>);
}

Index.layout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );

  export default Index;

import React from 'react';
import { DashboardLayout } from '../dashboard-layout';


const Index = ({ users }) => {
    return (<>
        <div className="text-red-800">
            Bienvenue dans le dashboard
        </div>
    </>);
}

Index.layout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );

  export default Index;

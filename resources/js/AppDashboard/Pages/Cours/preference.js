import React from "react";
import { DashboardLayout } from "../dashboard-layout";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import IndexCycle from "../Cycle";
import IndexLevel from "../Level/IndexLevel";
import IndexMatiere from "../Matiere";

const Naviguation = ({ cycles,levels,matieres }) => (
    <Tabs>
        <TabList>
            <Tab>Cycle</Tab>
            <Tab>Level</Tab>
            <Tab>Matiere</Tab>
        </TabList>

        <TabPanel>
            <IndexCycle cycles={cycles} />
        </TabPanel>
        <TabPanel>
            <IndexLevel levels={levels} />
        </TabPanel>
        <TabPanel>
            <IndexMatiere matieres={matieres} />
        </TabPanel>
    </Tabs>
);

const Preference = ({ cycles,levels,matieres }) => {
    return <main className="p-5">
        <Naviguation cycles={cycles} levels={levels} matieres={matieres} />
    </main>

}

Preference.layout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Preference;

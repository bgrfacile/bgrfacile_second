import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Nouveau = () => (
    <div className="bg-white p-3 shadow-sm rounded-sm mb-4">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 border-b">
            <span clas="text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            </span>
            <span className="tracking-wide">widget</span>
        </div>
        <div className="min-h-8 w-full flex flex-nowrap p-4 text-gray-700">

        </div>
    </div>
);

export default function NaviguationProfile() {
    return (
        <Tabs>
            <TabList>
                <Tab>Nouvauté </Tab>
                <Tab>Favoris de Cours</Tab>
                <Tab>Favoris d'exercices</Tab>
                <Tab>Formations suivis</Tab>
            </TabList>

            <TabPanel>
                <Nouveau />
            </TabPanel>
            <TabPanel>
                <div>Favoris de Cours</div>
            </TabPanel>
            <TabPanel>
                <div>Favoris d'exercices</div>
            </TabPanel>
            <TabPanel>
                <div>Formations suivis</div>
            </TabPanel>
        </Tabs>
    )
}

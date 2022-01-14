(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_AppDashboard_Pages_preference_AllParametre_js"],{

/***/ "./resources/js/AppDashboard/Pages/preference/AllParametre.js":
/*!********************************************************************!*\
  !*** ./resources/js/AppDashboard/Pages/preference/AllParametre.js ***!
  \********************************************************************/
/***/ (() => {

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import { DashboardLayout } from "../dashboard-layout";
// import IndexCycle from '../Cycle/indexCycle';
// import IndexLevel from '../Level/IndexLevel';
// function TabPanel(props) {
//     const { children, value, index, ...other } = props;
//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     {children}
//                 </Box>
//             )}
//         </div>
//     );
// }
// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };
// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }
// const AllParametre = (props) => {
//     const { cycles } = props;
//     const [value, setValue] = React.useState(0);
//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };
//     return (<Box sx={{ width: '100%' }}>
//         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//             <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//                 <Tab label="Cycle" {...a11yProps(0)} />
//                 <Tab label="Level" {...a11yProps(1)} />
//                 <Tab label="Matiere" {...a11yProps(2)} />
//                 <Tab label="gestion des roles" {...a11yProps(3)} />
//             </Tabs>
//         </Box>
//         <TabPanel value={value} index={0}>
//             <IndexCycle cycles={cycles} />
//         </TabPanel>
//         <TabPanel value={value} index={1}>
//             <IndexLevel />
//         </TabPanel>
//         <TabPanel value={value} index={2}>
//             Item Three
//         </TabPanel>
//         <TabPanel value={value} index={3}>
//             Item Three
//         </TabPanel>
//     </Box>);
// }
// AllParametre.layout = (page) => (
//     <DashboardLayout>
//         {page}
//     </DashboardLayout>
// );
// export default AllParametre;

/***/ })

}]);
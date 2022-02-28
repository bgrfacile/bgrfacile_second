"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[424,473],{6424:function(e,r,t){t.r(r);var a=t(6196),s=t(5893),n=function(e){var r=e.countusers,t=e.countCours;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4",children:[(0,s.jsxs)("div",{className:"bg-white p-4 transition-shadow ease-in-out border rounded-lg shadow-sm hover:shadow-lg",children:[(0,s.jsxs)("div",{className:"flex items-start justify-between",children:[(0,s.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,s.jsx)("span",{className:"text-gray-400",children:"Total des utilisateurs "}),(0,s.jsx)("span",{className:"text-lg font-semibold",children:r})]}),(0,s.jsx)("div",{className:"p-10 bg-gray-200 rounded-md"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"inline-block px-2 py-1 text-sm text-white bg-green-300 rounded",children:"Dernier ajout"}),(0,s.jsx)("span",{className:"mr-1",children:"-----"})]})]}),(0,s.jsxs)("div",{className:"bg-white p-4 transition-shadow ease-in-out border rounded-lg shadow-sm hover:shadow-lg",children:[(0,s.jsxs)("div",{className:"flex items-start justify-between",children:[(0,s.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,s.jsx)("span",{className:"text-gray-400",children:"Total de cours "}),(0,s.jsx)("span",{className:"text-lg font-semibold",children:t})]}),(0,s.jsx)("div",{className:"p-10 bg-gray-200 rounded-md"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"inline-block px-2 py-1 text-sm text-white bg-green-300 rounded",children:"Dernier ajout"}),(0,s.jsx)("span",{className:"mr-1",children:"------"})]})]})]})})};n.layout=function(e){return(0,s.jsx)(a.default,{children:e})},r.default=n},6196:function(e,r,t){t.r(r),t.d(r,{default:function(){return i}});var a=t(7294),s=t(1636),n=t(5893);function l(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var a,s,n=[],l=!0,o=!1;try{for(t=t.call(e);!(l=(a=t.next()).done)&&(n.push(a.value),!r||n.length!==r);l=!0);}catch(e){o=!0,s=e}finally{try{l||null==t.return||t.return()}finally{if(o)throw s}}return n}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return o(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}function i(e){var r=e.children,t=l((0,a.useState)(!1),2),o=t[0],i=t[1],d=l((0,a.useState)(!1),2),c=d[0],x=d[1],u=l((0,a.useState)(!1),2),h=u[0],m=u[1],g=(0,s.qt)().props.auth;return(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"flex h-screen bg-gray-100 dark:bg-gray-800 font-roboto",children:[(0,n.jsx)("div",{onClick:function(){return i(!1)},className:"fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden ".concat(o?"block":"hidden")}),(0,n.jsxs)("div",{className:"".concat(o?"translate-x-0 ease-out":"-translate-x-full ease-in"," fixed z-30 inset-y-0 left-0 w-60 transition duration-300 transform bg-white dark:bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0"),children:[(0,n.jsx)("div",{className:"flex items-center justify-center mt-8",children:(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsx)("span",{className:"text-gray-800 dark:text-white text-2xl font-semibold",children:"bgrfacile"})})}),(0,n.jsxs)("nav",{className:"flex flex-col mt-10 px-4 text-center",children:[(0,n.jsx)(s.rU,{href:route("dashboard"),className:"py-2 text-sm text-gray-700 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 rounded",children:"Dashboard"}),(0,n.jsx)(s.rU,{href:route("users.index"),className:"mt-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100  hover:bg-gray-200 dark:hover:bg-gray-800 rounded",children:"utilisateurs"}),(0,n.jsx)(s.rU,{href:route("cycle.index"),className:"mt-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 rounded",children:"Cycle"}),(0,n.jsx)(s.rU,{href:route("level.index"),className:"mt-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 rounded",children:"level"}),(0,n.jsx)(s.rU,{href:route("matiere.index"),className:"mt-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 rounded",children:"Matiere"})]})]}),(0,n.jsxs)("div",{className:"flex-1 flex flex-col overflow-hidden",children:[(0,n.jsxs)("header",{className:"flex justify-between items-center p-6",children:[(0,n.jsxs)("div",{className:"flex items-center space-x-4 lg:space-x-0",children:[(0,n.jsx)("button",{onClick:function(){return i(!0)},className:"text-gray-500 dark:text-gray-300 focus:outline-none lg:hidden",children:(0,n.jsx)("svg",{className:"h-6 w-6",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M4 6H20M4 12H20M4 18H11",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("h1",{className:"text-2xl font-medium text-gray-800 dark:text-white",children:"Dashboard"})})]}),(0,n.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,n.jsxs)("button",{onClick:function(){return x(!c)},className:"flex text-gray-600 dark:text-gray-300 focus:outline-none","aria-label":"Color Mode",children:[(0,n.jsx)("svg",{"x-show":"darkMode",className:"h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})}),(0,n.jsx)("svg",{"x-show":"!darkMode",className:"h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})})]}),(0,n.jsx)("button",{className:"flex text-gray-600 dark:text-gray-300 focus:outline-none",children:(0,n.jsx)("svg",{className:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",children:(0,n.jsx)("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,n.jsx)("button",{className:"flex text-gray-600 dark:text-gray-300 focus:outline-none",children:(0,n.jsx)("svg",{className:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,n.jsx)("div",{className:"relative",children:(0,n.jsxs)("button",{onClick:function(){return m(!h)},className:"flex items-center space-x-2 relative focus:outline-none",children:[(0,n.jsx)("h2",{className:"text-gray-700 dark:text-gray-300 text-sm hidden sm:block",children:g.user.user_name}),(0,n.jsx)("img",{className:"h-9 w-9 rounded-full border-2 border-purple-500 object-cover",src:g.user.url_image,alt:"avatar"})]})})]})]}),(0,n.jsx)("main",{className:"flex-1 overflow-x-hidden overflow-y-auto",children:(0,n.jsx)("div",{className:"mx-auto px-6 py-8",children:r})})]})]})})}}}]);
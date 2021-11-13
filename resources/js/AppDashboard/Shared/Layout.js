import React from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col h-screen">
          <div className="md:flex">
           <div>Element 1</div>
           <div>Element 2</div>
          </div>
          <div className="flex flex-grow overflow-hidden">
            <div className="w-full px-4 py-8 overflow-hidden overflow-y-auto md:p-12">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import App from '../layouts/app';


const Index = ({ countusers, countCours }) => {
    return (<>
        <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-4 transition-shadow ease-in-out border rounded-lg shadow-sm hover:shadow-lg">
                <div className="flex items-start justify-between">
                    <div className="flex flex-col space-y-2">
                        <span className="text-gray-400">Total des utilisateurs </span>
                        <span className="text-lg font-semibold">{countusers}</span>
                    </div>
                    <div className="p-10 bg-gray-200 rounded-md"></div>
                </div>
                <div>
                    <span className="inline-block px-2 py-1 text-sm text-white bg-green-300 rounded">Dernier ajout</span>
                    <span className='mr-1'>-----</span>
                </div>
            </div>

            <div className="bg-white p-4 transition-shadow ease-in-out border rounded-lg shadow-sm hover:shadow-lg">
                <div className="flex items-start justify-between">
                    <div className="flex flex-col space-y-2">
                        <span className="text-gray-400">Total de cours </span>
                        <span className="text-lg font-semibold">{countCours}</span>
                    </div>
                    <div className="p-10 bg-gray-200 rounded-md"></div>
                </div>
                <div>
                    <span className="inline-block px-2 py-1 text-sm text-white bg-green-300 rounded">Dernier ajout</span>
                    <span className='mr-1'>------</span>
                </div>
            </div>

            {/*  <div className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                <div className="flex items-start justify-between">
                    <div className="flex flex-col space-y-2">
                        <span className="text-gray-400">Total de cours </span>
                        <span className="text-lg font-semibold">100,221</span>
                    </div>
                    <div className="p-10 bg-gray-200 rounded-md"></div>
                </div>
                <div>
                    <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">14%</span>
                    <span>from 2019</span>
                </div>
            </div> */}
        </div>
    </>);
}

Index.layout = (page) => (
    <App>
        {page}
    </App>
);
export default Index;

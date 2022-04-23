import Tabs from '../../../components/Tabs/Tabs';
import ListExercicesCreate from './composants/ListExercicesCreate';
import ListSolutionCreate from './composants/ListSolutionCreate';


export default function MyExos() {
    return (<>
        <Tabs>
            <div label="Mes exercices">
                <ListExercicesCreate />
            </div>
            <div label="Mes solutions">
                <ListSolutionCreate />
            </div>
        </Tabs>
    </>)
}



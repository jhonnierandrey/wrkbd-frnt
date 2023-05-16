import { useEffect } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

import WorkoutDetails from './WorkoutDetails';
import WorkoutsForm from './WorkoutsForm';

const Home = () => {
    const { state, dispatch } = useWorkoutsContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_WORKOUTS', payload: json });
            }
        }

        fetchWorkouts()
    }, [dispatch])

    return (
        <div className='home'>
            <div className="workouts">
                {
                    state.workouts && state.workouts.map((workout) => (
                        <WorkoutDetails key={workout._id} workout={workout} />
                    ))
                }
            </div>
            <WorkoutsForm />
        </div>
    )
}

export default Home
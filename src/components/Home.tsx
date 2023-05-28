import { useEffect } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';

import WorkoutDetails from './WorkoutDetails';
import WorkoutsForm from './WorkoutsForm';

const Home = () => {
    const { state, dispatch } = useWorkoutsContext()
    const userState = useAuthContext()

    const user = userState.state.user;

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts', {
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                }
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_WORKOUTS', payload: json });
            }
        }

        if (user) {
            fetchWorkouts();
        }
    }, [dispatch, user])

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
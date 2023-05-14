import React, { useEffect, useState } from 'react';

import { Workout } from '../types/types';

import WorkoutDetails from './WorkoutDetails';
import WorkoutsForm from './WorkoutsForm';

const Home = () => {
    const [workouts, setWorkouts] = useState<null | Workout[]>(null)
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok) {
                setWorkouts(json);
            }
        }

        fetchWorkouts()
    }, [])

    return (
        <div className='home'>
            <div className="workouts">
                {
                    workouts && workouts.map((workout) => (
                        <WorkoutDetails key={workout._id} workout={workout} />
                    ))
                }
            </div>
            <WorkoutsForm />
        </div>
    )
}

export default Home
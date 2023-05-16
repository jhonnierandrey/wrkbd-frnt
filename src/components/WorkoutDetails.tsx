import { Workout } from '../types/types'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

type WorkoutDetailsProps = {
    workout: Workout
}

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {
    const { dispatch } = useWorkoutsContext();
    const handleClick = async () => {
        const response = await fetch(`/api/workouts/${workout._id}`, {
            method: 'DELETE',
        })
        const json = await response.json()
        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json })
        }
    }
    return (
        <div className='workout-details'>
            <h4>{workout.title}</h4>
            <p><strong>Load (kg):</strong>{workout.load}</p>
            <p><strong>Reps:</strong>{workout.reps}</p>
            <p>{workout?.createdAt ? formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true }) : ""}</p>
            <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
        </div>
    )
}

export default WorkoutDetails
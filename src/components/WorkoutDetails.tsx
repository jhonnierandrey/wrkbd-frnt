import { Workout } from '../types/types'

type WorkoutDetailsProps = {
    workout: Workout
}

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {
    return (
        <div className='workout-details'>
            <h4>{workout.title}</h4>
            <p><strong>Load (kg):</strong>{workout.load}</p>
            <p><strong>Reps:</strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
        </div>
    )
}

export default WorkoutDetails
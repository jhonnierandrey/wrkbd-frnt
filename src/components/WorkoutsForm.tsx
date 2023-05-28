import React, { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';

const WorkoutsForm = () => {
    const { dispatch } = useWorkoutsContext()
    const [title, setTitle] = useState("");
    const [load, setLoad] = useState("");
    const [reps, setReps] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [emptyFields, setEmptyFields] = useState([""])

    const userState = useAuthContext()
    const user = userState.state.user;

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in');
            return;
        }

        const workout = { title, load, reps }

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`,
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields);
        }
        if (response.ok) {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null);
            setEmptyFields([""]);
            console.log('new workout added.')
            dispatch({ type: 'CREATE_WORKOUT', payload: workout })
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new workout:</h3>
            <label >Excersize title:</label>
            <input className={emptyFields.includes('title') ? 'error' : ''} type="text" onChange={(e) => setTitle(e.target.value)} value={title} />

            <label >Load (kg):</label>
            <input className={emptyFields.includes('load') ? 'error' : ''} type="number" onChange={(e) => setLoad(e.target.value)} value={load} />

            <label >Reps:</label>
            <input className={emptyFields.includes('reps') ? 'error' : ''} type="number" onChange={(e) => setReps(e.target.value)} value={reps} />

            <button>Add workout</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default WorkoutsForm
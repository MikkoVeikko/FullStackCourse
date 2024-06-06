import { useState } from 'react'

const Button = ({action, text}) =>
    <button onClick={action}>
        {text}
    </button>

const Display1 = ({anecdotes, votes, selected}) => {
    return (
        <div>
            <h2>Anecdote of the day</h2>
            <div>{anecdotes[selected]}</div>
            <div>has {votes[selected]} votes</div>
        </div>
    )
}
const Display2 = ({anecdotes, votes, highest}) => {
    if (votes[highest] === 0) {
        return (
            <div>
                <h2>Anecdote with most votes:</h2>
                <div>No votes given</div>
            </div>
        )
    }
    else {
        return (
            <div>
                <h2>Anecdote with most votes:</h2>
                <div>{anecdotes[highest]}</div>
                <div>has {votes[highest]} votes</div>
            </div>
        )
    }
}

const App = () => {
    const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time... ' +
    'The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first plcace. Therefore, if you write the code as ' +
    'cleverly as possible, you are, by definiton, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse ' +
    'to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast is to go well.'
]

    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

    const [selected, setSelected] = useState(0) // used as index of anecdote and its votes

    const [highest, setHighest] = useState(0) // used as index of top voted anecdote and its votes

    const vote = () => {
        const updatedVotes = [...votes]
        updatedVotes[selected] ++
        setVotes(updatedVotes)
        const indexOfHighest = updatedVotes.indexOf(Math.max(...updatedVotes))
        setHighest(indexOfHighest)
    }

    const chooseRandom = () => setSelected(Math.floor(Math.random()*anecdotes.length))

    return (
        <div>
            <Display1 anecdotes={anecdotes} votes={votes} selected={selected}/>
            <Button action={chooseRandom} text='next anecdote'/>
            <Button action={vote} text={'vote'}/>
            <Display2 anecdotes={anecdotes} votes={votes} highest={highest}/>
        </div>
    )
}
export default App
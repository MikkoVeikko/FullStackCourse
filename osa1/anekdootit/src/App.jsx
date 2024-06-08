import { useState } from 'react'

const Button = ({action, text}) =>
    <button onClick={action}>
        {text}
    </button>

const Display1 = ({anecdotes, votes, selected}) => { // above the buttons
    return (
        <div>
            <h2>Anecdote of the day</h2>
            <div>{anecdotes[selected]}</div>
            <div>has {votes[selected]} votes</div>
        </div>
    )
}
const Display2 = ({anecdotes, votes, highest}) => { // below the buttons
        return ( votes[highest] === 0 ? // show top voted only if atleast 1 vote is given
            <div>
                <h2>Anecdote with most votes:</h2>
                <div>No votes given</div>
            </div>
        :
            <div>
                <h2>Anecdote with most votes:</h2>
                <div>{anecdotes[highest]}</div>
                <div>has {votes[highest]} votes</div>
            </div>
        )
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
    // an array with a length of [anecdotes], each index filled with a zero.
    // used to keep track of votes of each anecdote

    const [selected, setSelected] = useState(0)
    // used to display (random) anecdote from the [anecdotes]
    // and to display corresponding votecount from the [votes], with the index of 'selected'

    const [highest, setHighest] = useState(0)
    // used as an index of the highest voted anecdote and its corresponding votes

    const vote = () => {
        const updatedVotes = [...votes]
        updatedVotes[selected] ++
        setVotes(updatedVotes)
        const indexOfHighest = updatedVotes.indexOf(Math.max(...updatedVotes))
        // find index of an anecdote with the highest number of votes
        setHighest(indexOfHighest)
    }

    const chooseRandom = () => setSelected(Math.floor(Math.random()*anecdotes.length))
    // using Math.floor to always give a full number between 0 and the length of the array of the anecdotes,
    // in this case, 8

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
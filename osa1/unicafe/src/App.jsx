import {useState} from 'react'

const Button = ({handler, name}) =>
    <button onClick={handler}>
    {name}
    </button>

const StatisticLine = ({text, value}) => {
    return (
    <div>
        <table>
            <tbody>
                <tr>
                  <td>{text}</td><td>{value}</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}


const Statistics = (props) => {

    return (
        props.all === 0 ? 'No feedback given' :
    <>
        <StatisticLine text='good' value={props.good}/>
        <StatisticLine text='neutral' value={props.neutral}/>
        <StatisticLine text='bad' value={props.bad}/>
        <StatisticLine text='all' value={props.all}/>
        <StatisticLine text='average' value={props.average}/>
        <StatisticLine text='positive' value={props.positive}/>
    </>
    )
}

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [average, setAverage] = useState([])

    const calculatePositive = () => {
        const positive = all === 0 ? 0 : (good / all) * 100
        return positive === 0 ? 0 : positive.toFixed(1) + '%' // conditions to prevent return NaN
    }

    const calculateAverage = () => {
        let result = 0
        for (let i = 0; i < average.length; i ++) {
            result += average[i]
        }
        return result === 0 ? 0 : (result / average.length).toFixed(1)
    }

    const increaseGood = () => {
        const updatedGood = good + 1
        setGood(updatedGood)
        setAll(updatedGood + neutral + bad)
        calculatePositive()
        setAverage(average.concat(1))
    }

    const increaseNeutral = () => {
        const updatedNeutral = neutral + 1
        setNeutral(updatedNeutral)
        setAll(updatedNeutral + good + bad)
        calculatePositive()
        setAverage(average.concat(0))
    }

    const increaseBad = () => {
        const updatedBad = bad + 1
        setBad(updatedBad)
        setAll(updatedBad + good + neutral)
        calculatePositive()
        setAverage(average.concat(-1))
    }

    return (
        <div>
            <h2>Give feedback</h2>
            <Button handler={increaseGood} name='good'/>
            <Button handler={increaseNeutral} name='neutral'/>
            <Button handler={increaseBad} name='bad'/>
            <h2>statistics</h2>
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                all={all}
                average={calculateAverage()}
                positive={calculatePositive()}
            />
        </div>
    )
}


export default App

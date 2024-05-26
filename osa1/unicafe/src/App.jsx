import {useState} from 'react'

const Button = ({handler, name}) =>
    <button onClick={handler}>
    {name}
    </button>

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const data = {
        good: good,
        neutral: neutral,
        bad: bad
    }

    const calculatePositive = () => {
        const positive = all === 0 ? 0 : (good / all) * 100
        return positive === 0 ? 0 :  positive.toFixed(2) + '%'
    }

    const calculateAverage = (data) => {
        const points = {
            good: 1,
            neutral: 0,
            bad: -1
        }
        let total = 0
        let count = 0

        for (let key in points) {
            if (data[key]) {
                total += data[key] * points[key]
                count += data[key]
            }
        }
        return count === 0 ? 0 : (total / count).toFixed(2)
}

    const increaseGood = () => {
        const updatedGood = good + 1
        setGood(updatedGood)
        setAll(updatedGood + neutral + bad)
        calculateAverage(data)
        calculatePositive()
    }

    const increaseNeutral = () => {
        const updatedNeutral = neutral + 1
        setNeutral(updatedNeutral)
        setAll(updatedNeutral + good + bad)
        calculateAverage(data)
        calculatePositive()
    }

    const increaseBad = () => {
        setBad(bad + 1)
        setAll(all + 1)
        calculateAverage(data)
        calculatePositive()
    }



    return (
        <div>
            <h2>Give feedback</h2>
            <Button
                handler={increaseGood}
                name='good'
                />
            <Button
                handler={increaseNeutral}
                name='neutral'
                />
            <Button
                handler={increaseBad}
                name='bad'
                />
            <h2>statistics</h2>
            <div>good {good}</div>
            <div>neutral {neutral}</div>
            <div>bad {bad}</div>
            <div>all {all}</div>
            <div>average {calculateAverage(data)}</div>
            <div>positive {calculatePositive()}</div>
        </div>
    )
}


export default App

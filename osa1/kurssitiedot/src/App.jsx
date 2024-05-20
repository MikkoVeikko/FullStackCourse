const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10
            },
            {
                name: "Using props to pass data",
                exercises: 7
            },
            {
                name: "State of a component",
                exercises: 14
            }
        ]
    }
    return (
        <div>
            <Header title={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

const Part1 = (parts) => {
    return (
        <>
            <p>{parts[0].name} {parts[0].exercises}</p>
        </>
    )
}

const Part2 = (parts) => {
    return (
        <>
            <p>{parts[1].name} {parts[1].exercises}</p>
        </>
    )
}

const Part3 = (parts) => {
    return (
        <>
            <p>{parts[2].name} {parts[2].exercises}</p>
        </>
    )
}

const Content = ({parts}) => {
    return (
        <>
            {Part1(parts)}
            {Part2(parts)}
            {Part3(parts)}
        </>
    )
}

const Header = ({title}) => {
    return (
        <>
            <h1>{title}</h1>
        </>
    )
}

const Total = ({parts}) => {
    return(
        <>
            <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
        </>
    )
}

export default App

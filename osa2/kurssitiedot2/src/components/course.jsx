const Header = ({title}) => <h2>{title}</h2>

const Part = ({name, exercises}) => <p>{name} {exercises}</p>

const Content = ({parts}) => {
    return (
        <>
            {parts.map(parts => <Part key={parts.id} name={parts.name} exercises={parts.exercises}/>)}
        </>
    )
}

const Total = ({parts}) => <p style={{fontWeight: "bold"}}>
    Total of {parts.reduce((sum, amount) => sum + amount.exercises, 0)} exercises</p>

const Course = ({courses}) => {
    return (
        <>
            {courses.map(courses =>
                <div key={courses.id}>
                    <Header title={courses.name}/>
                    <Content parts={courses.parts}/>
                    <Total parts={courses.parts}/>
                </div>)}
        </>
    )
}

export default Course
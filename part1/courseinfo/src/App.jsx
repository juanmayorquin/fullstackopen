const Header = (props) => {
  console.log(props);
  return <h1>{props.course.name}</h1>;
};

const Content = (props) => {
  console.log(props)
  return (
    <>
      {props.course.course.map((part) => (
        <Part name={part.name} exercises={part.exercises} key={part.name} />
      ))}
    </>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Total = (props) => {
  console.log(props);
  let total = 0;
  props.course.course.forEach((part) => {
    total = total + part.exercises;
  })
  return (
    <p>
      Number of exercises{" "}
      {total}
    </p>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    course: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }



  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;

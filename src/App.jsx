import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./components/TodoItem/TodoItem";

function getSubHeading(numberOfTasks) {
  return numberOfTasks > 1 ? `${numberOfTasks} tasks` : `${numberOfTasks} task`;
}

function App() {
  const todos = [
    { name: "pay tax", done: false, id: 1 },
    { name: "take out the trash", done: true, id: 2 },
    { name: "buy milk", done: false, id: 2 },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>to do</h1>
          <h2>{getSubHeading(todos.length)}</h2>
        </div>
        <button className={styles.button}>+</button>
      </header>
      <Form />
      <ul>
        {todos.map(({ id, name, done }) => {
          return <TodoItem key={id} name={name} done={done} />;
        })}
      </ul>
    </div>
  );
}

export default App;

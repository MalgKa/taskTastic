import styles from "./App.module.css";
import { Form } from "./components/Form/Form";

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>to do</h1>
          <h2>5 tasks</h2>
        </div>
        <button className={styles.button}>+</button>
      </header>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;

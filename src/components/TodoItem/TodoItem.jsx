import { Button } from "../Button/Button";
import styles from "./TodoItem.module.css";

export function TodoItem({ name, done }) {
  return (
    <>
      <li className={styles.item}>
        <span className={`${styles.name} ${done ? styles.done : ""}`}>
          {name}
        </span>
        {!done && <Button>done</Button>}
        <Button>delete</Button>
      </li>
    </>
  );
}
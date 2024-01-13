import styles from "./Button.module.css";

export function Button({ children, onClick, isEmpty }) {
  return (
    <button disabled={isEmpty} className={`${styles.button}  ${isEmpty ? styles.disabled : ""}`} onClick={onClick}>
      {children}
    </button>
  );
}

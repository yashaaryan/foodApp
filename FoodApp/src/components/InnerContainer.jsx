import styles from "./innerContainer.module.css"

export default function InnerContaner({ children }) {
  return <div className={styles.innerContainer}>{children}</div>;
}

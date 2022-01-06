import styles from './TaskCard.module.css'

export const TaskCard = (): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <h3 className={styles.title}>
          Tasks
        </h3>
        <div className={styles.month}>
          Show:
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.chart}></div>
      </div>
    </div>
  )
}
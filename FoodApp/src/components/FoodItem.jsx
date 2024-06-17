import styles from "./foodItem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.image}>
        <img className={styles.itemImage} src={food.image} alt="food img" />
      </div>
      <div className={styles.itemTitle}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            setFoodId(food.id);
          }}
          className={styles.itemButton}
        >
          View Recipie
        </button>
      </div>
    </div>
  );
}

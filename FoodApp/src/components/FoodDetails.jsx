import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "79cb1c07de834e95828864ffcc842f57";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFood() {
      console.log(URL);
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
      setIsLoading(false);
      console.log(data);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div className={styles.recipeCard}>
      <div>
        <h1 className={styles.recipeName}> {food.title}</h1>
        <img className={styles.image} src={food.image} alt="" />
        <div className={styles.details}>
          <span>
            <strong>Time taken: {food.readyInMinutes}min</strong>
          </span>
          <span>
            <strong>Serves {food.servings}</strong>
          </span>
          <span>{food.vegetarian ? "veg" : "non-veg"}</span>
          <span>{food.vegan ? "Vegan" : ""}</span>
        </div>
        <div>
          <span>{food.pricePerServing / 100} $Per Serving</span>
        </div>
        <div className={styles.instructions}>
          <h1>Ingredients</h1>
          {isLoading ? (
            <p>loading..</p>
          ) : (
            food.extendedIngredients.map((item) => (
              <div>
                <h3>{item.name}</h3>
                <span>
                <p>{item.amount} {item.unit}</p>
                </span>
              

              </div>
            ))
          )}
          <h1>instructions</h1>
          <ol>
            {isLoading ? (
              <p>loading..</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

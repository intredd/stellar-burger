import { FC, useEffect } from 'react';
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';
import { useDispatch, useSelector } from '@store';
import { getIngredientsThunk, getIngredientsStateSelector } from '@slices';
import { useParams } from 'react-router-dom';

export const IngredientDetails: FC = () => {
  const dispatch = useDispatch();
  const ingridientId = useParams().id;

  const ingredients = useSelector(getIngredientsStateSelector).ingredients;
  const ingredientData = ingredients.find(
    (ingredient) => ingredient._id === ingridientId
  );

  useEffect(() => {
    if (ingredients.length == 0) {
      dispatch(getIngredientsThunk());
    }
  }, [dispatch]);

  if (!ingredientData) {
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
};

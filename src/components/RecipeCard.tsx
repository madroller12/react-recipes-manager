import { Link } from 'react-router-dom';
import { type Recipe } from '../models/types';
import { useRecipes } from '../context/RecipeContext';

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  const { toggleVegetarian } = useRecipes();

  return (
    <div className="recipe-card">
      <h3>{recipe.name}</h3>
      <p><strong>Categoria:</strong> {recipe.category}</p>
      <p><strong>Minuti:</strong> {recipe.minutes} min</p>
      <p><strong>Vegetariana:</strong> {recipe.vegetarian ? 'Sì 🥬' : 'No 🥩'}</p>
      
      <button 
        className="btn btn-outline"
        onClick={() => toggleVegetarian(recipe.id)}
        style={{ marginRight: '1rem' }}
      >
        Cambia Veg-status
      </button>
      
      <Link to={`/items/${recipe.id}`} className="link-detail">
        Dettagli
      </Link>
    </div>
  );
}
import { useParams, Link } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';

export function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const { items, loading, error } = useRecipes();

  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p className="text-error">Errore: {error}</p>;

  const recipe = items.find((r) => r.id === Number(id));

  if (!recipe) {
    return (
      <div>
        <h2>Ricetta non trovata</h2>
        <Link to="/" className="btn btn-secondary">Torna alla home</Link>
      </div>
    );
  }

  return (
    <div className="recipe-card">
      <h2>{recipe.name}</h2>
      <p><strong>Categoria:</strong> {recipe.category}</p>
      <p><strong>Minuti:</strong> {recipe.minutes}</p>
      <p><strong>Vegetariana:</strong> {recipe.vegetarian ? 'Sì' : 'No'}</p>
      <br />
      <Link to="/" className="btn btn-secondary">Torna alla lista</Link>
    </div>
  );
}
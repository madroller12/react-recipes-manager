import { useRecipes } from '../context/RecipeContext';
import { RecipeCard } from '../components/RecipeCard';

export function HomePage() {
  const { items, loading, error } = useRecipes();

  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p className="text-error">Errore: {error}</p>;

  return (
    <div>
      <h2>Elenco Ricette</h2>
      {items.length === 0 ? (
        <p>Nessuna ricetta trovata.</p>
      ) : (
        items.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))
      )}
    </div>
  );
}
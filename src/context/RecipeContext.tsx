import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { type Recipe } from '../models/types';
import { fetchRecipes } from '../data/data';

interface RecipeCtx {
  items: Recipe[];
  loading: boolean;
  error: string | null;
  addRecipe: (recipe: Omit<Recipe, 'id'>) => void;
  toggleVegetarian: (id: number) => void;
}

const Context = createContext<RecipeCtx | null>(null);

export function RecipeProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRecipes()
      .then((data) => {
        setItems(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message || 'Network error');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const addRecipe = (newRecipe: Omit<Recipe, 'id'>) => {
    const recipeWithId = { ...newRecipe, id: Date.now() };
    setItems((prev) => [...prev, recipeWithId]);
  };

  const toggleVegetarian = (id: number) => {
    setItems((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, vegetarian: !r.vegetarian } : r
      )
    );
  };

  return (
    <Context.Provider value={{ items, loading, error, addRecipe, toggleVegetarian }}>
      {children}
    </Context.Provider>
  );
}

export function useRecipes() {
  const ctx = useContext(Context);
  if (!ctx) throw new Error('useRecipes deve essere dentro RecipeProvider');
  return ctx;
}
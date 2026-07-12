import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';

export function AddPage() {
  const { addRecipe } = useRecipes();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [minutes, setMinutes] = useState<number | ''>('');
  const [vegetarian, setVegetarian] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !category.trim() || !minutes) {
      setFormError('Compila tutti i campi obbligatori.');
      return;
    }

    addRecipe({
      name,
      category,
      minutes: Number(minutes),
      vegetarian
    });

    navigate('/'); 
  };

  return (
    <div>
      <h2>Aggiungi una nuova ricetta</h2>
      
      <Link to="/" className="btn btn-secondary">
        ⬅ Torna indietro
      </Link>
      <br /><br />

      {formError && <p className="text-error">{formError}</p>}
      
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <label>Nome:</label><br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input" />
        </div>
        <div>
          <label>Categoria:</label><br />
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="form-input" />
        </div>
        <div>
          <label>Minuti:</label><br />
          <input type="number" value={minutes} onChange={(e) => setMinutes(Number(e.target.value))} className="form-input" />
        </div>
        <div>
          <label>
            <input type="checkbox" checked={vegetarian} onChange={(e) => setVegetarian(e.target.checked)} />
            {' '}Vegetariana
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Salva Ricetta
        </button>
      </form>
    </div>
  );
}
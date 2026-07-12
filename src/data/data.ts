import { type Recipe } from '../models/types';

export const initialRecipes: Recipe[] = [
  { id: 1, name: "Carbonara", category: "Primi", minutes: 20, vegetarian: false },
  { id: 2, name: "Insalata greca", category: "Contorni", minutes: 10, vegetarian: true },
  { id: 3, name: "Tiramisu", category: "Dolci", minutes: 30, vegetarian: true }
];

export function fetchRecipes(): Promise<Recipe[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(initialRecipes), 600);
  });
}
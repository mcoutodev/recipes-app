'use client'
import { useRouter } from 'next/navigation'
import { recipes } from '../../../components/recipes/recipes'
import RecipesCard from '@/app/components/recipes/RecipesCard'

export default function Page({ params }: any) {
    const router = useRouter()

    if (params.category !== 'meals' && params.category !== 'drinks') {
        router.push('/notfound')
   }

    return (
        <div>
            <div>
                <input type="" name="name" value="" placeholder='Digite o nome da comida' />
                <input type="" name="ingredient" value="" placeholder='Digite o ingrediente' />
                <select>
                    {recipes.map((recipe) => (
                        <option key={recipe.id} value={recipe.category}>{recipe.category}</option>
                    ))}
                </select>
                <select>
                    {recipes.map((recipe) => (
                        <option key={recipe.id} value={recipe.area}>{recipe.area}</option>
                    ))}
                </select>
                <button type="button">search</button>

            </div>
            <div>
                espaço dos cards
                {recipes.map((recipe) => (
                    <RecipesCard
                        key={recipe.id}
                        name={recipe.name}
                        category={recipe.category}
                        area={recipe.area}
                        image={recipe.image}
                    />
                ))}
            </div>
        </div>
    )
}

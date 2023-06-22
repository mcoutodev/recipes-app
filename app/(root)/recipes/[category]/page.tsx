import { recipes } from '../../../components/recipes/recipes'
import RecipesCard from '@/app/components/recipes/RecipesCard'
import NotFound from '../../notfound/page'

export default function Page({ params }: any) {

    if (params.category !== 'meals' && params.category !== 'drinks') {
        return ( <NotFound /> )
    }

    return (
        <div>
            <div>
                <button type="button">button</button>
                <input type="" name="name" value="Digite o nome da comida" />
                <select>
                    {recipes.map((recipe) => (
                        <option key={recipe.id} value={recipe.category}>{recipe.category}</option>
                    ))}
                </select>

                <select>
                    <option value=""></option>,
                    <option value=""></option>,
                </select>
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

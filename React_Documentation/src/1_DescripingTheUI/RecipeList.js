const recipes = [
	{
		id: "greek-salad",
		name: "Greek Salad",
		ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
	},
	{
		id: "hawaiian-pizza",
		name: "Hawaiian Pizza",
		ingredients: [
			"pizza crust",
			"pizza sauce",
			"mozzarella",
			"ham",
			"pineapple",
		],
	},
	{
		id: "hummus",
		name: "Hummus",
		ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
	},
];

function Recipe({recipe}) {
    return (
        <li key={recipe.id}>
			<h1>{recipe.name}</h1>
			<ul>
				{recipe.ingredients.map((i) => (
					<li key={i}>{i}</li>
				))}
			</ul>
		</li>
    )
}

export default function RecipeList() {
	const listItems = recipes.map((recipe) => (
		<Recipe recipe={recipe} />
	));

	return <>{listItems}</>;
}

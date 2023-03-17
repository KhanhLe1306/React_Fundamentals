import "./App.css";
import PackingList from "./1_DescripingTheUI/ConditionalRendering";
import CLock from "./1_DescripingTheUI/Purity";
import RecipeList from "./1_DescripingTheUI/RecipeList";
import RenderingList from "./1_DescripingTheUI/RenderingList";

function App() {
	return (
		<div className="App">
			{/* <PackingList /> */}
			{/* <RenderingList /> */}
			{/* <RecipeList /> */}
			<CLock time={new Date()} />
		</div>
	);
}

export default App;

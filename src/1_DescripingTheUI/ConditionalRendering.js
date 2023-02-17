function Item({ name, isPacked }) {
	return <li className="item">{isPacked ? <del>{name + " ✔"}</del> : name}</li>;
}

function Item1({ name, isPacked }) {
	// ------------------------------One way
	if (isPacked) {
		return <li className="item">{name} ✔</li>;
	}
	// or return null
	// else {
	// 	return null;
	// }
	return <li className="item">{name}</li>;
}

function LogicalAnd({ name, isPacked }) {
	return (
		<li className="item">
			{name} {isPacked && " ✔"}
		</li>
	);
}

function Challenge1({ name, isPacked }) {
	return (
		<li className="item">
			{name} {!isPacked ? " ❌" : " ✔"}
		</li>
	);
}
function Challenge2({ name, importance }) {
	return (
		<li>
			{name} {importance > 0 && <em>(Importance {importance})</em>}
		</li>
	);
}

function Drink({ name }) {
	let part, content, age;
	if (name === "tea") {
		part = "leaf";
		content = "15–70 mg/cup";
		age = "4,000+ years";
	} else {
		part = "bean";
		content = "80–185 mg/cup";
		age = "1,000+ years";
	}
	return (
		<section>
			<h1>{name}</h1>
			<dl>
				<dt>Part of plant</dt>
				<dd>{part}</dd>
				<dt>Caffeine content</dt>
				<dd>{content}</dd>
				<dt>Age</dt>
				<dd>{age}</dd>
			</dl>
		</section>
	);
}

function DrinkList() {
	return (
		<div>
			<Drink name="tea" />
			<Drink name="coffee" />
		</div>
	);
}

export default function PackingList() {
	return (
		<section>
			<h1>Sally Ride's Packing List</h1>
			<ul>
				<Item isPacked={true} name="Space suit" />
				<Item isPacked={true} name="Helmet with a golden leaf" />
				<Item isPacked={false} name="Photo of Tam" />
				<br></br>
				<Item1 isPacked={true} name="Space suit" />
				<Item1 isPacked={true} name="Helmet with a golden leaf" />
				<Item1 isPacked={false} name="Photo of Tam" />
				<br></br>
				<LogicalAnd isPacked={true} name="Space suit" />
				<LogicalAnd isPacked={true} name="Helmet with a golden leaf" />
				<LogicalAnd isPacked={false} name="Photo of Tam" />

				<br></br>
				<Challenge1 isPacked={true} name="Space suit" />
				<Challenge1 isPacked={true} name="Helmet with a golden leaf" />
				<Challenge1 isPacked={false} name="Photo of Tam" />

				<br></br>
				<Challenge2 importance={9} name="Space suit" />
				<Challenge2 importance={0} name="Helmet with a golden leaf" />
				<Challenge2 importance={6} name="Photo of Tam" />

				<br />
				<DrinkList />
			</ul>
		</section>
	);
}

const people = [
	{
		id: 0,
		name: "Creola Katherine Johnson",
		profession: "mathematician",
		accomplishment: "spaceflight calculations",
		imageId: "MK3eW3A",
	},
	{
		id: 1,
		name: "Mario José Molina-Pasquel Henríquez",
		profession: "chemist",
		accomplishment: "discovery of Arctic ozone hole",
		imageId: "mynHUSa",
	},
	{
		id: 2,
		name: "Mohammad Abdus Salam",
		profession: "physicist",
		accomplishment: "electromagnetism theory",
		imageId: "bE7W1ji",
	},
	{
		id: 3,
		name: "Percy Lavon Julian",
		profession: "chemist",
		accomplishment:
			"pioneering cortisone drugs, steroids and birth control pills",
		imageId: "IOjWm71",
	},
	{
		id: 4,
		name: "Subrahmanyan Chandrasekhar",
		profession: "astrophysicist",
		accomplishment: "white dwarf star mass calculations",
		imageId: "lrWQx8l",
	},
];

function getImageUrl(person) {
	return "https://i.imgur.com/" + person.imageId + "s.jpg";
}

function ListSection({ title, people }) {
	const listItems = people.map((person) => (
		<li key={person.id}>
			<img src={getImageUrl(person)} alt={person.name} />
			<p>
				<b>{person.name}:</b>
				{" " + person.profession + " "}
				known for {person.accomplishment}
			</p>
		</li>
	));
	return (
		<>
			<h1>{title}</h1>
			<ul>{listItems}</ul>
		</>
	);
}

function List() {
	const chemists = people.filter((person) => person.profession === "chemist");
	const notChemists = people.filter(
		(person) => person.profession !== "chemist"
	);
	return (
		<article>
			<ListSection title="Chemists" people={chemists} />
			<ListSection title="Anyone else" people={notChemists} />
		</article>
	);
}

const poem = {
	lines: [
		"I write, erase, rewrite",
		"Erase again, and then",
		"A poppy blooms.",
	],
};

function Poem() {
	return (
		<article>
			{poem.lines.map((line, index) => (
				<>
					<p key={index}>{line}</p>
					{index !== poem.lines.length - 1 && <hr />}
				</>
			))}
		</article>
	);
}

export default function RenderingList() {
	return (
		// <List />
		<Poem />
	);
}

import nextId from "react-id-generator";
const keyGenerator = nextId();

function Card(item) {
	const {word, wordTranslate} = item.item;

	return (
		<li key={keyGenerator}>
			<div>
				<h3>Слово:</h3>
				<h3>{word}</h3>
			</div>
			<div>
				<h3>Перевод:</h3>
				<h3>{wordTranslate}</h3>
			</div>
		</li>
	)
}


export default Card;
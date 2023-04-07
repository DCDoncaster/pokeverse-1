import Card from "react-bootstrap/Card";
import useSWR from "../swr";

export default function PokemonCard({ name, url }) {
	const { data, error, isLoading } = useSWR(url);

	if (error) {
		return (
			<Card>
				<Card.Body>
					<Card.Title>Error</Card.Title>
					<Card.Text>
						There was a problem fetching the Pokémon data.
					</Card.Text>
				</Card.Body>
			</Card>
		);
	}

	if (isLoading) {
		return (
			<Card>
				<Card.Body>
					<Card.Title>Loading...</Card.Title>
					<Card.Text>Fetching the Pokémon data...</Card.Text>
				</Card.Body>
			</Card>
		);
	}

	return (
		<Card>
			<img
				className="d-block mx-auto"
				src={data.sprites.front_default}
				alt=""
				width="96"
				height="96"
			/>
			<Card.Body>
				<Card.Title className="text-capitalize">{name}</Card.Title>
				<Card.Text as="div">
					<p>Abilities:</p>
					<ul>
						{data.abilities.map(({ ability }) => (
							<li key={ability.name}>{ability.name}</li>
						))}
					</ul>
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

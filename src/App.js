import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navigation from "./components/Navigation";
import PokemonCard from "./components/PokemonCard";
import Row from "react-bootstrap/Row";
import useSWR from "./swr";

const LIMIT = 150;
const POKE_API = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function Wrapper({ children }) {
	return (
		<>
			<Navigation />
			<Container className="py-4">{children}</Container>
		</>
	);
}

export default function App() {
	const { data, error, isLoading } = useSWR(POKE_API);

	if (error) {
		return (
			<Wrapper>
				<Alert variant="danger">
					Error: There was a problem fetching the Pokémon data.
				</Alert>
			</Wrapper>
		);
	}

	if (isLoading) {
		return (
			<Wrapper>
				<Alert>Fetching the Pokémon data...</Alert>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<Row xs={1} sm={2} md={3} lg={4} className="g-4">
				{data.results.map((pokemon) => (
					<Col key={pokemon.name}>
						<PokemonCard {...pokemon} />
					</Col>
				))}
			</Row>
		</Wrapper>
	);
}

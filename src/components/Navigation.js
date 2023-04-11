import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import squirtle from "../squirtle.png";

export default function Navigation() {
	return (
		<Navbar sticky="top" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand>
					<Image src={squirtle} alt="" width="29" className="me-2" />
					Pokéverse
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="/">All Pokemon</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

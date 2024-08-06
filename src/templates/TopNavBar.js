import { Container, Nav, Navbar} from "react-bootstrap";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function TopNavBar() {
    return (
        <Navbar variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="/">Tinkergram</Navbar.Brand>
                        <Nav>
                            <Nav.Link href="/add">New Post</Nav.Link>
                            <Nav.Link onClick={(e) => signOut(auth)}>🚪</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
    );
}

export default TopNavBar;
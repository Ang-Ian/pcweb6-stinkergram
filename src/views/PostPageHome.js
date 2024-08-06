import { useEffect, useState } from "react";
import { Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function PostPageHome() {
  const [posts, setPosts] = useState([]);

   async function getAllPosts() {
    const query = await getDocs(collection(db, "posts"));
    console.log(query.docs[0].data());
    const posts = query.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setPosts(posts);
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  const ImagesRow = () => {
    return posts.map((post, index) => <ImageCard key={index} post={post} />);
  };

  return (
    <>
      <Navbar variant="light" bg="light">
          <Container>
              <Navbar.Brand href="/">Stinkergram</Navbar.Brand>
              <Nav>
                <Nav.Link href="/add">New Post</Nav.Link>
              </Nav>
          </Container>
      </Navbar>
      <Container>
        <Row>
          <ImagesRow />
        </Row>
      </Container>
    </>
  );
}

function ImageCard({ post }) {
  const { image, id } = post;
  return (
    <Link
      to={`post/${id}`}
      style={{
        width: "18rem",
        marginLeft: "1rem",
        marginTop: "2rem",
        textDecoration: "None"
      }}
    >
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} key={id} height="200px" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          {post.caption}
        </Card.Text>
      </Card.Body>
      </Card>
    </Link>
  );
}

/*return ( posts.map((post, index) =>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={post.image} key={index} height="200px" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          {post.caption}
        </Card.Text>
      </Card.Body>
      </Card>
    ));
*/
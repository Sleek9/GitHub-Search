import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import HomeCard from "../components/HomeCard";
import HomeForm from "../components/HomeForm";
import Loader from "../components/Loader";
import Message from "../components/Message";
import "./Home.scss";

const Home = () => {
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  let history = useHistory();

  const handleSubmit = (search) => {
    setSearch(search);
  };

  useEffect(() => {
    if (!search) return;

    const getData = async () => {
      setloading(true);
      try {
        const res = await fetch(`https://api.github.com/users/${search}`);

        if (!res.ok) {
          let error = {
            status: res.status,
            statusText: res.statusText,
          };
          throw error;
        }
        const json = await res.json();
        setResponse(json);
        setloading(false);
        history.push(`/users/${search}`);
      } catch (error) {
        setloading(false);
        seterror(error);
        setTimeout(() => {
          seterror(null);
        }, 5000);
      }
    };
    getData();
  }, [history, search]);
  return (
    <div className="bg-principal home">
      <Container>
        <Row>
          <Col>
            <h2 className="texto-principal text-center">Usuarios GitHub</h2>
            <HomeForm handleSubmit={handleSubmit} />
            {loading && <Loader />}
            {error && (
              <Message
                bgColor="#DE4352"
                msg={`${error.status || "Error 000"}: ${
                  error.statusText || "Error desconocido"
                }`}
              />
            )}
            {response && <HomeCard data={response} />}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

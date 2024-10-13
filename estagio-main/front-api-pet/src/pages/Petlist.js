import React, { useState, useEffect } from "react";
import FormListar from "../components/formlist";
import FormCadastrar from "../components/formcadastro";
import FormAtualizar from "../components/formatualize";
import FormExcluir from "../components/formexclui";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import NavbarFuncao from "@/components/Navbar";

function Petform() {
  const [pets, setPets] = useState([]);

  const listarPets = async () => {
    try {
      const response = await fetch("http://localhost:8080/pet/listar");
      if (!response.ok) throw new Error("Erro ao listar os pets");

      const data = await response.json();
      setPets(data.pet || []);
    } catch (error) {
      console.error("Erro ao listar os pets:", error);
    }
  };

  useEffect(() => {
    listarPets();
  }, []);

  return (
    <main
      style={{
        backgroundImage: `url('https://dindimpordindim.com.br/wp-content/uploads/2018/11/shutterstock_1126057424-1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <NavbarFuncao />
      <section
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", paddingTop: "10vh" }}
      >
        <Container className="py-4">
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Col md={10} lg={8} xl={7}>
              <Card
                className="p-4 bg-dark text-white"
                style={{
                  borderRadius: "1rem",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                <Card.Body className="p-4 text-center">
                  <h1 className="fw-bold mb-4">Frontend para API de Pets</h1>
                  <div className="grid gap-4">
                    <FormListar listarPets={listarPets} />
                    <FormCadastrar listarPets={listarPets} />
                    <FormAtualizar listarPets={listarPets} />
                    <FormExcluir listarPets={listarPets} />
                  </div>
                  <div id="resultado" className="mt-4 text-start">
                    <h2 className="text-2xl font-bold mb-4">Lista de Pets</h2>
                    {pets.length > 0 ? (
                      <ul>
                        {pets.map((pet) => (
                          <li key={pet.id}>
                            Nome: {pet.nome}, Raça: {pet.raca}, Histórico:{" "}
                            {pet.historicoDoPet}, Sexo: {pet.sexo}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>Nenhum pet encontrado.</p>
                    )}
                  </div>
                  <Button
                    onClick={() => setPets([])}
                    variant="secondary"
                    className="mt-4"
                  >
                    Limpar Lista
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Petform;

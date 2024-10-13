import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css";

function Login() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = emailValue !== "" && passwordValue !== "";
    setIsFormValid(isValid);
  }, [emailValue, passwordValue]);

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (p) => {
    setPasswordValue(p.target.value);
  };

  const validateEmail = (e) => {
    const emailValue = e.target.value;
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailValue)) {
      alert("Digite o email corretamente!");
    }
  };

  return (
    <main
      className="image-and-text"
      style={{
        backgroundColor: "#d3f1cb",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <section className="vh-100 d-flex flex-column flex-md-row justify-content-center align-items-center p-2">
        <Container className="py-2 h-100">
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Col md={8} lg={6} xl={5}>
              <h1 className="py-2 flex flex-col text-center justify-center text-6xl text-green-600 mb-0 font-bold">
                PET+
              </h1>
              <h2 className="text-xl flex flex-col text-center justify-center leading-relaxed font-bold">
                O PET Plus auxilia na administração e organização do seu petshop
                de maneira moderna e aprimorada.
              </h2>
              <br></br>
              <Card
                className="p-2 bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <Card.Body className="p-4 text-center">
                  <div className="mb-md-5 mt-md-4 pb-3">
                    <h2 className="fw-bold mb-1 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-3">
                      Por favor, preencha tudo corretamente!
                    </p>

                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="typeEmailX" className="form-label">
                          Email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          id="typeEmailX"
                          value={emailValue}
                          onChange={handleEmailChange}
                          onBlur={validateEmail} // Verifica o e-mail ao perder o foco
                          className="form-control form-control-lg"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label
                          htmlFor="typePasswordX"
                          className="form-label"
                        >
                          Senha
                        </Form.Label>
                        <Form.Control
                          type="password"
                          id="typePasswordX"
                          value={passwordValue}
                          onChange={handlePasswordChange}
                          className="form-control form-control-lg"
                        />
                      </Form.Group>
                      <Button
                        type="submit"
                        href="/paginapri"
                        variant="outline-success"
                        className="btn-lg px-3 me-2"
                        disabled={!isFormValid}
                      >
                        Entrar
                      </Button>
                      <Button
                        href="/index"
                        variant="outline-danger"
                        className="btn-lg px-3 me-2"
                      >
                        Cancelar
                      </Button>
                      <Button
                        href="/login"
                        variant="outline-warning"
                        className="btn-lg px-3"
                      >
                        Reset
                      </Button>
                    </Form>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Login;

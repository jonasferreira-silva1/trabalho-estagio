import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import NavbarFuncao from '@/components/Navbar';

function Cadastro() {
  const [nameValue, setNameValue] = useState('');
  const [sameValue, setSameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      /^[A-Za-z]+$/.test(nameValue) &&
      /^[A-Za-z]+$/.test(sameValue) &&
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailValue)&&
      passwordValue !== '';

    setIsFormValid(isValid);
  }, [nameValue, sameValue, emailValue, passwordValue]);

  const handleNameChange = (n) => {
    const nameValue = n.target.value;
    if (/^[A-Za-z]+$/.test(nameValue) || nameValue === '') {
      setNameValue(nameValue);
    } else {
      alert('Digite apenas Letras!');
    }
  };

  const handleSameChange = (s) => {
    const sameValue = s.target.value;
    if (/^[A-Za-z]+$/.test(sameValue) || sameValue === '') {
      setSameValue(sameValue);
    } else {
      alert('Digite apenas Letras!');
    }
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (p) => {
    setPasswordValue(p.target.value);
  };

  return (
    <main className="image-and-text"
    style={{
      backgroundImage: `url('https://dindimpordindim.com.br/wp-content/uploads/2018/11/shutterstock_1126057424-1.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: 'auto',
      width: '100%',
    }}>
      <NavbarFuncao />
      <section className="vh-100 flex" >
      <Container className="py-4 h-100">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col md={8} lg={6} xl={5}>
            <Card className=" p-2 flex bg-dark text-white" style={{ borderRadius: '1rem' }}>
                <Card.Body className="p-4 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Formulário de Cadastro</h2>
                    <p className="text-white-50 mb-5">Por favor, preencha tudo corretamente!</p>
                    <Form >
                      <Row className="mb-2">
                        <Col>
                          <Form.Label htmlFor="typeFName" className="form-label">
                            Nome:
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="typeFName"
                            value={nameValue}
                            onChange={handleNameChange}
                            className="form-control form-control-lg"
                          />
                        </Col>
                        <Col>
                          <Form.Label htmlFor="typeLName" className="form-label">
                            Sobrenome:
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="typeLName"
                            value={sameValue}
                            onChange={handleSameChange}
                            className="form-control form-control-lg"
                          />
                        </Col>
                      </Row>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="typeEmailX" className="form-label">
                          Email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          id="typeEmailX"
                          value={emailValue}
                          onChange={handleEmailChange}
                          className="form-control form-control-lg"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="typePasswordX" className="form-label">
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
                        variant="outline-light"
                        className="btn-lg px-3 me-2"
                        disabled={!isFormValid}
                      >
                        Cadastrar
                      </Button>
                      <Button href="/index" variant="outline-danger" className="btn-lg px-3 me-2">
                        Cancelar
                      </Button>
                      <Button href="/cadastro" variant="outline-warning" className="btn-lg px-3">
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

export default Cadastro;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarFuncao() {

    return (
        <>
    <Navbar className="fixed-top top-0 left-0 w-full shadow-sm bg-blue-500 p-2 flex">
      <Container className="flex justify-between items-center">
        <Navbar.Collapse className="flex justify-end" id="basic-navbar-nav">
          <Navbar.Brand href="/paginapri" className="text-xl font-semibold"> PET+ </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Nav className="flex space-x-4">
                <Nav.Link href="/cadastro" className="flex group rounded-lg border border-success px-1 transition-colors hover:bg-green-600">
                    <h2 className="mb-0 text-dark text-xl font-semibold">
                      cadastrar
                    </h2>
                    </Nav.Link>
                  <Nav.Link href="/login" className="flex group rounded-lg border border-success px-1 transition-colors hover:bg-green-600">
                    <h2 className="mb-0 text-dark text-xl font-semibold">
                      Login
                    </h2>
                  </Nav.Link>
                  <Nav.Link href="/relatorio" className="flex group rounded-lg border border-success px-1 transition-colors hover:bg-green-600">
                    <h2 className="mb-0 text-dark text-xl font-semibold">
                      Relatorios
                    </h2>
                  </Nav.Link>
              </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
      </>
    );
   }
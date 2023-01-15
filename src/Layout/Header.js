import {useState} from "react"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import ReusableDialog from "../reusbales/Dialog/Dialog";

function CollapsibleExample() {
  const [modal , setModal] = useState(false)
  const handleShowModal = ()=>{
    setModal(true)
  }
  const handleCloseModal = () =>{
    setModal(false)
  }
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="nav-bar-align"
      >
        <Container fluid>
          <Navbar.Brand href="#home">AquaKart</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>

              <Button onClick={handleShowModal} variant="outline-light">
                <FaUser size={25} />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ReusableDialog show={modal} handleClose={handleCloseModal} title="">
      
      </ReusableDialog>
    </>
  );
}

export default CollapsibleExample;

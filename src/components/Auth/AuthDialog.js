import { useState } from "react";
import ReusableDialog from "../../reusbales/Dialog/Dialog";
import { Tabs, Tab, Button } from "react-bootstrap";

const AuthDialog = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name , setName] = useState("")

  const handleSignup = (e) => {
    e.preventDefault()
    console.log(email,password)
  };
  const handleSignin = (e) => {
    e.preventDefault()
    console.log(email,password)
  };
  return (
    <ReusableDialog show={props.show} handleClose={props.handleCloseModal}>
      <Tabs
        defaultActiveKey="Login"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="Login" title="Login">
          <form onSubmit={handleSignin}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              
                placeholder="Email"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
               
                placeholder="Password"
              />
            </div>
            <div className="d-grid gap-2">
              <Button type="submit" size="lg">
                Login
              </Button>
            </div>
          </form>
        </Tab>
        <Tab eventKey="signup" title="Signup">
          <form onSubmit={handleSignup}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                value={name}
                onChange={(e)=>setName(e.target.value)}
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Password
              </label>
              <input
               value={name}
               onChange={(e)=>setName(e.target.value)}
                type="password"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Password"
              />
            </div>
            <div className="d-grid gap-2">
              <Button type="submit" size="lg">
                Login
              </Button>
            </div>
          </form>
        </Tab>
      </Tabs>
      <hr />
      <Button onClick={props.handleClose}>Skip Login</Button>
    </ReusableDialog>
  );
};
export default AuthDialog;

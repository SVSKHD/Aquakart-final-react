import ReusableDialog from "../../reusbales/Dialog/Dialog";
import { Tabs, Tab, Button } from "react-bootstrap";

const AuthDialog = (props) => {
  const handleSignup = () => {};
  const handleSignin = () => {};
  return (
    <ReusableDialog show={props.show} handleClose={props.handleCloseModal}>
      <Tabs
        defaultActiveKey="Login"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="Login" title="Login">
          <form onSubmit={handleSignup}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
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
        <Tab eventKey="signup" title="Signup"></Tab>
      </Tabs>
      <hr />
      <Button onClick={props.handleClose}>Skip Login</Button>
    </ReusableDialog>
  );
};
export default AuthDialog;

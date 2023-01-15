import ReusableDialog from "../../reusbales/Dialog/Dialog";
import { Tabs, Tab } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AuthDialog = (props) => {
  return (
    <ReusableDialog show={props.show} handleClose={props.handleCloseModal}>
      <Tabs
        defaultActiveKey="Login"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="Login" title="Login">
          <div class="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </Tab>
        <Tab eventKey="signup" title="Signup"></Tab>
      </Tabs>
    </ReusableDialog>
  );
};
export default AuthDialog;

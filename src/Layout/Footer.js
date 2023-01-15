import { FaInstagram } from "react-icons/fa";
const AquaFooter = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <div className="aqua-footer fixed-bottom">
        <div className="p-5">
          <h3 className="text-white">Hello</h3>
        </div>
        <div className="aqua-footer2 p-2 text-white">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <h6>© Aquakart {date}</h6>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <div className="align-right">
                  Follow us on <FaInstagram size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AquaFooter;

import AquaFooter from "./Footer";
import NavHead from "./Header";
const AquaCommonLayout = (props) => {
  return (
    <>
      <NavHead />
      {props.children}
      <AquaFooter />
    </>
  );
};
export default AquaCommonLayout;

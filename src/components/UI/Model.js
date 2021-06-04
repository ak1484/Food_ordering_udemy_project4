import classes from "./Model.module.css";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};
const ModelOverlay = (props) => {
  return (
    <div className={classes.model}>
      <div className={classes.context}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const Model = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        portalElement
      )}
    </>
  );
};
export default Model;

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Fooder's day</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A tablle full of delicious food! " />
      </div>
    </>
  );
};
export default Header;

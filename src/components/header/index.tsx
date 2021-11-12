import { NextComponentType } from "next";
import style from "./style.module.scss";

const Header: NextComponentType = () => {
  return (
    <div className={style.root}>
      <div className={style.basicInfoBar}>
        <div className={style.introContainer}>
          <h1>Kelly</h1>
        </div>
        <div className={style.imgContainer}>
          <img src="/images/avatar.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;

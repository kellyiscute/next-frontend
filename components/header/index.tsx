import { NextComponentType } from "next";
import Image from "next/dist/client/image";
import * as style from "./style.module.scss";

const Header: NextComponentType = () => {
  return (
    <div className={style.root}>
      <div className={style.basicInfoBar}>
        <h1></h1>
        <div className={style.imgContainer}>
          <Image
            src="/images/avatar.jpg"
            objectFit="cover"
            height="300px"
            width="300px"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

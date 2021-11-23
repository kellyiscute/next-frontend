import { NextComponentType } from "next";
import CategoryContainer from "./category-container";
import style from "./header.module.scss";
import { tags } from "./tags";

const Header: NextComponentType = () => {
  return (
    <div className={style.root}>
      <div className={style.basicInfoBar}>
        <div className={style.introContainer}>
          <h1>Kelly</h1>
          <h3 className={style.bio}>
            A Full-Stack developer that really do <strong>ANYTHING</strong>
          </h3>
          <p>I know you may not believe in this, but it's all real...</p>

          <div className={style.tagContainer}>
            {Object.entries(tags).map(([k, v], i) => (
              <div style={{ marginTop: "5px" }} key={`tag ${i}`}>
                {k}
                <hr style={{ margin: "3px 0" }} />
                <CategoryContainer data={v} />
              </div>
            ))}
          </div>
        </div>
        <div className={style.imgContainer}>
          <img src="/images/avatar.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;

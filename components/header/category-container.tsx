import { NextComponentType } from "next";
import style from "./header.module.scss";
import { ITag } from "./tags";

export interface ICategoryProps {
  data: ITag[];
}

const rootUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

const CategoryContainer: NextComponentType<never, never, ICategoryProps> = ({
  data,
}) => {
  return (
    <div className={style.catagoryContainer}>
      {data.map((v, i) => (
        <img
          src={`${rootUrl}${v.img}`}
          className={v.className ? style[v.className] : undefined}
          alt={v.alt}
          key={`tag ${i}`}
        />
      ))}
    </div>
  );
};

export default CategoryContainer;

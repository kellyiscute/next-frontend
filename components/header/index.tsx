import { NextComponentType } from "next";
import style from "./header.module.scss";

const tags = {
  languages: [
    "typescript/typescript-original.svg",
    "javascript/javascript-original.svg",
    "dart/dart-original.svg",
    "sass/sass-original.svg",
    "python/python-original.svg",
    "go/go-original.svg",
    "csharp/csharp-original.svg",
  ],
  frameworks: [
    "react/react-original-wordmark.svg",
    "vuejs/vuejs-original-wordmark.svg",
    "nextjs/nextjs-original.svg",
    "nuxtjs/nuxtjs-original.svg",
    "nestjs/nestjs-plain.svg",
    "express/express-original-wordmark.svg",
    "flutter/flutter-original.svg",
    "django/django-original.svg",
    "flask/flask-original.svg",
  ],
  "editors & tools": [
    "jetbrains/jetbrains-original.svg",
    "vscode/vscode-original.svg",
    "vim/vim-original.svg",
    "babel/babel-original.svg",
    "webpack/webpack-original.svg",
    "docker/docker-original-wordmark.svg",
    "redis/redis-original-wordmark.svg",
    "mysql/mysql-original.svg",
    "nginx/nginx-original.svg",
  ],
};

const rootUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

const Header: NextComponentType = () => {
  return (
    <div className={style.root}>
      <div className={style.basicInfoBar}>
        <div className={style.introContainer}>
          <h1>Kelly</h1>
          <h3 className={style.bio}>
            A Full-Stack developer that really do everything
          </h3>

          <div className={style.tagContainer}>
            {Object.entries(tags).map(([k, v], i) => (
              <div style={{ marginTop: "5px" }} key={`tag ${i}`}>
                {k}
                <hr style={{ margin: "3px 0" }} />
                <div className={style.catagoryContainer}>
                  {v.map((v, j) => (
                    <img src={`${rootUrl}${v}`} key={`tag ${i} - ${j}`} />
                  ))}
                </div>
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

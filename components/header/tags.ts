export interface ITag {
  img: string;
  className?: string;
  alt: string;
}

export interface ITags {
  [k: string]: ITag[];
}

export const tags: ITags = {
  languages: [
    { img: "typescript/typescript-original.svg", alt: "typescript" },
    { img: "javascript/javascript-original.svg", alt: "javascript" },
    { img: "dart/dart-original.svg", alt: "dart" },
    { img: "python/python-original.svg", alt: "python" },
    { img: "go/go-original.svg", alt: "go" },
    { img: "csharp/csharp-original.svg", alt: "csharp" },
    { img: "sass/sass-original.svg", alt: "sass" },
  ],
  frameworks: [
    { img: "react/react-original-wordmark.svg", alt: "react" },
    { img: "vuejs/vuejs-original.svg", alt: "vuejs" },
    { img: "nextjs/nextjs-original.svg", className: "inverted", alt: "nextjs" },
    { img: "nuxtjs/nuxtjs-original.svg", alt: "nuxtjs" },
    { img: "nestjs/nestjs-plain.svg", alt: "nestjs" },
    {
      img: "express/express-original.svg",
      className: "inverted",
      alt: "express",
    },
    { img: "flutter/flutter-original.svg", alt: "flutter" },
    { img: "django/django-original.svg", alt: "django" },
    { img: "flask/flask-original.svg", className: "inverted", alt: "flask" },
  ],
  "editors & tools": [
    { img: "jetbrains/jetbrains-original.svg", alt: "jetbrains" },
    { img: "vscode/vscode-original.svg", alt: "vscode" },
    { img: "vim/vim-original.svg", alt: "vim" },
    { img: "babel/babel-original.svg", alt: "babel" },
    { img: "webpack/webpack-original.svg", alt: "webpack" },
    { img: "docker/docker-original.svg", alt: "docker" },
    { img: "redis/redis-original-wordmark.svg", alt: "redis" },
    { img: "mysql/mysql-original.svg", alt: "mysql" },
    { img: "nginx/nginx-original.svg", alt: "nginx" },
  ],
};

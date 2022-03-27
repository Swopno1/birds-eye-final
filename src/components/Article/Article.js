import React from "react";
import "./Article.css";

const articles = [
  {
    id: 1,
    title: "How React Works",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.ossimuvoluptatum fugit laborum eius ut eligendi exercitationem soluta explicabo. Praesentium officia ut a fugit quod veniam porro debitis excepturi ipsam illo.",
  },
  {
    id: 2,
    title: "Props VS State",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.ossimuvoluptatum fugit laborum eius ut eligendi exercitationem soluta explicabo. Praesentium officia ut a fugit quod veniam porro debitis excepturi ipsam illo.",
  },
  {
    id: 3,
    title: "How useState works",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.ossimuvoluptatum fugit laborum eius ut eligendi exercitationem soluta explicabo. Praesentium officia ut a fugit quod veniam porro debitis excepturi ipsam illo.",
  },
];

const Article = () => {
  return (
    <div className="article">
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Article;

import React from "react";
import "./Article.css";

const articles = [
  {
    id: 1,
    title: "How React Works",
    content:
      "React creates a virtual DOM by rendering all the necessary components and data. It allows user to create custom components to re-use the same component in different places. And we can use PROPS to manage and communicate necessary data between the components. But the component data can flow only one directions, top to child. When any data in the dom need to change, react re-render only the target components. This makes the systems efficient.",
  },
  {
    id: 2,
    title: "Props VS State",
    content:
      "Props and State are two common and important terms for React app. Props are used to pass the data between the components. Where State are used to store the data of the component and can change using the specific callback function. Props is a read-only property, we can not change it but read it. But state hold the data for the component and can change using a callback function.",
  },
  {
    id: 3,
    title: "How useState works",
    content:
      "useState is a React Hook that allow to declare a variable and a callback function to change the variable. This hook has 3 part, variable declaration, callback function declaration and set default value for the variable inside the useState(). And the variable can be change inside the component by passing the new data with the callback function.",
  },
];

const Article = () => {
  return (
    <div className="articles">
      {articles.map((article) => (
        <div className="article" key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Article;

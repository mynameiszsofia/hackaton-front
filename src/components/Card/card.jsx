import React from "react";
import "./card.scss";

export function Card({ children, style, className }) {
  return (
    <div className={`${className ? className : ""} card`} style={style}>
      {children}
    </div>
  );
}

Card.Title = ({ children }) => <h2>{children}</h2>;
Card.Separator = () => <hr />;
Card.Body = ({ children, style }) => <div style={style}>{children}</div>;
Card.Paragraph = ({ children }) => <p>{children}</p>;
Card.Link = ({ children, props }) => <a href={props}>{children}</a>;
Card.Button = ({ children }) => <button variant="large">{children}</button>;

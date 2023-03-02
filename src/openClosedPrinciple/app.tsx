import React, { ReactElement, FC } from "react"

type TitleProps = {
    children: ReactElement; //children
    title: string;
}


export const Title: FC<TitleProps> = ({ children, title }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between"}}>
      <h1>{title}</h1>
      {children}
    </div>
  )
};

type TitleWithLinkProps = {
  title: string;
  href: string;
  buttonText: string;
}

export const TitleWithLink: FC<TitleWithLinkProps> = ({title, href, buttonText}) => {
  return (
      <Title title={title}>
        <div>
          <a href={href}>{buttonText}</a>
        </div>
      </Title>
  )
}; //acabamos de extender la funcionalidad de nuestro componente Title
//Cumplimos con este principio, el que este abierta a extenderse y que este
//cerrado a modificaciones

type TitleWithButton = {
  title: string;
  buttonText: string;
  onClick: () => void;
}

export const TitleWithButton: FC<TitleWithButton> = ({title, buttonText, onClick}) => {
  return (
    <Title title={title}>
      <button onClick={onClick}>{buttonText}</button>
    </Title>
  )
};


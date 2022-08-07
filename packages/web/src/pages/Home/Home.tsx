import { FC } from "react";
import { Form } from "../../components/Form/Form";
import { Header } from "../../components/Header/Header";
import "./Home.css";

export const HomePage: FC = () => {
  return (
    <>
      <Header />
      <div className="home-page">
        <Form />
      </div>
    </>
  );
};

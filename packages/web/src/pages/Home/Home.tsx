import { FC } from "react";
import { Form } from "../../components/Form/Form";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import "./Home.css";

export const HomePage: FC = () => {
  return (
    <PageWrapper>
      <div className="home-page">
        <p>Enter a URL in the box below to get started.</p>
        <Form />
      </div>
    </PageWrapper>
  );
};

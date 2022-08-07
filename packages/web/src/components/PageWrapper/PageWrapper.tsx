import { FC, ReactNode } from "react";
import { Header } from "../Header/Header";

export const PageWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <Header />
    <div className="page">{children}</div>
  </>
);

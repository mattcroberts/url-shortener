import { FC } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header: FC = () => (
  <div className="header">
    <Link to="/">
      <h1>URL Shortener</h1>
    </Link>
    <nav>
      <Link to="/manage/all">All URLS</Link>
    </nav>
  </div>
);

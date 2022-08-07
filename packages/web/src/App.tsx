import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { GRAPHQL_API } from "./constants";
import { AllUrls } from "./pages/AllUrls/AllUrls";
import { HomePage } from "./pages/Home/Home";
import { ManagePage } from "./pages/Manage/Manage";

function App() {
  return (
    <ApolloProvider
      client={
        new ApolloClient({
          link: new HttpLink({ uri: GRAPHQL_API }),
          cache: new InMemoryCache(),
        })
      }
    >
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="manage">
            <Route path=":id" element={<ManagePage />} />
            <Route path="all" element={<AllUrls />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

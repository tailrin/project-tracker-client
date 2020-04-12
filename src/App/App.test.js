import App from './App';
import React from "react";
import ApiContext from '../ApiContext';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <ApiContext.Provider>
        <App />
      </ApiContext.Provider>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

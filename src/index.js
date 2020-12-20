import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ListActicles from "./component/ListArticles";
import ArticleDetail from "./component/ArticleDetail ";
import rootReducer from "./redux";

const rootElement = document.getElementById("root");

const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => <ListActicles {...props} />} />
        <Route
          path="/detail-article"
          render={(props) => <ArticleDetail {...props} />}
        />
      </Switch>
    </BrowserRouter>
  </Provider>,
  rootElement
);

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchListArticles } from "../../action";
import Header from "../Header";
import Footer from "../Footer";
import Notification from "../Notification";
import FormFilter from "../FormFilter";
import Pagination from "../Pagination";
import "./style.scss";

const ListActicles = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListArticles());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initialArticleState = useSelector((state) => state.articles);
  const currentArticles = initialArticleState.listArticles.slice(
    initialArticleState.currentPage * initialArticleState.recordOnPage -
      initialArticleState.recordOnPage,
    initialArticleState.currentPage * initialArticleState.recordOnPage
  );

  return (
    <div className="container">
      <Header title="SCREEN LIST OF ARTICLES" />
      <Notification />
      <FormFilter />
      <TableArticle currentArticles={currentArticles} />
      <Pagination
        recordOnPage={initialArticleState.recordOnPage}
        listArticles={initialArticleState.listArticles.length}
      />
      <Footer />
    </div>
  );
};

const TableArticle = ({ currentArticles }) => {
  return (
    <div className="list-group-acticles">
      <div className="shadow p-3 mb-5 bg-white rounded">
        <ul className="list-unstyled">
          {currentArticles.map((article) => (
            <div key={article.id} className="shadow p-3 mb-5 bg-white rounded">
              <Link
                to={{
                  pathname: `detail-article/${article.id}`,
                  query: { id: article.id },
                }}
              >
                <li className="media">
                  <img
                    src={article.image}
                    className="mr-3"
                    alt={article.title}
                    width="64px"
                  ></img>
                  <div className="media-body">
                    <h5 className="mt-0 mb-1">{article.title}</h5>
                    {article.content}
                  </div>
                </li>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListActicles;

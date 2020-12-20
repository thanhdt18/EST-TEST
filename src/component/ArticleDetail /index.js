import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailArticle } from "../../action";
import Header from "../Header";
import Footer from "../Footer";
import Notification from "../Notification";

const ArticleDetail = ({ location }) => {
  const dispatch = useDispatch();
  const articleId = location.pathname.slice(16);

  useEffect(() => {
    dispatch(getDetailArticle(articleId));
    // eslint-disable-next-line
  }, []);

  const article = useSelector((state) => state.articles.article);

  return (
    <div className="container">
      <Header title="DETAIL ARTICLE" />
      <Notification />
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={article.image}
              className="img-fluid py-1 px-1"
              alt={article.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.content}</p>
              <p className="card-text">
                <small className="text-muted">
                  Create date : {article.createdAt}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArticleDetail;

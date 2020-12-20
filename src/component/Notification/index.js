import React from "react";
import { useSelector } from "react-redux";

export const NotificationError = ({ message }) => {
  return (
    <div class="alert alert-danger" role="alert">
      {message}
    </div>
  );
};

const Notification = () => {
  const model = useSelector((state) => state.articles.model);
  switch (model.type) {
    case "FETCH_LIST_ARTICLES_FAIL":
      return <NotificationError message="FETCH LIST FAIL" />;
    case "SEARCH_FAIL":
      return <NotificationError message="SEARCH ERROR" />;
    case "GET_DETAIL_ARTICLE_FAIL":
      return <NotificationError message="GET DETAIL ARTICLE FAIL" />;
    default:
      return null;
  }
};

export default Notification;

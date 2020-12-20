import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onChangePage } from "../../action";
const Pagination = ({ recordOnPage, listArticles }) => {
  const dispatch = useDispatch();
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(listArticles / recordOnPage + 1); i++) {
    pageNumbers.push(i);
  }
  const initialArticleState = useSelector((state) => state.articles);

  return (
    <div className="row">
      <div className="col-md-6"></div>
      <nav aria-label="Page navigation example" className="col-md-6">
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              href="/#"
              onClick={
                initialArticleState.currentPage > 1
                  ? () =>
                      dispatch(
                        onChangePage(initialArticleState.currentPage - 1)
                      )
                  : () =>
                      dispatch(onChangePage(initialArticleState.currentPage))
              }
            >
              Previous
            </a>
          </li>
          {pageNumbers.map((page, index) => (
            <li
              key={index}
              className={
                page === initialArticleState.currentPage
                  ? "page-item active"
                  : "page-item "
              }
            >
              <a
                className="page-link"
                onClick={() => dispatch(onChangePage(page))}
                href="/#"
              >
                {page}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a
              className="page-link"
              href="/#"
              onClick={
                initialArticleState.currentPage < pageNumbers.length
                  ? () =>
                      dispatch(
                        onChangePage(initialArticleState.currentPage + 1)
                      )
                  : () =>
                      dispatch(onChangePage(initialArticleState.currentPage))
              }
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

import axios from "axios";

export const fetchListArticles = () => {
  return (dispatch) => {
    axios
      .get("https://5f55a98f39221c00167fb11a.mockapi.io/blogs")
      .then((res) => dispatch(fetchListArticlesSuccess(res.data)))
      .catch(() => dispatch(fetchListArticlesFail()));
  };
};

export const fetchListArticlesSuccess = (payload) => {
  return {
    type: "FETCH_LIST_ARTICLES_SUCCESS",
    payload,
  };
};

export const fetchListArticlesFail = () => ({
  type: "FETCH_LIST_ARTICLES_FAIL",
});

export const searchForTitle = ({ search, sortBy, order }) => {
  return (dispatch) => {
    axios
      .get(
        `http://5f55a98f39221c00167fb11a.mockapi.io/blogs?search=${search}&sortBy=${sortBy}&order=${order}`
      )
      .then((res) => dispatch(searchForTitleSuccess(res.data)))
      .catch(() => dispatch(searchForTitleFail()));
  };
};

export const searchForTitleSuccess = (payload) => {
  return {
    type: "SEARCH_SUCCESS",
    payload,
  };
};

export const searchForTitleFail = () => {
  return {
    type: "SEARCH_FAIL",
  };
};

export const onChangeFieldSearch = (name, value) => ({
  type: "ON_CHANGE_SEARCH",
  name,
  value,
});

export const onChangePage = (pageNumber) => {
  return {
    type: "ON_CHANGE_PAGE",
    pageNumber,
  };
};

export const onChangeRecordOnPage = (recordOnPage) => {
  return {
    type: "ON_CHANGE_RECORD_ON_PAGE",
    recordOnPage,
  };
};

export const getDetailArticle = (id) => {
  return (dispatch) => {
    axios
      .get(`http://5f55a98f39221c00167fb11a.mockapi.io/blogs/${id}`)
      .then((res) => dispatch(getDetailArticleSuccess(res.data)))
      .catch(() => dispatch(getDetailArticleFail()));
  };
};

export const getDetailArticleSuccess = (data) => {
  return {
    type: "GET_DETAIL_ARTICLE_SUCCESS",
    data,
  };
};

export const getDetailArticleFail = () => {
  return {
    type: "GET_DETAIL_ARTICLE_FAIL",
  };
};

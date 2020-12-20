const initialState = {
  listArticles: [],
  model: {
    type: "",
  },
  currentPage: 1,
  recordOnPage: 5,
  article: {},
};

export const conditionSearch = {
  search: "",
  sortBy: "createAt",
  order: "desc",
};

const onChangeConditionSearch = (item, value) => {
  conditionSearch[item] = value;
};

const articles = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_LIST_ARTICLES_SUCCESS":
      localStorage.setItem("conditonSearch", JSON.stringify(conditionSearch));
      return {
        ...state,
        listArticles: action.payload,
        model: {
          type: "",
        },
      };
    case "FETCH_LIST_ARTICLES_FAIL":
      return {
        ...state,
        model: {
          type: "FETCH_LIST_ARTICLES_FAIL",
        },
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        currentPage: 1,
        listArticles: action.payload,
        model: {
          type: "",
        },
      };
    case "SEARCH_FAIL":
      return {
        ...state,
        model: {
          type: "SEARCH_FAIL",
        },
      };
    case "ON_CHANGE_SEARCH":
      onChangeConditionSearch(action.name, action.value);
      localStorage.setItem("conditonSearch", JSON.stringify(conditionSearch));
      return {
        ...state,
        currentPage: 1,
      };
    case "ON_CHANGE_PAGE":
      return {
        ...state,
        currentPage: action.pageNumber,
        model: {
          type: "",
        },
      };
    case "ON_CHANGE_RECORD_ON_PAGE":
      return {
        ...state,
        recordOnPage: action.recordOnPage,
        model: {
          type: "",
        },
        currentPage: 1,
      };
    case "GET_DETAIL_ARTICLE_SUCCESS":
      return {
        ...state,
        article: action.data,
        model: {
          type: "",
        },
      };
    case "GET_DETAIL_ARTICLE_FAIL":
      return {
        ...state,
        model: {
          type: "GET_DETAIL_ARTICLE_FAIL",
        },
      };
    default:
      return state;
  }
};

export default articles;

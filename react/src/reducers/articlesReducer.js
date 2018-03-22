export default (state = {}, action) => {
  switch(action.type) {
    case 'ARTICLES_FETCH_ERROR':
      return { error: action.hasErrored };
    case 'ARTICLES_FETCH_SUCCESS':
      return { data: action.articles };
    case 'ARTICLES_FETCH_LOADING':
      return { loading: action.isLoading };
    default:
      return state;
  }
};
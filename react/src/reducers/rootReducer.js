import shelf from './shelfReducer/shelfReducer';
import { imageFetchError, imagesLoading, images } from './imageReducer';
import { programsFetchError, programsFetchLoading, programs } from './programsReducer';
import articles from './articlesReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  shelf,
  images,
  imageFetchError,
  imagesLoading, 
  programs,
  programsFetchError,
  programsFetchLoading,
  articles,
});

export default rootReducer;
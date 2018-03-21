export const programsFetchError = (state = false, action) => {
  switch (action.type) {
    case 'PROGRAMS_FETCH_ERROR':
      return action.hasErrored;
    default:
      return state;
  }
}

export const programsFetchLoading = (state = false, action) => {
  switch(action.type) {
    case 'PROGRAMS_FETCH_LOADING':
      return action.isLoading;
    default: 
      return state;
  }
}

export const programs = (state = [], action) => {
  switch(action.type) {
    case 'PROGRAMS_FETCH_SUCCESS':
      return action.programs;
    default: 
      return state;
  }
}
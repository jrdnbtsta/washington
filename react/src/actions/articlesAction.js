const stubbedResponse = {
  programs: [
    {
      name: "Flu shot",
      description: "......",
      number_of_actions: 1,
      tags: ["stress", "diabetes", "test", "test", "test", "test", "test", ],
      channels: ["email"],
      engagement_level: "engage",
      rating: 2
    },
    {
      name: "APT Reminder",
      description: "this is a long description to see how it displays in a card.",
      number_of_actions: 3,
      tags: ["reminder", "diabetes", "diabeteslong word", "word"],
      channels: ["email", "sms"],
      engagement_level: "activate",
      rating: 2
    },
    {
      name: "Flu shot",
      description: "......",
      number_of_actions: 0,
      tags: ["stress", "diabetes"],
      channels: [],
      engagement_level: "engage",
      rating: 0
    },
    {
      name: "Flu shot",
      description: "......",
      number_of_actions: 1,
      tags: ["stress", "diabetes"],
      channels: ["sms"],
      engagement_level: "engage",
      rating: 0
    },
    {
      name: "Flu shot",
      description: "......",
      number_of_actions: 0,
      tags: ["stress", "diabetes"],
      channels: [],
      engagement_level: "engage",
      rating: 0
    },
  ]
}


export const articlesFetchError = (bool) => {
  return {
    type: 'ARTICLES_FETCH_ERROR',
    hasErrored: bool
  }
}

export const articlesFetchLoading = (bool) => {
  return {
    type: 'ARTICLES_FETCH_LOADING',
    isLoading: bool
  }
}

export const articlesFetchSuccess = (articles) => {
  return {
    type: 'ARTICLES_FETCH_SUCCESS',
    articles
  }
}

export const fetchArticles = (url) => {
  console.log('fetching..');
  return (dispatch) => {
    dispatch(articlesFetchLoading(true));
    return fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          dispatch(articlesFetchLoading(false));
          throw new Error(response.statusText);
          console.log('Error: Artiles URL incorrect');
        }
        dispatch(articlesFetchLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(data => dispatch(articlesFetchSuccess(data.articles)))
      .catch(() => dispatch(articlesFetchError(true)))
  }
}
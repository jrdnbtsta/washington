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


export const programsFetchError = (bool) => {
  return {
    type: 'PROGRAMS_FETCH_ERROR',
    hasErrored: bool
  }
}

export const programsFetchLoading = (bool) => {
  return {
    type: 'PROGRAMS_FETCH_LOADING',
    isLoading: bool
  }
}

export const programsFetchSuccess = (programs) => {
  return {
    type: 'PROGRAMS_FETCH_SUCCESS',
    programs
  }
}

export const fetchPrograms = (url) => {
  return (dispatch) => {
    dispatch(programsFetchLoading(true));
    //RETURN for stubbed data
    dispatch(programsFetchLoading(false));
    return dispatch(programsFetchSuccess(stubbedResponse.programs))

    //RETURN for real api
    /*
    return fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          dispatch(programsFetchLoading(false));
          throw new Error(response.statusText);
          console.log('Error: Programs URL incorrect');
        }
        dispatch(programsFetchLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((data) => dispatch(programsFetchSuccess(data.programs)))
      .catch(() => dispatch(programsFetchError(true)))

      */
  }
}

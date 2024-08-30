const URL = 'https://aviasales-test-api.kata.academy/';

export const GET_ID = 'GET_ID';
export const GET_TICKETS = 'GET_TICKETS';
export const STOP_SEARCH = 'STOP_SEARCH';

export const getTickets = (searchId) => async (dispatch) => {
  try {
    const response = await fetch(`${URL}tickets?searchId=${searchId}`);
    const json = await response.json();
    const { tickets, stop } = json;

    dispatch({
      type: GET_TICKETS,
      tickets,
    });
    if (!stop) {
      dispatch(getTickets(searchId));
    } else {
      dispatch({ type: STOP_SEARCH });
    }
  } catch (error) {
    if (error instanceof Error) {
      if (Number.isNaN(Number(error.name))) {
        throw new Error(`getTickets error: ${error.message}`);
      }
    }
    throw error;
  }
};

export const getSearchId = () => async (dispatch) => {
  try {
    const response = await fetch(`${URL}search`);
    const json = await response.json();
    dispatch({
      type: GET_ID,
      searchId: json.searchId,
    });
    dispatch(getTickets(json.searchId));
  } catch (error) {
    if (error instanceof Error) {
      if (Number.isNaN(Number(error.name))) {
        throw new Error(`getSearchId error: ${error.message}`);
      }
    }
    throw error;
  }
};

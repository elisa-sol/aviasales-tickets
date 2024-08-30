const URL = 'https://aviasales-test-api.kata.academy/';

export const GET_ID = 'GET_ID';
export const GET_TICKETS = 'GET_TICKETS';
export const STOP_SEARCH = 'STOP_SEARCH';
export const ERROR_LOADING = 'ERROR_LOADING';

export const getTickets = (searchId) => async (dispatch) => {
  // try {
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
  // } catch (error) {
  //   dispatch({
  //     type: ERROR_LOADING,
  //     error: error.message,
  //   });
  // }
};

export const getSearchId = () => async (dispatch) => {
  // try {
  const response = await fetch(`${URL}search`);
  const json = await response.json();
  dispatch({
    type: GET_ID,
    searchId: json.searchId,
  });
  dispatch(getTickets(json.searchId));
  // } catch (error) {
  //   dispatch({
  //     type: ERROR_LOADING,
  //     error: error.message,
  //   });
  // }
};

// const URL = 'https://aviasales-test-api.kata.academy/';
//
// export const GET_ID = 'GET_ID';
// export const GET_TICKETS = 'GET_TICKETS';
// export const STOP_SEARCH = 'STOP_SEARCH';
// export const ERROR_LOADING = 'ERROR_LOADING';
//
// export const getTickets = (searchId) => async (dispatch) => {
//   try {
//     console.log(searchId);
//     const response = await fetch(`${URL}tickets?searchId=${searchId}`);
//     if (!response.ok) {
//       throw Error(response.error);
//     }
//     const json = await response.json();
//     const { tickets, stop } = json;
//
//     // Ограничиваем количество билетов до 5
//     const limitedTickets = tickets.slice(0, 5);
//
//     dispatch({
//       type: GET_TICKETS,
//       tickets: limitedTickets,
//     });
//
//     if (!stop) {
//       dispatch(getTickets(searchId));
//     } else {
//       dispatch({ type: STOP_SEARCH });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
//
// export const getSearchId = () => async (dispatch) => {
//   const response = await fetch(`${URL}search`);
//   const json = await response.json();
//   dispatch({
//     type: GET_ID,
//     searchId: json.searchId,
//   });
//   dispatch(getTickets(json.searchId));
// };

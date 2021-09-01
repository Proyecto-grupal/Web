
export const setLogged = () => {
  return {
    type: 'SET_LOGGED',
    payload: true
  }
}

export const getBestLessons = (lessons) => {
  return {
    type: 'GET_BEST_LESSONS',
    payload: lessons
  }
}

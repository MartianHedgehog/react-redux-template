import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const RootReducer = (history) => {
  const router = connectRouter(history);
  return combineReducers({
    router,
    test: () => ({ test: 'test' }),
  });
};

export default RootReducer;

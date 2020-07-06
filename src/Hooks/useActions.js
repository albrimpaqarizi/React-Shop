import { useDispatch } from "react-redux";

const useActions = (action, propName) => {
  const dispatch = useDispatch();

  // const dispatchActions = useCallback(
  //   (e) => {
  //     e.preventDefault();
  //     dispatch(action(propName));
  //   },
  //   [dispatch, action, propName]
  // );

  const dispatchActions = (e) => {
    e.preventDefault();
    dispatch(action(propName));
  };

  return dispatchActions;
};

export { useActions };

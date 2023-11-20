import React from "react";
import TodoApp from "./pages/TodoApp";
import { Provider } from 'react-redux';
import rootReducer from "./redux/store";

const App: React.FC = () => {
  return <Provider store={rootReducer}>
    <TodoApp />
  </Provider>;
};

export default App;

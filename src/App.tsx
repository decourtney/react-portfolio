import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./reducers/store";
import { PersistGate } from "redux-persist/integration/react";
import AnimatedRoutes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AnimatedRoutes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;

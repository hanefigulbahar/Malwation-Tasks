import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { persistor, store } from "@libs/redux/store";
import Router from "@router";
import { PersistGate } from "redux-persist/integration/react";
import { client } from "@libs/graphql";

ReactDOM.createRoot(document.getElementById("root")!).render(
  /* <React.StrictMode> */
  <ApolloProvider client={client}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  </ApolloProvider>
  /* </React.StrictMode> */
);

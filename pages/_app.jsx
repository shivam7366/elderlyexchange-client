import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../src/components/Layouts/Layout";
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";
import reducers from "../src/redux/reducer/index";
import thunk from "redux-thunk";

// import store from "../src/redux/store";

// import { AppProps } from "next/app";

export default function App({ Component, pageProps }) {
  const store = createStore(reducers, compose(applyMiddleware(thunk)));
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

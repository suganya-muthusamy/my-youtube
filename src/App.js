import Header from "./components/Header";
import Body from "./components/Body";
import store from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;

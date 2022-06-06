import "./App.css";
import Account from "./components/Account/Account";
import Header from "./components/Header/Header";
import History from "./components/History/History";
import Transaction from "./components/Transaction/Transaction";

function App() {
  return (
    <div className="app">
      <Header />
      <Account />
      <History />
      <Transaction />
    </div>
  );
}

export default App;

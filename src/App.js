import "./App.css";

import { Calendar } from "./components/Calendar/Calendar";

function App() {
  const onMonthChange = (date) => {
    console.log(date.format());
  };
  return (
    <div className="App">
      <Calendar onMonthChange={onMonthChange} />
    </div>
  );
}

export default App;

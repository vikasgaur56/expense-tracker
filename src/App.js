import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

function App() {

  const expense = [
    { id: "e1", title: "Bike", amount: 395.67, date: new Date(2020, 8, 28) },
    { id: "e2", title: "New TV", amount: 795.97, date: new Date(2021, 2, 18) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 295.67,
      date: new Date(2021, 5, 28),
    },
    {
      id: "e4",
      title: "New Desk ",
      amount: 555.67,
      date: new Date(2021, 7, 10),
    },
  ];
  return (
    <div>
      
<NewExpense/>
      <Expenses item={expense} />
    </div>
  );
}

export default App;

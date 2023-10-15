import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const defaultExpense = [
    { id: "e1", title: "Bike", amount: 395.67, date: new Date(2025, 8, 28) },
    { id: "e2", title: "New TV", amount: 795.97, date: new Date(2022, 2, 18) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 295.67,
      date: new Date(2023, 5, 28),
    },
    {
      id: "e4",
      title: "New Desk ",
      amount: 555.67,
      date: new Date(2024, 7, 10),
    },
  ];
  const [expenses, setExpenses] = useState(defaultExpense);
  const [filteredExpenses, setFilteredExpenses] = useState(defaultExpense);
  let currentSelectedYear = "2022";

  const onExpenseHandler = (expense) => {
    setExpenses((previousExpense) => {
      return [expense, ...previousExpense];
    });

    const filteredData = expenses.filter(
      (expense) => new Date(expense.date).getFullYear() === +currentSelectedYear
    );
    setFilteredExpenses(filteredData);
  };

  const onFilterChange = (selectedYear) => {
    currentSelectedYear = selectedYear;
    const filteredData = expenses.filter(
      (expense) => new Date(expense.date).getFullYear() === +selectedYear
    );
    setFilteredExpenses(filteredData);
  };

  return (
    <div>
      <NewExpense onAddExpense={onExpenseHandler} />
      <Expenses
        expenses={filteredExpenses}
        handleFilterChange={onFilterChange}
      />
    </div>
  );
}

export default App;

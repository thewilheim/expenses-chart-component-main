import data from "../../data.json";
import { ExpenseBar } from "./components/ExpenseBar";

interface IExpenses {
  day: string;
  amount: number;
}

function App() {
  const expenses = data;

  const totalExpenses = expenses
    .map((item) => item.amount)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-row justify-between items-center bg-soft-red p-5 rounded-xl text-white shadow-md mb-6">
        <div>
          <p className="text-sm pb-2 text-white/70">My balance</p>
          <h1 className="text-3xl">$2000</h1>
        </div>
        <div className="flex flex-row">
          <div className="mr-7 flex justify-center items-center bg-white/0 border-2 z-10 border-white rounded-full w-10 h-10"></div>
          <div className="ml-7 bg-black/70 rounded-full w-10 h-10 absolute">
            {" "}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-evenly">
        <h2 className="text-2xl font-bold tracking-wider text-black/70">
          Spending - Last 7 Days
        </h2>
        <div className="flex flex-row  justify-evenly h-72 w-80 xl:w-96 xl:h-60">
          {expenses.map((item: IExpenses) => {
            return (
              <ExpenseBar
                amount={item.amount}
                day={item.day}
              />
            );
          })}
        </div>
        <span className="w-full h-[2px] bg-black/10 my-5 rounded"></span>
        <div className="flex flex-row justify-between">
          <div>
            <p className="text-black/50 text-base pb-2">Total this month</p>
            <h1 className="text-3xl font-bold">${totalExpenses.toFixed(2)}</h1>
          </div>
          <div className="self-end">
            <p className="text-right font-bold">+2.4%</p>
            <p className="text-black/50 text-sm">from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

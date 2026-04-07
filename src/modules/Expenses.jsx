import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuid } from "uuid";

export default function Expenses() {
  const { state, updateState } = useContext(AppContext);
  const [amount, setAmount] = useState("");

  const add = async () => {
    const newExp = { id: uuid(), amount: Number(amount) };
    const updated = { ...state, expenses: [...state.expenses, newExp] };
    await updateState(updated);
    setAmount("");
  };

  return (
    <div>
      <input value={amount} onChange={e => setAmount(e.target.value)} />
      <button onClick={add}>Add</button>
      {state.expenses.map(e => <div key={e.id}>{e.amount}</div>)}
    </div>
  );
}

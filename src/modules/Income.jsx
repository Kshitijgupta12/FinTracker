import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuid } from "uuid";

export default function Income() {
  const { state, updateState } = useContext(AppContext);
  const [amount, setAmount] = useState("");

  const add = async () => {
    const newItem = { id: uuid(), amount: Number(amount) };
    const updated = { ...state, income: [...state.income, newItem] };
    await updateState(updated);
    setAmount("");
  };

  return (
    <div>
      <input value={amount} onChange={e => setAmount(e.target.value)} />
      <button onClick={add}>Add</button>
      {state.income.map(i => <div key={i.id}>{i.amount}</div>)}
    </div>
  );
}

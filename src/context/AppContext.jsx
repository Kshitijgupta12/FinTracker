import { createContext, useEffect, useState } from "react";
import { openDB } from "idb";

export const AppContext = createContext();

const dbPromise = openDB("fintrack", 1, {
  upgrade(db) {
    db.createObjectStore("store");
  },
});

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({ expenses: [], income: [] });

  useEffect(() => {
    (async () => {
      const db = await dbPromise;
      const data = await db.get("store", "data");
      if (data) setState(data);
    })();
  }, []);

  const updateState = async (newState) => {
    const db = await dbPromise;
    await db.put("store", newState, "data");
    setState(newState);
  };

  return (
    <AppContext.Provider value={{ state, updateState }}>
      {children}
    </AppContext.Provider>
  );
};

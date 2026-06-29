import { useState, useEffect } from "react"
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const useFetch = (api) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(api);
        setData(res.data.products);
      } catch (error) {
        console.error(error.message);
        setError(error.massege);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

const initialState = {
  todos: [],
  editTask: null,
  loading: false,
  error: null
};

const TodoReducer = createSlice({
  name: "vite-project",
  initialState,
  reducers: {
    createTask: (state, action) => {
      state.todos.push({
        id: uuidv4(),
        task: action.payload,
        isDone: false,
      });
    },
    updateTask: (state, action) => {
      const task = state.todos.find((t) => t.id === state.editTask.id);
      if (task) {
        task.task = action.payload;
      }
      state.editTask = null;
    },
  },
});

export const {
  createTask,
  updateTask,
} = TodoReducer.actions;

export default TodoReducer.reducer;

export const trackerMap2 = [
  {
    h3: "Transport",
    p1: "Transport",
    h4: "25,000 so'm",
    p2: "2026-05-14",
  },
  {
    h3: "Kafe",
    p1: "Ovqat",
    h4: "-60,000 so'm",
    p2: "2026-05-13",
  },
  {
    h3: "Kommunal",
    p1: "To'lovlar",
    h4: "350,000 so'm",
    p2: "2026-05-12",
  },
];

export const trackerMap7 = [
  {
    p1: "O'rtacha kunlik xarajat",
    h2: "74,000 so'm",
    p2: "Oxirgi 30 kun",
  },
  {
    p1: "Eng ko'p xarajat",
    h2: "Ovqat",
    p2: "850,000 so'm",
  },
  {
    p1: "Tejash nisbati",
    h2: "55%",
    p2: "Daromaddan",
  },
  {
    p1: "Jami tranzaksiyalar",
    h2: "127",
    p2: "Ushbu oy",
  },
];
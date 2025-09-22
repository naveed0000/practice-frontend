"use client";

import React, { useEffect, useState } from "react";
import { Todo } from "../../types/action";
import { fetchTodos, updateTodo } from "@/app/actions/Todo";
import { Box, Typography } from "@mui/material";
import TodoCard from "./TodoCard";

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const loadTodos = async () => {
      const res = await fetchTodos();
      if (res.success && res.data) {
        setTodos(res.data);
      }
    };
    loadTodos();
  }, []);

  const handleToggle = async (id: string, isDone: boolean) => {
    const res = await updateTodo(id, { isDone });
    if (res.success && res.data) {
      setTodos((prev) =>
        prev.map((t) => (t._id === id ? { ...t, isDone: res.data!.isDone } : t))
      );
    }
  };
  return (
    <Box p={3}>
      <Typography variant="h4" mb={2}>
        My Todos
      </Typography>
      {todos.map((todo) => (
        <TodoCard key={todo._id} todo={todo} onToggle={handleToggle} />
      ))}
    </Box>
  );
}

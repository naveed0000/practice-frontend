"use client";

import React from "react";
import { Card, CardContent, Typography, Checkbox, Box } from "@mui/material";
import { Todo } from "../../types/action";

type TodoCardProps = {
  todo: Todo;
  onToggle?: (id: string, isDone: boolean) => void;
};

const TodoCard: React.FC<TodoCardProps> = ({ todo, onToggle }) => {
  const handleChange = () => {
    if (onToggle) onToggle(todo._id, !todo.isDone);
  };

  return (
    <Card sx={{ mb: 2, borderRadius: 2, boxShadow: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center">
          <Checkbox checked={todo.isDone} onChange={handleChange} />
          <Box ml={1}>
            <Typography
              variant="h6"
              sx={{ textDecoration: todo.isDone ? "line-through" : "none" }}
            >
              {todo.title}
            </Typography>
            {todo.description && (
              <Typography variant="body2" color="text.secondary">
                {todo.description}
              </Typography>
            )}
          </Box>
        </Box>
        <Typography
          variant="caption"
          color="text.secondary"
          display="block"
          mt={1}
        >
          Created: {new Date(todo.createdAt).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TodoCard;

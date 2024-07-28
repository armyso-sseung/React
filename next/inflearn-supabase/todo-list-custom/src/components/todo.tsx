import { Button, Checkbox, Spin } from "antd";
import { useState } from "react";
import {
  CheckOutlined,
  DeleteOutlined,
  EditOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { deleteTodo, updateTodo } from "../actions/todo-actions";
import { queryClient } from "../config/ReactQueryClientProvider";

const Todo = ({ todo }) => {
  const [title, setTitle] = useState(todo.title);
  const [completed, setCompleted] = useState<boolean>(todo.completed);
  const [isEditing, setIsEditing] = useState(false);

  const updateTodoMutation = useMutation({
    mutationFn: () =>
      updateTodo({
        id: todo.id,
        completed,
        title,
      }),
    onSuccess: () => {
      setIsEditing(false);
      queryClient.invalidateQueries({
        queryKey: ["todo"],
      });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: () => deleteTodo(todo.id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todo"],
      });
    },
  });

  return (
    <div className="w-full flex items-center py-1.5 gap-1">
      <Checkbox
        value={completed}
        checked={completed}
        onChange={async (e) => {
          await setCompleted(e.target.checked);
          await updateTodoMutation.mutate();
        }}
      />

      {isEditing ? (
        <input
          type="text"
          className="border-b-black border-b flex-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <p className={`flex-1 ${completed && "line-through"}`}>{title}</p>
      )}

      {isEditing ? (
        <Button
          type="primary"
          onClick={async () => await updateTodoMutation.mutate()}
        >
          {updateTodoMutation.isPending ? (
            <Spin indicator={<LoadingOutlined spin />} />
          ) : (
            <CheckOutlined />
          )}
        </Button>
      ) : (
        <Button onClick={() => setIsEditing(true)}>
          <EditOutlined />
        </Button>
      )}

      <Button type="primary" danger onClick={() => deleteTodoMutation.mutate()}>
        {deleteTodoMutation.isPending ? (
          <Spin indicator={<LoadingOutlined spin />} />
        ) : (
          <DeleteOutlined />
        )}
      </Button>
    </div>
  );
};

export default Todo;

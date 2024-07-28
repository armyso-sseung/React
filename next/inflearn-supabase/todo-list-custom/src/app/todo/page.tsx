"use client";

import Title from "antd/es/typography/Title";
import Search from "antd/es/input/Search";
import { useState } from "react";
import { Button, Spin } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import Todo from "../../components/todo";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createTodo, getTodoList } from "../../actions/todo-actions";

const TodoPage = () => {
  const [search, setSearch] = useState<string>("");

  const todoQuery = useQuery({
    queryKey: ["todo"],
    queryFn: () => getTodoList({ search }),
  });

  const createTodoMutation = useMutation({
    mutationFn: () =>
      createTodo({
        title: "New Todo",
        completed: false,
      }),
    onSuccess: () => todoQuery.refetch(),
  });

  const handleSearch = () => {
    todoQuery.refetch();
  };

  return (
    <div className="w-2/3 mx-auto py-10 flex flex-col items-center gap-3">
      <Title level={4}>TODO LIST</Title>

      <Search
        size="large"
        placeholder="Search TODO"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onSearch={handleSearch}
      />

      <div className="w-full my-2">
        {todoQuery.isPending && <Spin indicator={<LoadingOutlined spin />} />}
        {!todoQuery.isPending &&
          todoQuery.data &&
          todoQuery.data.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </div>

      <Button
        className="py-5 bg-black text-white"
        size="middle"
        onClick={() => createTodoMutation.mutate()}
        loading={createTodoMutation.isPending}
      >
        <PlusOutlined />
        ADD TODO
      </Button>
    </div>
  );
};

export default TodoPage;

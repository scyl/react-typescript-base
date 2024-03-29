import { render } from "@testing-library/react";
import React from "react";
import TodoList from "./app";

describe("todoList", () => {
  it("render the title", () => {
    const { getByText } = render(<TodoList />);

    expect(getByText("Todo List")).toBeInTheDocument();
  });
});

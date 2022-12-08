import React, { useState } from "react";
import Todos from "../w3School/Todos_memo";

export default function Contact() {
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);
  return (
    <div>
      <Todos todos={todos} />
    </div>
  );
}

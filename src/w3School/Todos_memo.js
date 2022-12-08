import { memo } from "react";

function Todos({ todos }) {
  return (
    <div>
      <h2>Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </div>
  );
}

export default memo(Todos);

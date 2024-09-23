import React, { useState } from "react";

const FormItem = ({ onAddItem }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(item);
    setItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Adicionar um item"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default FormItem;
import React from "react";

const InputField = ({ text, handleInput, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Comment"
        onChange={(e) => handleInput(e.target.value)}
        value={text}
      />
    </form>
  );
};

export default InputField;

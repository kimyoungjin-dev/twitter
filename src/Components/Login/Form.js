import React from "react";

const Form = ({ onSubmit, onChange, error }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        type="email"
        onChange={onChange}
        placeholder="Email"
        required
        maxLength="20"
      />
      <input
        name="password"
        type="password"
        onChange={onChange}
        placeholder="Password"
        required
        maxLength="20"
      />
      {error}
      <input type="submit" value={newAccount ? "계정만들기" : "로그인"} />
    </form>
  );
};

export default Form;

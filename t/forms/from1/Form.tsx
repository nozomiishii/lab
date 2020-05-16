import React, { useState } from "react";
import styled from "styled-components";
import { login } from "./Login";

const StyledForm = styled.form`
  margin: 0 auto;
  width: 60%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 5vw;
  > * {
    margin: 5px;
    padding: 10px;
  }
`;

export const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    setIsLoading(true);
    try {
      await login({ username, password });
      setIsLoggedIn(true);
      setUsername("");
      setPassword("");
      setError("");
    } catch (error) {
      setError("Incorrect username or password");
    }

    setIsLoading(false);
  };
  return (
    <>
      {isLoggedIn ? (
        <>
          <h1>hello {username}</h1>{" "}
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </>
      ) : (
        <StyledForm onSubmit={onSubmit}>
          {error && <p>{error}</p>}
          <p>Please Login</p>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
          <input
            type="password"
            placeholder="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in ..." : "Log in"}
          </button>
        </StyledForm>
      )}
    </>
  );
};

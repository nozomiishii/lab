import React, { useState, useReducer } from "react";
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

function loginReducer(state: any, action: any) {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case "login": {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case "success": {
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    case "error": {
      return {
        ...state,
        error: "Incorrect username or password",
        isLoading: false,
        username: "",
        password: "",
      };
    }
    case "logout": {
      return {
        ...state,
        isLoggedIn: false,
        username: "",
        password: "",
      };
    }
    default:
      break;
  }
  return state;
}

const initialState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};

export const Form = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const { username, password, isLoading, error, isLoggedIn } = state;

  const onSubmit = async (e: any) => {
    e.preventDefault();

    dispatch({ type: "login" });
    try {
      await login({ username, password });
      dispatch({ type: "success" });
    } catch (error) {
      dispatch({ type: "error" });
    }
  };
  return (
    <>
      {isLoggedIn ? (
        <>
          <h1>hello {username}</h1>{" "}
          <button onClick={() => dispatch({ type: "logout" })}>Logout</button>
        </>
      ) : (
        <StyledForm onSubmit={onSubmit}>
          {error && <p>{error}</p>}
          <p>Please Login</p>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) =>
              dispatch({
                type: "field",
                field: "username",
                value: e.currentTarget.value,
              })
            }
          />
          <input
            type="password"
            placeholder="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) =>
              dispatch({
                type: "field",
                field: "password",
                value: e.currentTarget.value,
              })
            }
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in ..." : "Log in"}
          </button>
        </StyledForm>
      )}
    </>
  );
};

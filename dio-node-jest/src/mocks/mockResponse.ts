import { Response } from "express";

export type MockResponse<T> = Response & {
  state: {
    status?: number;
    json?: T | unknown;
  }
}

export function makeMockResponse<T>() {
  const response = { state: {} } as MockResponse<T>;

  response.status = (status: number) => {
    response.state.status = status;

    return response;
  }

  response.json = (json: T) => {
    response.state.json = json;

    return response;
  }

  return response;
}
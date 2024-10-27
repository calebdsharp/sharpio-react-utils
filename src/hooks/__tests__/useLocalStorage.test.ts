import { renderHook, act } from "@testing-library/react";

import { useLocalStorage } from "../useLocalStorage";

describe("useLocalStorage", () => {
  it("should initialize with the value in local storage", () => {
    window.localStorage.setItem("key", JSON.stringify("stored value"));
    const { result } = renderHook(() =>
      useLocalStorage("key", "default value")
    );
    expect(result.current[0]).toBe("stored value");
  });

  it("should update the value in local storage", () => {
    const { result } = renderHook(() =>
      useLocalStorage("key", "default value")
    );
    act(() => {
      result.current[1]("new value");
    });
    expect(result.current[0]).toBe("new value");
    expect(window.localStorage.getItem("key")).toBe(
      JSON.stringify("new value")
    );
  });
});

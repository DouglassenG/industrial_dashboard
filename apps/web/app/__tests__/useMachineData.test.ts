import { renderHook, act } from "@testing-library/react";
import { useMachineData } from "../hooks/useMachineData";

describe("useMachineData", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("inicia com data null e conectado true", () => {
    const { result } = renderHook(() => useMachineData());
    expect(result.current.data).toBeNull();
    expect(result.current.connected).toBe(true);
  });

  it("atualiza os dados após 3 segundos", () => {
    const { result } = renderHook(() => useMachineData());
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(result.current.data).not.toBeNull();
    expect(result.current.data?.id).toBe("mixer-01");
    expect(result.current.data?.state).toBe("RUNNING");
  });
});

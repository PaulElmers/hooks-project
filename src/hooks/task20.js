import { useState } from "react";

export function useArray(initialArray = []) {
  const [array, setArray] = useState(initialArray);

  const push = (element) => setArray((prev) => [...prev, element]);
  const remove = (index) =>
    setArray((prev) => prev.filter((_, i) => i !== index));
  const clear = () => setArray([]);

  return { array, push, remove, clear };
}

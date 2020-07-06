import { useState } from "react";

function useToggle(toggledValue = false) {
  const [isTrue, setIsTrue] = useState(toggledValue);

  const toggleValue = () => {
    setIsTrue(!isTrue);
  };

  return [isTrue, toggleValue];
}

export { useToggle };

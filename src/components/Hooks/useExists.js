import { useState, useEffect } from "react";

const useExists = (pm, id) => {
  const [isExistis, setisExistis] = useState();

  useEffect(() => {
    let isInCart = pm.some((el) => {
      return el.id === id;
    });
    setisExistis(isInCart);
  }, [pm, id]);

  return [isExistis];
};

export { useExists };

import { useState, useEffect } from "react";

const useExists = (list, id) => {
  const [isExistis, setisExistis] = useState(false);

  useEffect(() => {
    let isInList = list.some((el) => {
      return el.id.toString() === id.toString();
    });
    setisExistis(isInList);
  }, [list, id]);

  return [isExistis];
};

export { useExists };

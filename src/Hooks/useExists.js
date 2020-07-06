import { useState, useEffect } from "react";

const useExists = (list, id) => {
  const [isExistis, setisExistis] = useState(false);

  useEffect(() => {
    let isInList = list.some((el) => {
      return el.id === id;
    });
    setisExistis(isInList);
  }, [list, id]);

  // console.log("exist ", list);

  return [isExistis];
};

export { useExists };

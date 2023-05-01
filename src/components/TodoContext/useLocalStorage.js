import React from "react";

function useLocalStorage(localStorageID, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(localStorageID);
        let parsedItem;

        if (!localStorageItems) {
          localStorage.setItem(localStorageID, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItems);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  }, []);
  // Function to save todo's data to local storage
  const saveLocalStorage = (newItem) => {
    try {
      localStorage.setItem(localStorageID, JSON.stringify(newItem));
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveLocalStorage, loading, error };
}

export { useLocalStorage };

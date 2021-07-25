import React, {useCallback, useState} from 'react';

const InitialContext = React.createContext();

export default InitialContext;

export const AuthProvider = ({children}) => {
  const [imgDetailsObj, setImgDetailsObj] = useState({});
  const [searchData, setSearchData] = useState(null);

  const handleGetImges = useCallback(payload => {
    setImgDetailsObj(payload);
  }, []);

  const handleSaveData = useCallback(payload => {
    setSearchData(payload);
  }, []);

  const state = {
    imgDetailsObj,
    searchData,
    handleGetImges,
    handleSaveData,
  };

  return (
    <InitialContext.Provider value={state}>{children}</InitialContext.Provider>
  );
};

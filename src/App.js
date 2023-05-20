import React from "react";
import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import { Footer } from "./components/footer";
import { SearchPage } from "./pages/SearchPage";
import { LoginPage } from "./pages/Loginpage";
import { HomePage } from "./pages/Homepage";
import { ResultsPage } from "./pages/resultsPage";
import {useLocalStorage} from "./hooks/useLocalStorage";
import {useContext, useState} from "react";
import MyContext from "./components/myContext";
import {RequireAuth} from "./hoc/RequireAuth";



function App() {

  const value = useContext(MyContext)

  const [loading, setLoading] = useState(true)

  const [requestHistogram, setRequestHistogram] = useState({})

  const [token, setToken] = useLocalStorage('', "token");
  const [expire, setExpire] = useLocalStorage('', "expire");
  const [companyLimit, setCompanyLimit] = useLocalStorage('', 'limit');
  const [usedCompanyCount, setUsedCompanyCount] = useLocalStorage('', 'usedLimit');
  const [searchFormData, setSearchFormData] = useState({})
  const [items, setItems] = useState([]);
  const [histogramData, setHistogramData] = useState([]);

  const handleHistogramData = (data) => {setHistogramData(data)};
  const handleObjectData = (data) => {setItems(data)};
  const checkLoading = () => {setLoading(false)};


  const valueContext = {
    token, setToken,
    expire, setExpire,
    companyLimit, setCompanyLimit,
    usedCompanyCount, setUsedCompanyCount,
    requestHistogram, setRequestHistogram,
    histogramData, handleHistogramData,
    loading, checkLoading,
    items, handleObjectData,
    searchFormData, setSearchFormData,
  }


  return (
    <MyContext.Provider value={valueContext}>
      <>
        <Routes>
          <Route path = '/' element = {<HomePage />}/>
          <Route path ='/login' element = {<LoginPage />}/>
          <Route path='/search' element={
            <RequireAuth>
              <SearchPage />
            </RequireAuth>
            }/>
          <Route path='/results' element={
            <RequireAuth>
              <ResultsPage />
            </RequireAuth>
            }/>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
        <Footer />
      </>

    </MyContext.Provider>



  );
}

export default App;

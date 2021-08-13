import '../styles/App.css';
import React from 'react'
import { useCookies } from 'react-cookie';
import Top from './Top'
import Crud from './Crud'
import { CookiesProvider } from 'react-cookie';
import {useState} from 'react'
import SearchCmp from './SearchCmp'
import Table from './Table'
function App() {
  const [cookies,setCookies]= useCookies()
  const [usersData,setUsersData] = useState([{}])
  const [isMunipilate,setIsMunipilate]=useState(true); 
  const [isSearch,setIsSearch]=useState(false);
  
  return (
    <div className="App">
        <Top setIsMunipilate={setIsMunipilate} setIsSearch={setIsSearch}/>
        {
          isMunipilate ?
            <CookiesProvider>
                  <Crud usersData={usersData} setUsersData={setUsersData} cookies={cookies} setCookies={setCookies}/>
            </CookiesProvider> :
            isSearch ?
            <CookiesProvider>
                  <SearchCmp usersData={usersData} setUsersData={setUsersData}/>
            </CookiesProvider> :
            <CookiesProvider>
              <Table usersData={usersData} setUsersData={setUsersData} cookies={cookies} setCookies={setCookies}/>
            </CookiesProvider>
        }
    </div>
  );
}

export default App;

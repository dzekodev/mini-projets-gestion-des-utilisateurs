import '../styles/App.css';
import React from 'react'
import Top from './Top'
import Add from './Add'
import { CookiesProvider } from 'react-cookie';
import {useState} from 'react'
import SearchCmp from './SearchCmp'
import Table from './Table'
function App() {
  const [usersData,setUsersData] = useState([{}])
  const [isMunipilate,setIsMunipilate]=useState(true); 
  return (
    <div className="App">
        <Top setIsMunipilate={setIsMunipilate}/>
        {
          isMunipilate ?
            <CookiesProvider>
                  <Add usersData={usersData} setUsersData={setUsersData}/>
            </CookiesProvider> :
            <CookiesProvider>
                  <SearchCmp usersData={usersData} setUsersData={setUsersData}/>
            </CookiesProvider>
        }
    </div>
  );
}

export default App;

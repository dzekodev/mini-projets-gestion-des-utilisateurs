import React, { useState } from 'react';
import { UsersData } from '../data/UsersData';
import { Input, Space } from 'antd';
import '../styles/SearchCmp.css'
const { Search } = Input;
function SearchCmp(){
    const [searchText,setSearchText]=useState('')
    const [obj,setObj] = useState({})
    let Newobj;
    function Rechercher(property){
        if(property==="nom")
            Newobj= UsersData.find(o => o.nom === searchText);
        else if(property==="prenom")
            Newobj= UsersData.find(o => o.prenom === searchText);
            else if(property==="couleur")
                Newobj= UsersData.find(o => o.couleur === searchText);
                else if(property==="metiere")
                    Newobj= UsersData.find(o => o.metier === searchText);
        
        if(Newobj===undefined){
            alert("there no user with this data")
        }else{
            setObj(Newobj)
         }
    }
    return(
        <React.Fragment>
            <Space direction="horizontal">
                <Search className="search"  placeholder=" nom" enterButton onSearch={()=>Rechercher("nom")} onChange={(e)=>setSearchText(e.target.value)} />
                <Search  className="search" placeholder=" prenom" enterButton onSearch={()=>Rechercher("prenom")} onChange={(e)=>setSearchText(e.target.value)} />
                <Search className="search"  placeholder="couleur" enterButton onSearch={()=>Rechercher("couleur")} onChange={(e)=>setSearchText(e.target.value)} />
                <Search className="search"  placeholder="metiere" enterButton onSearch={()=>Rechercher("metiere")} onChange={(e)=>setSearchText(e.target.value)} />
            </Space>
            {
                searchText.length!==0 ?(
                    <table>
                    <tr>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Image</th>
                        <th>Couleur</th>
                        <th>age</th>
                        <th>Metiere</th>
                    </tr>
                    {
                        <tr key={obj.nom}>
                        <td>{obj.nom}</td>
                        <td>{obj.prenom}</td>
                        <td>{obj.image}</td>
                        <td> {obj.couleur}</td>
                        <td>{obj.age}</td>
                        <td>{obj.metier}</td>
                        </tr>
                    }
                </table>
                ) :
            <div>there is no data entered</div>

            }
            
        </React.Fragment>
    )
}
export default SearchCmp
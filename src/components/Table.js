import { Table,Button } from 'antd';
import { useState } from 'react';
import { UsersData } from '../data/UsersData'


function Tablee({setUsersData,usersData,cookies,setCookies}){
  const columns = [
    {
      title: 'Nom',
      dataIndex: 'nom',
    },
    {
      title: 'Prenom',
      dataIndex: 'prenom',
    },
    {
      title: 'Image',
      dataIndex: 'image',
    },
    {
      title: 'Couleur',
      dataIndex: 'couleur',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Metiere',
      dataIndex: 'metier',
    },
    {
      title: 'Munipilation',
      dataIndex: 'munipilation',
      render : btn => <><Button onClick={handleDelete} key={index}>Delete</Button></>
    }
  ];
    function handleDelete (){
        UsersData.splice(index,1);
        console.log(UsersData)
        setUsersData({UsersData})
        setCookies("users",usersData)
        console.log(cookies.users)
    
    }
    const [index,SetIndex]= useState('0');
    return(
        <Table 
          columns={columns} 
          dataSource={UsersData} 
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                SetIndex(rowIndex)
                console.log(event)
              }
            }
          }
      } />
    )
}
export default Tablee
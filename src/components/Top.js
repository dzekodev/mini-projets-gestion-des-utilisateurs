import React from 'react'


function Top({setIsMunipilate,setIsSearch}){

    const handleClickM =()=> {
        setIsMunipilate(true) 
        setIsSearch(false) 
      }
      const handleClickS =()=> {
        setIsMunipilate(false)
        setIsSearch(true) 
      }
      const handleClickD =()=> {
        setIsMunipilate(false)
        setIsSearch(false)
      }

    return(
        <React.Fragment>
            <div className="top">
                Mini Projet : gestion des utilisateurs
            </div> 
            <ul>
            <button onClick={handleClickM}>Munipilation</button >
            <button onClick={handleClickS}>Search</button >
            <button onClick={handleClickD}>Delete Multiple Users</button >
        </ul>
        </React.Fragment>

    )
}
export default Top
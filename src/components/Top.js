import React from 'react'


function Top({setIsMunipilate}){

    const handleClickM =()=> {
        setIsMunipilate(true) 
      }
      const handleClickS =()=> {
        setIsMunipilate(false)
      }

    return(
        <React.Fragment>
            <div className="top">
                Mini Projet : gestion des utilisateurs
            </div> 
            <ul>
            <button onClick={handleClickM}>Munipilation</button >
            <button onClick={handleClickS}>Search</button >
        </ul>
        </React.Fragment>

    )
}
export default Top
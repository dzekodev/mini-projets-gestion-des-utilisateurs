import { Input,Button,Upload } from 'antd'
import { useState , useEffect} from 'react';
import { useCookies} from 'react-cookie';
import { UsersData } from '../data/UsersData';
import 'antd/dist/antd.css';
import '../styles/Crud.css'

function Crud(){
    const [usersData,setUsersData]= useState([
        {   
            nom : "",
            prenom : "",
            image: "",
            couleur: "",
            age: "",
            metier: ""
        }
    ]);
    useEffect(()=>{
        console.clear();
        for(let i=0;i<usersData.length;i++)
            console.log(usersData[i])
    },[usersData])

    const [nom,setNom] = useState('');
    const [prenom,setPrenom] = useState('');
    const [image,setImage] = useState('');
    const [couleur,setCouleur] = useState('');
    const [age,setAge] = useState('');
    const [metier,setMetier] = useState('');
    
    const [cookies, setCookies] = useCookies(["nom", "prenom","image","couleur","age","metier"]);
    var newUsers=[];
    const setUserCookie =() =>{
        const userToAdd = { nom: nom, prenom: prenom ,image: image,couleur: couleur ,age: age,metier: metier};
        const previousUsers = cookies["users"] || [];
        newUsers += [...previousUsers, userToAdd];
        console.log(newUsers.toString())
        setCookies("users", newUsers, { path: "/" })
      }; 
      function handleAdd(){
        if(nom==="" || prenom==="" || couleur==="" || age==="" || metier===""){
            alert("tous les champs sont obligatoire")
        }else
            alert(nom+"\n"+prenom+"\n"+couleur+"\n"+age+"\n"+metier);
    }
    function handleCookies(){
        UsersData.push({
            nom : nom,
            prenom : prenom,
            image: image,
            couleur: couleur,
            age: age ,
            metier: metier
        })

        
        /*setUsersData(UsersData)
        setCookies('nom', nom, { path: '/' });
        setCookies('prenom', prenom, { path: '/' });
        setCookies('image', image, { path: '/' });
        setCookies('couleur', couleur, { path: '/' });
        setCookies('age', age, { path: '/' });
        setCookies('metier', metier, { path: '/' });

        alert(cookies.nom+"\n"+cookies.prenom+"\n"+cookies.couleur+"\n"+cookies.age+"\n"+cookies.metier+"\n")*/
    }
    return(
        <div className="container">
            {cookies.nom}
            {cookies.image}
            <Input placeholder="Enter Votre Nom" className="input" onChange={(e)=> setNom(e.target.value)}/>
            <Input placeholder="Enter Votre Prénom" className="input"onChange={(e)=> setPrenom(e.target.value)}/>
            <Upload  
                className="UploadImg" 
                value="upload "
                /*onChange={(e)=> setImage(e.target.value)}*/
            >Ajouter Votre Photo de Profile</Upload>

            <Input placeholder="Enter Votre Couleur de profil" className="input" onChange={(e)=> setCouleur(e.target.value)}/>
            <Input placeholder="Enter Votre Age" className="input" onChange={(e)=> setAge(e.target.value)}/>
            <Input placeholder="Enter Votre Métier" className="input" onChange={(e)=> setMetier(e.target.value)}/>
            <Button 
                className="button"
                onClick={handleAdd}
            >Ajouter</Button>
            <Button 
                className="button"
                onClick={setUserCookie}
            >Ajouter sur Cookies</Button>
            <ul>
            </ul>
        </div>
    ) 
    
}
export default Crud
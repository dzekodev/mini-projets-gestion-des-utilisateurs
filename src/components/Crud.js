import { Input,Button,Upload} from 'antd'
import { useState } from 'react';
import { UsersData } from '../data/UsersData';
import 'antd/dist/antd.css';
import '../styles/Crud.css';

function Crud({usersData, setUsersData,cookies,setCookies}){
    const [nom,setNom] = useState('');
    const [prenom,setPrenom] = useState('');
    const [couleur,setCouleur] = useState('');
    const [age,setAge] = useState('');
    const [metier,setMetier] = useState('');
    const handleAdd = ()=>{
       UsersData.push({
           nom : nom,
           prenom : prenom,
           image: "img",
           couleur: couleur,
           age: age ,
           metier: metier
       })
      setUsersData({UsersData})
        setCookies("users",UsersData)
        console.log(cookies.users)
        
    }
    const handleDelete= ()=>{
      for (var i = UsersData.length - 1; i >= 0; --i) {
          if (UsersData[i].nom === nom) {
            UsersData.splice(i,1);
            console.log("name matched found")
          }
        }
        setUsersData(UsersData)
        var json_str = JSON.stringify(usersData);
        setCookies("users",json_str)
    
    }
    const handleUpdate =()=>{
      UsersData.forEach(function(obj) {
        if (obj.nom === nom) {
            obj.prenom = prenom;
            obj.image = "img";
            obj.couleur = couleur;
            obj.age = age;
            obj.metier = metier;
        }
      });
    setUsersData({UsersData})
      var json_str = JSON.stringify(usersData);
      setCookies("users",json_str)
      console.log(cookies.users)
    }


    /*For The Image*/ 
    const [fileList, setFileList] = useState([]);
    const onChange = ({ fileList: newFileList }) => {
      setFileList(newFileList);
    };
    const onPreview = async file => {
      let src = file.url;
      if (!src) {
        src = await new Promise(resolve => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj);
          reader.onload = () => resolve(reader.result);
        });
      }
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow.document.write(image.outerHTML);
    };
    return(
        <div className="container">
            <Input placeholder="Enter Votre Nom" className="input" onChange={(e)=> setNom(e.target.value)}/>
            <Input placeholder="Enter Votre Pr??nom" className="input"onChange={(e)=> setPrenom(e.target.value)}/>
            <div>
              <Upload 
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length < 5 && '+ Upload'}
              </Upload>
            </div>
            <Input placeholder="Enter Votre Couleur de profil" className="input" onChange={(e)=> setCouleur(e.target.value)}/>
            <Input placeholder="Enter Votre Age" className="input" onChange={(e)=> setAge(e.target.value)}/>
            <select
              onChange={(e)=>{setMetier(e.target.value)}}>
              <option selected>Selectionner Votre M??tier</option>
              <option defaultValue="freelance">Freelance</option>
              <option defaultValue="professeur">Professeur</option>
              <option defaultValue="docteur">Docteur</option>
            </select>
            <Button 
                className="button"
                onClick={handleAdd}
            >Ajouter</Button>
            <Button 
                className="button"
                onClick={handleDelete}
            >Delete</Button>
            <Button 
                className="button"
                onClick={handleUpdate}
            >Update</Button>

            <table>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>Image</th>
                  <th>Couleur</th>
                  <th>age</th>
                  <th>Metiere</th>
                </tr>
              </thead>
              <tbody>
                {UsersData.map((user)=>(
                  <tr key={user.nom}>
                    <td>{user.nom}</td>
                    <td>{user.prenom}</td>
                    <td>{user.image}</td>
                    <td> {user.couleur}</td>
                    <td>{user.age}</td>
                    <td>{user.metier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
    ) 



}
export default Crud
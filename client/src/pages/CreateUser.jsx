import React , { useState } from "react";
import { postUser } from '../store/slices/users/thunks.js';
import { useDispatch } from 'react-redux';

const createUser = () => {
    const[previewSource,setPreviewSource]=useState();
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        user: "",
        password: '',
        mail: '',
        profilePhoto: '',
    })
    const[fileInputState,setFileInputState]=useState('');

    const previewFile =(file)=>{
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend=()=>{
            setPreviewSource(reader.result);
    }}; 
                                
        const handleFileInputChange=(e)=>{
            const file =e.target.files[0];
            console.log(file)
            previewFile(file);
        };

    function handleChange(e) {
 
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    };


    function  handleSubmit (e) {
        e.preventDefault();
        console.log(previewSource,"sadasdasd")
        const postFinal = {
            user: input.user,
            password: input.password,
            mail: input.mail,
            profilePhoto:previewSource
        }
        dispatch(postUser(postFinal))
        setInput({
            user: "",
            password: '',
            mail: '',
            profilePhoto: '',
        })

}

    return (
        <div>
            <form encType="multipart/form-data"  action="" onSubmit={(e) => handleSubmit(e)}>
            <h1>Crea tu Usuario</h1>
                <div >
                    <label>User : </label>
                    <input
                        type='text'
                        value={input.user}
                        name ="user"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <h1>  //   </h1>
                <div >
                    <label>Password</label>
                    <input
                        value={input.password}
                        type="password"
                        name='password'
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <h1>  //   </h1>
                <div >
                    <label> Mail: </label>
                    <input
                        value={input.mail}
                        type="mail"
                        name='mail'
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <h1>  //   </h1>
                <div >
                <label>Photo:</label>
                    <input
                        value={fileInputState}
                        type="file"
                        name='image'
                        onChange={(e) => handleFileInputChange(e)}
                    />
                </div>
                <button type="submit" style={{background:'red', border: "blue"}}>Enviar</button>
                </form>
                {previewSource &&(
                    
                         <img src={previewSource} alt="chosen"
                         style={{height:'300px'}}/>
                         )}
                </div>
    )
} 

export default createUser;
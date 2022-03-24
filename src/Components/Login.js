import React from "react";
import {useForm} from 'react-hook-form';
import '../App.css'


function Login(){
    // const {register, hadleSubmit, formState} = useForm();
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

    return(
            <div className="container">
                    <h1 className="text-center mx-auto">Login</h1>
                    <div className="row"></div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3 col-10 mx-auto">
                            {/* <label for="exampleInputEmail1" class="form-label"></label> */}
                            <input type="text" className="form-control" placeholder="nom d'utilisateur" id="exampleInputUsername1" aria-describedby="usernameHelp" {...register('Username', {required: true , maxLength : 15})}/>
                            <span> {errors.Username?.type ==='required' && "Entrez votre nom d'utilisateur"} </span>
                            <span> {errors.Username?.type ==='maxLength' && "Attention! 15 caractère max"} </span>
                        </div>
                        
                        <div className="mb-3 col-10 mx-auto">
                            {/* <label for="exampleInputPassword1" class="form-label"></label> */}
                            <input type="text" className="form-control" placeholder="Mot de passe" id="exampleInputPassword1" {...register('Password', {required:'veuillez entrer 6 caractère minimum', minLength: 6})}/>
                            <span> {errors.Password?.type ==='required' && "Entrez votre mot de passe"} </span>
                            <span> {errors.Password?.type ==='minLength' && "Entrez 6 caractère min."} </span>
                        </div>
                        <div className="d-grid gap-2 col-10 mx-auto">
                            <button type="submit" className="btn btn-primary btn-lg button">SE CONNECTER</button>
                        </div>
                    </form>
                </div>
    )
}

export default Login
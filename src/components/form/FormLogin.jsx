import React from 'react'
import { useForm } from 'react-hook-form';
import ButtonComp from '../common/button/ButtonComp';
import './form.scss';


const FormLogin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({});

    const onSubmit = data => {
        console.log(data)
    }


    return (
        <form className='container-form col-10 col-sm-8 col-lg-5' id='formLogin' onSubmit={ handleSubmit( onSubmit ) } >
            <legend>Welcome Back </legend>

            <div className='form-group'>
                <label htmlFor="email"><span>Email *</span></label>
                <input type="text" name='email' className='form-control' {...register("email", 
                { 
                    required:true,
                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                })
                } />
                { errors.email?.type === 'required' && <p className='text-danger small'>*email is required</p> }
                { errors.email?.type === 'pattern' && <p className='text-danger small'>*invalid mail format</p> }
            </div>
            
            <div className='form-group'>
                <label htmlFor="password"><span>Password *</span></label>
                <input type="password" name='password' className='form-control'  {...register('password',{ required:true }) }/>
                { errors.password?.type === 'required' && <p className='text-danger small'>*Password is required</p> }
            </div>

            <div className='check-remember'>
                <input type="checkbox" id="check-remember" name="check-remember" value="true" />
                <label htmlFor="check-remember"><span>Remember me</span></label>
            </div>

            <div className='form-group'>
                <ButtonComp type='submit' className='btn-submit' >LOGIN</ButtonComp>
            </div>

            <div className='text-msg'>
                <p className='text-p'>Forgot Password?</p>
                <p className='text-p'>Don't have an account?</p>
            </div> 
        </form>
    )
}

export default FormLogin;
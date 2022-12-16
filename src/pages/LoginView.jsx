import React from 'react'
import FormLogin from '../components/form/FormLogin'
import Header from '../components/header/Header'

export default function LoginView() {

  return (
    <div className='container'>
        <Header />
        <section className='sec-login'>
            <FormLogin />
        </section>
    </div>
   
  )
}

import React from 'react'
import '../hojas-de-estilo/Logo.css'
import logoImagen from '../multimedia/logo-illapa.png';

function Logo() {
  return (
    <div className='logo-illapa'>
      <img alt='Logo de la empresa' src= {logoImagen} />
    </div>
  )
}

export default Logo
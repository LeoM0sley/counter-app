import React from 'react'
import what from './Image/what.png'
import { Buttons } from './components/Buttons';

export const CounterApp = () => {

    const handleClick = ( )=>{
        console.log('click');
    }

    const resetCounter = ( )=>{
        console.log('reset');
    }


  return (
    <div className='counter-app'>
        <div className='app-logo-contenedor'>
            <img 
                className='app-logo'
                src={ what }
                alt='mediaafk'
            />
        </div>

        <div className='contenedor-del-contador'>
            <Buttons
                texto='Click'
                isClickButton={true}
                handleClick={ handleClick }
            
            />
            <Buttons
                texto='Reset'
                isClickButton={false}
                handleClick={ resetCounter }
            
            />


        </div>
    </div>
  )
}

import React from 'react'
import { Ubicacion } from './Ubicacion';
import { Horarios } from './Horarios';
import { ContentMenu } from './ContentMenu';

export const Menu = () => {
  return (
    <>
        <ContentMenu/>
        <Ubicacion/>
        <Horarios/>
    </>
  )
}
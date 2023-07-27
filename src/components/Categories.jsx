import styled  from "styled-components"
import React from 'react'
import CategoryItem from './CategoryItem'
import { categories } from '../data'


const Container=styled.div `
    display: flex;
    justify-content: space-between;
    padding:20px
`
const Categories = () => {
  return (
    <Container>
     {categories.map(item=>(

         <CategoryItem item={item} key={item.id}/>
     ))}

    </Container>
  )
}

export default Categories
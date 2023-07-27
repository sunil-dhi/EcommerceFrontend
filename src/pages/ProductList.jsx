import React from 'react'
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import styled from 'styled-components'
const Container=styled.div`
    
`
const FilterContainer=styled.div`
    display: flex;
    justify-content: space-between;
`
const Title=styled.h1`
    margin: 20px;
`
const Filter=styled.div`
    margin: 20px;
`
const FilterText=styled.span`
    font-size: 20px;
    font-weight: 600px;
    margin-left:20px;
`

const Select=styled.select`
    margin-left: 20px;
    padding: 10px;
  cursor: pointer;
`
const Option =styled.option`
`
const ProductList = () => {
  return (
    <Container>
    <Navbar />
    <Announcement />
         <Title>DRESSES</Title>
         <FilterContainer>
         <Filter>
             <FilterText>Filter products: </FilterText>
             <Select>
                 <Option disabled selected>Color</Option>
                 <Option>Red</Option>
                 <Option>Black</Option>
                 <Option>Blue</Option>
                 <Option>Pink</Option>
                 <Option>Orange</Option>
                 <Option>Green</Option>
             </Select>
             <Select>
                 <Option disabled selected>Size</Option>
                 <Option>S</Option>
                 <Option>M</Option>
                 <Option>L</Option>
                 <Option>XL</Option>
                 <Option>XLL</Option>
                 <Option>XS</Option>
             </Select>
         </Filter>
         <Filter>
             <FilterText>Sort products: </FilterText>
             <Select>
                 <Option selected>Newest</Option>
                 <Option>Price (Asc)</Option>
                 <Option>Price (Desc)</Option>
             </Select>
         </Filter>
     </FilterContainer>
     <Products />
     <Newsletter />
     <Footer />
    </Container>
  )
}

export default ProductList
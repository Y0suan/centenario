import Center from '@/Component/Center'
import Header from '@/Component/Header'
import Nav from '@/Component/Nav'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { google, outlook, office365, yahoo, ics } from "calendar-link";
import { SiGooglecalendar } from "react-icons/si";
import CompartirWhatsApp from '@/Component/Botones/CompartirWhatsApp '
import CardList from '@/Component/CardList/CardList'




const Title = styled.h1`
`

const Subtitle = styled.h2`
/* margin: 0px;
margin-top:16px;
font-size: 26px;
line-height: 30px;
font-weight: 600;
color: #222222; */
`
const Img = styled.div`
/* width: 100%;
max-height:60vh ;
overflow: hidden;
border-radius: 8px;
img{
  width: 100%;

} */
`
const LinkSubtitle = styled(Link)`
margin: 0px;
margin-top:6px;
margin-bottom: 26px;
font-size: 14px;
line-height: 20px;
font-weight: 600;
color: #222222;
display:flex;
align-items: center;
`
const LinksInportantes = styled.div`
padding:26px 0px;
width: 100%;
border-top: 1px solid #CFC9D1;
display: flex;
flex-direction: row;
justify-content:space-evenly;
border-bottom: 1px solid #CFC9D1;
flex-wrap: wrap;

`
const Links = styled(Link)`
display: flex;
flex-direction: row;
align-items: center;
color: #222222;
text-decoration: none;
gap:8px;
.icon{
font-size: 24px;
display:flex;
justify-content: center;
align-items: center;
padding: 8px;
border-radius: 50%;
background-color: #92B1F5;
color:#2563EB;
}
`
const Description = styled.div`
/* padding:26px 0px;
width: 100%;
border-bottom: 1px solid #CFC9D1; */
`
const Galery = styled.div`
/* overflow: hidden; 
overflow-x: scroll;
padding:26px 0px;
width: 100%;
height:40vh;
border-bottom: 1px solid #CFC9D1;
display: flex;
gap:8px;
img{
  border-radius: 5px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex:1;
} */
`

const ProductPage = ({product}) => {
  const event = {
    title: product.title,
    description: product.description,
    start: product.fecha,
    duration: [3, "hour"],
  };
  return (
    <div>
    <Header/>
    <Nav/>
    <div className='ContProductPage'  >
      <div className='productPage'>  
      <Img className='imgProduct'>
      <img src={product.images?.[0]} ></img>
      </Img>
      <Description className='productInfo' >
      <h1>{product.title}</h1>
        <h2>Descripcion</h2>
        <p>
          {product.description}
        </p>
        <div className='ContBtn' >
       <Link  href={google(event)} target='_blank' className='link' >
        <SiGooglecalendar/>  Sumalo a tu calendario
        </Link>
        <CompartirWhatsApp titulo={product.title} imagen={product.images?.[0]} />
        </div>
       </Description>
       </div>
    <CardList/>
    </div>
    </div>
  )
}

export default ProductPage

export async function getServerSideProps(context) {
  await mongooseConnect();
  const {id} = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    }
  }
}
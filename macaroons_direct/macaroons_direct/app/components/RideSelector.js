import React from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'

const RideSelector = () => {
  return (
    <Wrapper>

        <CarList>
        <Title>Choose a ride, or swipe up for more</Title>
{ carList.map((car, index)=>(
    
            <Car key={index}>
                
            <CarImage src={car.imgUrl} />
            <CarDetails>
                <Service>{car.service}</Service>
                <Time>{car.Time}</Time>
            </CarDetails>
            <Price>$24.35</Price>
        </Car>
))}
</CarList>
    </Wrapper>
  )
}

export default RideSelector

const CarDetails = tw.div`
flex-1
`

const Service = tw.div`font-medium text-xs text-blue-500`

const CarImage = tw.img`h-14 mr-2`


const Time = tw.div``

const Price = tw.div`
text-sm
`

const Wrapper = tw.div`
 flex flex-1 flex-col justify-center  h-full min-h-0`

const CarList = tw.div`space-y-3 flex flex-col overflow-y-scroll flex-1`

const Car = tw.div`  w-full flex items-center justify-between p-4 border-b-2 `

const Title = tw.div`
w-full text-gray-500 items-center text-center text-xs bg-white border-b sticky top-0 z-10
`
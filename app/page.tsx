"use client";
import { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from 'next/link';
import Weather from "./components/Weather";


export default function Home() {
  
  const [pickupCoordinates, setPickupCoordinates] = useState<any>(null);
  const [dropoffCoordinates, setDropoffCoordinates] = useState<any>(null);

  return (
    <Wrapper>
      <Map pickupCoordinates={pickupCoordinates ?? null} dropoffCoordinates={dropoffCoordinates ?? null} />
      
      <ActionItems>
        <Header>
        <Weather /> 

        <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
        <Profile>
         <Name>Barry Weinstein.</Name>
         <UserImage src="/volunteer.jpg" />
         </Profile>
        </Header>
          <ActionButtons>
            <ActionButton><Link href="/search"> <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uperx.png" /> Ride</Link></ActionButton>
            <ActionButton><ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />Wheels</ActionButton>
            <ActionButton><ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />Reserve</ActionButton>
      
          </ActionButtons>

          <InputButton>
          Where To?
          </InputButton>

      </ActionItems>


    </Wrapper>


  );
}

const Wrapper = tw.div`
  flex flex-col  h-screen
`;


const Header = tw.div`
flex justify-between items-center
`;

const UberLogo = tw.img`
h-28
`;

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`

const ActionButtonImage = tw.img`
h-3/5
`

const Name = tw.div`
mr-4 w-20
`

const ActionItems = tw.div`
  flex-1 p-4
`;

const ActionButtons = tw.div`
flex
`;
const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-between transform hover:scale-105 transition text xl
`;

const Profile = tw.div`
flex items-center`

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`
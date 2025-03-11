"use client";
import React, {Suspense} from 'react';
import { FC, useEffect, useState } from 'react';
import tw from "tailwind-styled-components";
import Map from '../components/Map';
import mapboxgl from "mapbox-gl";
import { useRouter, useSearchParams} from 'next/navigation';
import RideSelector from '../components/RideSelector';
import Link from 'next/link';

mapboxgl.accessToken =
"pk.eyJ1IjoicGlsbG93Y2FzZXN0dWRpZXMiLCJhIjoiY203MmR6cGRxMDltNDJqcHMzMG5ucHgzYiJ9.yggrLELPSXEzKwuldUFdYQ";

const ConfirmPage: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading....</div>}>
            <ConfirmContent />
        </Suspense>
    );
};

const ConfirmContent: FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pickup = searchParams.get("pickup");
    const dropoff = searchParams.get("dropoff");

    const [pickupCoordinates, setPickupCoordinates] = useState(null);
    const [dropoffCoordinates, setDropoffCoordinates] = useState(null);



    const getDropoffCoordinates = (dropoff: string): void  => {




        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?${new URLSearchParams({
            access_token: "pk.eyJ1IjoicGlsbG93Y2FzZXN0dWRpZXMiLCJhIjoiY203MmR6cGRxMDltNDJqcHMzMG5ucHgzYiJ9.yggrLELPSXEzKwuldUFdYQ",
            limit: "1"
        })}`)
        .then(response => response.json())
        .then(data => {
            setDropoffCoordinates(data.features[0].center);
        })
        .catch(error => console.error("Error fetching dropoff coordinates:", error));
    };

    const getPickupCoordinates = (pickup: string): void  => {


        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?${new URLSearchParams({
            access_token: "pk.eyJ1IjoicGlsbG93Y2FzZXN0dWRpZXMiLCJhIjoiY203MmR6cGRxMDltNDJqcHMzMG5ucHgzYiJ9.yggrLELPSXEzKwuldUFdYQ",
            limit: "1"
        })}`)
        .then(response => response.json())
        .then(data => {
            setPickupCoordinates(data.features[0].center);
        })
        .catch(error => console.error("Error fetching pickup coordinates:", error));
    };


    useEffect(() => {
       if (pickup)     getPickupCoordinates(pickup);
       if (dropoff)     getDropoffCoordinates(dropoff);
    }, [pickup, dropoff]);

    return (
        <Wrapper>
     <ButtonContainer>
     <Link href="/search"> 
        <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
      </Link>
    </ButtonContainer>

            <Map pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />
            <RideContainer>
            <RideSelector />

            <ConfirmButtonContainer>
                <ConfirmButton>
                Confirm UberX
                </ConfirmButton>
            </ConfirmButtonContainer>           
            </RideContainer>
        </Wrapper>
    );
};

export default ConfirmPage;

const BackButton = tw.img`
  fixed top-4 left-4 z-50 w-12 h-12 rounded-full bg-white p-2 shadow-md cursor-pointer
`

const ButtonContainer = tw.div`
z-3
`

const RideContainer = tw.div`
    flex-1 flex flex-col h-[50vh]
`;

const Wrapper = tw.div`
    flex h-screen flex-col
`;

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl border-t-2
`

const ConfirmButtonContainer = tw.div`

`;



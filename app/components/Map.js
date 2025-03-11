"use client";
import { useEffect, useRef } from "react";
import React from 'react';
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoicGlsbG93Y2FzZXN0dWRpZXMiLCJhIjoiY203MmR6cGRxMDltNDJqcHMzMG5ucHgzYiJ9.yggrLELPSXEzKwuldUFdYQ";

const Map = ({ pickupCoordinates, dropoffCoordinates }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
  
    const lat = 40.776676;
    const lng = -73.9822;
    const zoom = 10;
  
    useEffect(() => {
        if (map.current) return; // Prevent re-initializing the map
        
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom: zoom,
        });
    }, []);

    useEffect(() => {
        if (!map.current) return;

        // Function to add a marker
        const addToMap = (coordinates, color) => {
            if (coordinates) {
                new mapboxgl.Marker({ color })
                    .setLngLat(coordinates)
                    .addTo(map.current);
            }
        };

        if(pickupCoordinates && dropoffCoordinates){
            map.current.fitBounds([
                dropoffCoordinates,
                pickupCoordinates
            ],{
                padding: 60
            })
        }

        // Add Pickup and Dropoff Markers
        addToMap(pickupCoordinates, "red");
        addToMap(dropoffCoordinates, "blue");

    }, [pickupCoordinates, dropoffCoordinates]); // Re-run when coordinates change

    return (
        <div>
            <Wrapper ref={mapContainer}></Wrapper>
        </div>   
    );
};

export default Map;

const Wrapper = tw.div`
    flex flex-col h-[50vh]
`;

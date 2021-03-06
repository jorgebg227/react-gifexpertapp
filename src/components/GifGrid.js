import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {    

    const {data:images, loading} = useFetchGifs( category ); //data:images le llega data y lo renombra como images
    console.log(loading);
    
    return (
        <>
            <h3 className="animate__animated animate__backInRigth">{category}</h3>

            {loading && <p className="animate__animated animate__rotateIn">Loading</p>}
            
            <div className="card-grid"> 
            { 
                images.map((img) => ( <GifGridItem key={ img.id } { ...img } /> ))
            } 
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

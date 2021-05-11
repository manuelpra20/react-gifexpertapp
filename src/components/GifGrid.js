import React from 'react'
import { useFetchGrifs } from '../hooks/useFetchGrifs'

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

      
        const {data:images, loading} = useFetchGrifs(category);
       
     
       

        return (
            <>
                <h3 className="animate__animated animate__fadeIn">{category}</h3>

                {loading && <p className="animate__animated animate__flash">loading...</p> }

                <div className="card-grid">
                        {
                            images.map(img => (
                            
                                <GifGridItem
                                key ={img.id}
                                { ...img  }
                                />
                            ))
                        }
                </div>
            
            </>
        )
}

import React, {useState} from 'react'
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

 

    const [categories, setCategories] = useState(['Avengers'])


    return (
        <>
            <h2 className="centro">GifExpertApp by: Manuel Prado</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category => (
                       <GifGrid 
                       key={category}
                       category={category} 
                       />
                    ))
                }
            </ol>
        </>
    )
}

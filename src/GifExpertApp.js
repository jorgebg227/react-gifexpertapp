import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({defaultCategories = []})=>{
    const [categories, setCategories] = useState(defaultCategories);

    /*
    const handleAdd = (e) => {
        const anadir = 'HunterXHunter'
        //setCategories([...categories], anadir);  // añade al final
        //setCategories([anadir, ...categories]); // añade al inicio
        setCategories(cats => [...cats, anadir]); // añade al final
        //setCategories(cats => [anadir, ...cats]); // añade al Inicio
    }
    */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            
            <ol>
                {
                    categories.map((category) => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;
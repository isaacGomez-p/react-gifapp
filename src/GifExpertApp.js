import React,   { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GridComponent } from './components/GridComponent';

const GifExpertApp = () => {

/*const categories = [ 'One Punch', 'Naruto', 'Dragon Ball' ];*/
    const [categories, setCategories] = useState( [ 'Naruto' ] );
    
    /*const handleAdd = () => {
        setCategories( categ => [ ...categ, 'Tokyo Ghoul' ] );
    }*/

    return(
        <>
            <h2> GifExpertApp </h2>
            <hr />
            
            <AddCategory setCategories = { setCategories }/>
            <ol>
                {
                    categories.map( category => 
                        
                            <GridComponent  
                                key =  { category }
                                category = { category } />
                        
                    )
                }
            </ol>
        </>
    );

}

export default GifExpertApp;
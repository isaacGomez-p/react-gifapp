

export const getGifs = async( category ) => {
    const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=5&api_key=i3CNNejWawqBgg46KTxp4bk42IeWrIS3`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.fixed_width.url
        }
    });       
    
    return gifs;
} 

export default getGifs;


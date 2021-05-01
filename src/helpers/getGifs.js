export const getGifs = async( category ) => {
    const apiKey='WH1vLRL2bnyk0NjenGpgGdcpnLTIq9eX'
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=${limit}&api_key=${apiKey}`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url // El simbolo ? es para asegurarnos que traiga la imagen
        }
    });
    return gifs;
}
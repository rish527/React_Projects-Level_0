import { useState, useEffect } from 'react';

function Slider2({ url, limit }) {
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);

    async function getImages(getUrl) {
        try {
            setIsLoading(true);
            const response = await fetch(`${getUrl}&limit=${limit}`);
            const data = await response.json();
            setImages(data);
            setIsLoading(false); // Ensure loading state is set to false after setting images
            console.log(response);
        } catch (e) {
            setIsLoading(false);
            console.log(e);
            setError(e);
        }
    }

    useEffect(() => {
        if (url !== "") {
            getImages(url);
        }
    }, [url]);

    console.log(images);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // return (
    //     <div>
    //         {images.map((image, index) => (
    //             <img key={index} src={image.url} alt={`Image ${index}`} />
    //         ))}
    //     </div>
    // );
}

export default Slider2;

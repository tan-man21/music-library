import {useContext} from 'react';
import { DataContext } from '../context/DataContext';
import GalleryItem from './GalleryItem';

function Gallery() {
    const data = useContext(DataContext)

    const display = data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            <h1>Gallery</h1>
            {display}
        </div>
    )
}

export default Gallery
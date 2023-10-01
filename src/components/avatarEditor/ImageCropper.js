import { useState } from 'react'
import Cropper from 'react-easy-crop'


export default function ImageCropper({ imageSrc, setCroppedAreaPixels }) {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)

    const onCropComplete = (_, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
        console.log(croppedAreaPixels)
    }

    return (
        <Cropper 
            image={ imageSrc } 
            aspect={ 1 } 
            crop={ crop }
            zoom={ zoom }
            maxZoom={ 5 }
            onCropChange={ setCrop }
            onZoomChange={ setZoom }
            onCropComplete={ onCropComplete }
        />
    )
}
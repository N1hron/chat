import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cropper from 'react-easy-crop'

import { selectImageSrc, setCroppedAreaPixels } from '../../../store/slices/avatarEditorSlice'


export default function ImageCropper() {
    const [crop, setCrop] = useState({ x: 0, y: 0 }),
          [zoom, setZoom] = useState(1)

    const imageSrc = useSelector(selectImageSrc)
    const dispatch = useDispatch()

    const onCropComplete = (_, croppedAreaPixels) => dispatch(setCroppedAreaPixels(croppedAreaPixels))

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
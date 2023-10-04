import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import getCroppedImg from '../../helpers/cropImage'


const initialState = {
    imageSrc: null,
    croppedImage: null,
    croppedAreaPixels: null
}

export const getCroppedImage = createAsyncThunk(
    'avatarEditor/getCroppedImage',
    async ({ imageSrc, croppedAreaPixels }) => await getCroppedImg(imageSrc, croppedAreaPixels)
)

const avatarEditorSlice = createSlice({
    name: 'avatarEditor',
    initialState,
    reducers: {
        setImageSrc: (state, action) => { state.imageSrc = action.payload },
        removeImageSrc: state => { state.imageSrc = null },
        setCroppedImage: (state, action) => { state.croppedImage = action.payload },
        removeCroppedImage: state => { state.croppedImage = null },
        setCroppedAreaPixels: (state, action) => { state.croppedAreaPixels = action.payload },
        removeCroppedAreaPixels: state => { state.croppedAreaPixels = null } 
    },
    extraReducers: builder => {
        builder
            .addCase(getCroppedImage.fulfilled, (state, action) => {
                state.croppedImage = action.payload
            })
    }
})

export const selectImageSrc = state => state.avatarEditor.imageSrc
export const selectCroppedImage = state => state.avatarEditor.croppedImage
export const selectCroppedAreaPixels = state => state.avatarEditor.croppedAreaPixels

const { actions, reducer } = avatarEditorSlice

export default reducer
export const { 
    setImageSrc, 
    removeImageSrc,
    setCroppedImage,
    removeCroppedImage,
    setCroppedAreaPixels,
    removeCroppedAreaPixels
} = actions
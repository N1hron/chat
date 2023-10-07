import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import getCroppedImg from '../../helpers/cropImage'


const initialState = {
    isVisible: false,
    step: 1,
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
        setCroppedImage: (state, action) => { state.croppedImage = action.payload },
        setCroppedAreaPixels: (state, action) => { state.croppedAreaPixels = action.payload },
        showAvatarEditor: state => { state.isVisible = true },
        setStep: (state, action) => { state.step = state = action.payload },
        hideAvatarEditor: state => { 
            state.isVisible = false
            state.imageSrc = null 
            state.croppedImage = null
            state.croppedAreaPixels = null
            state.step = 1
        },
        resetAvatarEditor: state => { 
            state.imageSrc = null 
            state.croppedImage = null
            state.croppedAreaPixels = null
            state.step = 1
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getCroppedImage.fulfilled, (state, action) => {
                state.croppedImage = action.payload
                state.step = 3
            })
    }
})

export const selectStep = state => state.avatarEditor.step
export const selectIsVisible = state => state.avatarEditor.isVisible
export const selectImageSrc = state => state.avatarEditor.imageSrc
export const selectCroppedImage = state => state.avatarEditor.croppedImage
export const selectCroppedAreaPixels = state => state.avatarEditor.croppedAreaPixels

const { actions, reducer } = avatarEditorSlice

export default reducer
export const { 
    setImageSrc, 
    setCroppedImage,
    setCroppedAreaPixels,
    resetAvatarEditor,
    showAvatarEditor,
    hideAvatarEditor,
    setStep,
} = actions
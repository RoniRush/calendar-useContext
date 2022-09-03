export type PlaceHolderType = {
    width: string,
    height: string,
}

export type PopupType = {
    content: JSX.Element,
    children?: JSX.Element,
    handleClose: ()=> void,
}
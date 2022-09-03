export type ButtonType = {
    className: string,
    onClick: ()=>void,
    disabled: boolean,
    children: JSX.Element | string,
}

export type PlaceHolderType = {
    width: string,
    height: string,
}
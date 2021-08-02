import React from 'react'
import { IChildren } from '../../common/formatTypes/ComponentChildren'

interface IContentWrapperProps{
    children: IChildren;
}
const ContentWrapper:React.FC<IContentWrapperProps> = ({children}) => {
    return (
        <div className="container py-5">
            {children}
        </div>
    )
}

export default ContentWrapper

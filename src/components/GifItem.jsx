import React from 'react'

export const GifItem = ({ title, url, id}) => {

    return (
        <img src={url} alt={title} width="100" height="100" />     
    )
}

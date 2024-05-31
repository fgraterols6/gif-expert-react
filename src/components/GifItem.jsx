import PropTypes  from 'prop-types';

export const GifItem = ({ title, url, id}) => {

    return (
        <img src={url} alt={title} width="100" height="100" />     
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
import React from 'react';
import './Image.css';

const Image = props => (
    <div>
        <img className='birds' id={props.id} src={props.url} onClick={() => props.handleImage(props.id)} alt='birds' />
    </div>
);

export default Image;
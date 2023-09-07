import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UpdateActor from './UpdateActor';

function ShowIDFromParam(UpdateActor) {
    const { id } = useParams();
    const match  = {params: useParams()};

    const navigate = useNavigate();

    return (props) => (
        <UpdateActor {...props}  match = {navigate}/>
    );
}

export default ShowIDFromParam;
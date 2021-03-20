import React from 'react';
import {useRouter} from 'next/router';

export default () => {
    const router = useRouter()
    const {id} = router.query;
    
    return <div>Note Id{id}</div>
}
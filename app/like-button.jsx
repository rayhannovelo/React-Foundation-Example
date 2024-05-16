'use client';
 
import { useState } from 'react';
 
export default function LikeButton() {
    // states
    const [likes, setLikes] = useState(0)

    return (
        <div>
            <button onClick={() => setLikes(likes - 1)}>Remove Like</button>
            <button style={{margin: '10px'}}>Like ({likes})</button>
            <button onClick={() => setLikes(likes + 1)}>Add Like</button>
        </div>
    )
}
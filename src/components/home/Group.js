import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import './group.css'


export const Group = () => {
    return (
        <div>
            <ChatEngine 
                height="100vh"
                projectID="cc06b263-91d7-4f87-9277-b50f266810e3"
                userName="jenny"
                userSecret="123x7"
            />
            
        </div>
    )
}

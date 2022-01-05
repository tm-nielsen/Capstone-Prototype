import React, {useEffect, useState} from 'react'
import {Container, Button} from "react-bootstrap";
import './LandingPage.css';
import getSocket from '../../Socket';

export const LandingPage = () => {
    // const [socket, setSocket] = useState(null)
    // const [id, setID] = useState(-1)

    useEffect(() => {
        // console.log('establishing socket connection')

        // let ws = new WebSocket('wss://localhost:8080')
        // ws.addEventListener('open', (e) => {
        //     // ws.addEventListener('message', (e) => {
        //     //     let msg = e.data
        //     //     console.log('received from socket: ', msg)
        //     //     if (msg.startsWith('connection id:'))
        //     //         setID(parseInt(msg.split(':')[1]))
        //     // })
        //     // ws.send('new instance connected via socket')
        // })
        // ws.onmessage = (e) => {
        //     let msg = e.data
        //     console.log('received from socket: ', msg)
        //     if (msg.startsWith('connection id:'))
        //         setID(parseInt(msg.split(':')[1]))
        // }

        // window.onbeforeunload = () => {
        //     ws.onclose = () => {}
        //     ws.close()
        // }

        // let ws = getSocket(setID)

        // setSocket(ws)
    }, [])

    return(
        <Container id="container">
            <div className="title-container">
                <h1>Welcome to TalkBox</h1>
            </div>
            <div className="login-container">
                <form action="/login" method="POST" className="validated-form" noValidate>
                    <div className="link-container">
                        <Button id="link-button" href="/login">Log In</Button>
                    </div>
                    <div className="link-container">
                        <Button id="link-button" href="/signup">Sign Up</Button>
                    </div>
                    {/* <div className='link-container'>
                        <Button className="link-button" onClick={()=> socket.send(`test:${id}`)}>Test Socket</Button>
                    </div> */}
                </form>
            </div>
        </Container>
    )
}
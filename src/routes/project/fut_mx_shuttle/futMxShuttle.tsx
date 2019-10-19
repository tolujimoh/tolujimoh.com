import React from 'react';

import Col from "react-bootstrap/es/Col";
import Row from "react-bootstrap/es/Row";
import Container from "react-bootstrap/es/Container";
import Image from "react-bootstrap/es/Image";

import '../Project.css';
import {Link} from "react-router-dom";

type appProps = {}

type appState = {}

const futMxShuttleIcon = require('./images/fut_mx_shuttle_icon.png');
const futMxShuttleJumbotron = require('./images/fut_mx_shuttle_jumbotron.png');
const wireframingIcon = require('./images/wireframing_icon.png');
const webAppDevelopmentIcon = require('./images/web_app_development_icon.png');
const desktopStationScreen = require('./images/desktop_station_screen.png');
const desktopLoginScreens = require('./images/desktop_login_screens.png');
const desktopFUTCRUDScreens = require('./images/desktop_fut_crud_screens.png');

class futMxShuttle extends React.Component<appProps, appState> {


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {


        return (
            <>
                <header className="m-3 p-4 card bg-white border-0">
                    <Container fluid>
                        <Row style={{padding: 80, paddingTop: 20, paddingBottom: 20}}>
                            <Col>
                                <Link to='/' style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                    fontSize: 20,
                                    fontWeight: 500,
                                    lineHeight: '24px',
                                    letterSpacing: 1
                                }}>tolujimoh<span style={{color: '#F17A6E', fontWeight: 900}}>:</span></Link>

                                <span className={'float-right'}
                                      style={{color: '#CCCCCC', fontSize: 16, fontWeight: 800, marginBottom: 0}}>CASE
                                    STUDY</span>
                            </Col>
                        </Row>
                    </Container>
                </header>
                <main role="main">
                    <Container>
                        <Row>
                            <Col style={{padding: '94px 48px'}}>
                                <Image className={'float-left'} style={{width: 80, height: 'auto', marginRight: 24}} src={futMxShuttleIcon}/>
                                <div>
                                    <p style={{fontSize: 28, fontWeight: 900, marginBottom: 0}}>FUT Mx Shuttle</p>
                                    <p style={{fontSize: 20, fontWeight: 100, color: '#A2A2A2'}}>Software Engineer</p>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{paddingBottom: 96}}>
                            <Col>
                                <Image src={futMxShuttleJumbotron} fluid/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={7}>
                                <p style={{fontWeight: 900, fontSize: 20, color: '#CCCCCC'}}>OVERVIEW</p>
                                <p style={{fontWeight: 100, fontSize: 28}}>FUT Mx Shuttle is a travel scheduling application for the FUT Mx Bus service. The goal of this project was to calculate the Estimated Time of Arrival (ETA) and determine the destination station for a trip using the information received from each bus tracker.  The ETA and trip destination are then shown on a digital signage display at each station. </p>
                            </Col>
                            <Col sm={5}>
                                <p style={{fontWeight: 900, fontSize: 20, color: '#CCCCCC'}}>HATS
                                    WON</p>

                                <p style={{fontWeight: 500, fontSize: 28, marginBottom: 24}}><Image
                                    src={wireframingIcon} style={{
                                    width: 34,
                                    height: "auto",
                                    marginRight: 20
                                }}/>Wireframing</p>

                                <p style={{fontWeight: 500, fontSize: 28, marginBottom: 24}}><Image
                                    src={webAppDevelopmentIcon} style={{
                                    width: 34,
                                    height: "auto",
                                    marginRight: 20
                                }}/>Web app development</p>
                            </Col>
                        </Row>
                        <hr style={{margin: '136px 0'}}/>
                        <Row>
                            <Col>
                                <p style={{
                                    fontSize: 20,
                                    fontWeight: 900,
                                    color: '#CCCCCC',
                                    marginBottom: 0
                                }}>DESKTOP ~ WEB</p>
                                <p style={{fontSize: 28, fontWeight: 900}}>FUT Mx Shuttle Station Screen</p>

                                <p style={{fontWeight: 100, fontSize: 28}}>The page for the digital signage was written in React. It displays the current time, and the information about each trip i.e. the destination, estimated time of arrival and status. </p>

                                <Image src={desktopStationScreen} style={{margin: '136px 0'}} fluid/>

                            </Col>
                        </Row>
                        <hr style={{margin: '0 0 136px 0'}}/>
                        <Row>
                            <Col>
                                <p style={{
                                    display: "block",
                                    fontSize: 20,
                                    fontWeight: 900,
                                    color: '#CCCCCC',
                                    marginBottom: 0
                                }}>DESKTOP ~ WEB</p>
                                <p style={{display: "block", fontSize: 28, fontWeight: 900}}>FUT Mx Shuttle Admin Web Application</p>

                                <p style={{fontWeight: 100, fontSize: 28}}>A web application was created for admin users to manage application functions. The application was build using React Web Framework. The APIs for the Web Applications was written in Node JS. </p>

                                <Image src={desktopLoginScreens} style={{margin: '136px 0'}} fluid/>

                                <p style={{fontWeight: 100, fontSize: 28}}>Okta was used for user management. The application functionalities includes management of trips, bus stations, buses and routes. </p>
                                <Image src={desktopFUTCRUDScreens} style={{margin: '136px 0'}} fluid/>
                            </Col>
                        </Row>
                    </Container>
                </main>
                <footer className="m-3 p-4 card bg-dark border-0">
                    <Container>
                        <Row>
                            <Col>
                                <p className="text-white text-center mt-4 mb-0" style={{}}>&copy; 2019. Tolu Jimoh</p>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </>
        );
    }

}

export default futMxShuttle;

import React from 'react';

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import '../Project.css';
import {Link} from 'react-router-dom';

type appProps = {}

type appState = {}

const openHeavensIcon = require('./images/openheavens_icon.png');
const openHeavensJumbotron = require('./images/openheavens_jumbotron.png');
const conceptingIcon = require('./images/concepting_icon.png');
const wireframingIcon = require('./images/wireframing_icon.png');
const uxResearchIcon = require('./images/ux_research_icon.png');
const webAppDevelopmentIcon = require('./images/web_app_development_icon.png');
const iosAppDevelopmentIcon = require('./images/ios_app_development_icon.png');
const productManagementIcon = require('./images/product_management_icon.png');
const iosHomeScreens = require('./images/ios_home_screens.png');
const iosDevotionalScreens = require('./images/ios_devotional_screens.png');
const desktopDashboardScreens = require('./images/desktop_dashboard_screens.png');
const desktopCRUDScreens = require('./images/desktop_crud_screens.png');
const appleStoreIcon = require('./images/apple_store_icon.png');

class openHeavens extends React.Component<appProps, appState> {

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
                                <Image className={'float-left'} style={{width: 80, height: 'auto', marginRight: 24}}
                                       src={openHeavensIcon}/>
                                <div>
                                    <p style={{fontSize: 28, fontWeight: 900, marginBottom: 0}}>Openheavens Connect</p>
                                    <p style={{fontSize: 20, fontWeight: 100, color: '#A2A2A2'}}>Product Manager and
                                        Software Engineer</p>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{paddingBottom: 96}}>
                            <Col>
                                <Image src={openHeavensJumbotron} fluid/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={7}>
                                <p style={{fontWeight: 900, fontSize: 20, color: '#CCCCCC'}}>OVERVIEW</p>
                                <p style={{fontWeight: 100, fontSize: 28}}>Openheavens is a daily devotional written by
                                    Enoch Adejare Adeboye reaching an audience of over 5 millions people around the
                                    world. The goal of this project was to design and build a mobile application for
                                    users to access the devotional and other content (books) written by the author. </p>
                            </Col>
                            <Col sm={5}>
                                <p style={{fontWeight: 900, fontSize: 20, color: '#CCCCCC'}}>HATS
                                    WON</p>
                                <p style={{fontWeight: 500, fontSize: 28, marginBottom: 24}}><Image
                                    src={conceptingIcon} style={{
                                    width: 34,
                                    height: "auto",
                                    marginRight: 20
                                }}/>Concepting</p>
                                <p style={{fontWeight: 500, fontSize: 28, marginBottom: 24}}><Image
                                    src={wireframingIcon} style={{
                                    width: 34,
                                    height: "auto",
                                    marginRight: 20
                                }}/>Wireframing</p>
                                <p style={{fontWeight: 500, fontSize: 28, marginBottom: 24}}><Image
                                    src={uxResearchIcon} style={{
                                    width: 34,
                                    height: "auto",
                                    marginRight: 20
                                }}/>UX research</p>
                                <p style={{fontWeight: 500, fontSize: 28, marginBottom: 24}}><Image
                                    src={webAppDevelopmentIcon} style={{
                                    width: 34,
                                    height: "auto",
                                    marginRight: 20
                                }}/>Web app development</p>
                                <p style={{fontWeight: 500, fontSize: 28, marginBottom: 24}}><Image
                                    src={iosAppDevelopmentIcon} style={{
                                    width: 34,
                                    height: "auto",
                                    marginRight: 20
                                }}/>iOS app development</p>
                                <p style={{fontWeight: 500, fontSize: 28, marginBottom: 24}}><Image
                                    src={productManagementIcon} style={{
                                    width: 34,
                                    height: "auto",
                                    marginRight: 20
                                }}/>Product Management</p>
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
                                }}>MOBILE ~ iOS</p>
                                <p style={{fontSize: 28, fontWeight: 900}}>Openheavens iOS
                                    Application</p>
                            </Col>
                            <Col>
                                <a href={'https://apps.apple.com/ng/app/open-heavens-connect/id1409055190'}
                                   target="_blank" rel="noopener noreferrer">
                                    <Image src={appleStoreIcon} style={{width: 200, height: "auto"}}
                                           className={'float-right'}/></a>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{fontWeight: 100, fontSize: 28}}>As the lead developer, I worked with a team
                                    of four, three Software Developers and one UX/UI Designer to design and develop the
                                    iOS Mobile Application. The application was built using React Native </p>

                                <Image src={iosHomeScreens} style={{margin: '136px 0'}} fluid/>

                                <p style={{fontWeight: 100, fontSize: 28}}>The application functionalities includes user
                                    authentication, devotional and book reader, profile management, and in app
                                    purchases, theme customisation. </p>
                                <Image src={iosDevotionalScreens} style={{margin: '136px 0'}} fluid/>
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
                                <p style={{display: "block", fontSize: 28, fontWeight: 900}}>Openheavens Admin Web
                                    Application</p>

                                <p style={{fontWeight: 100, fontSize: 28}}>A web application was created for admin users
                                    to manage the devotional and book content and to monitor the app user activities.
                                    The application was build using in PHP for the backend, and libraries like bootstrap
                                    and jQuery for the frontend.</p>

                                <Image src={desktopDashboardScreens} style={{margin: '136px 0'}} fluid/>

                                <p style={{fontWeight: 100, fontSize: 28}}>The application functionalities includes
                                    devotional management (create, read, update and delete), book management and users
                                    management </p>
                                <Image src={desktopCRUDScreens} style={{margin: '136px 0'}} fluid/>
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

export default openHeavens;

import React from 'react';

import Row from 'react-bootstrap/es/Row';
import Container from 'react-bootstrap/es/Container';
import Col from 'react-bootstrap/es/Col';
import Image from 'react-bootstrap/es/Image';
import Card from 'react-bootstrap/es/Card';
import Form from "react-bootstrap/es/Form";

import githubLogo from './images/icons/github-logo.svg';
// import behanceLogo from './images/icons/behance-logo.svg';

import openheavensImg from './images/openheavens.png';
import linearAlgebraImg from './images/linear_algebra.png';


import './Home.css';
import CardColumns from "react-bootstrap/es/CardColumns";
import {Link} from "react-router-dom";

// TODO: Email Implementation
const Home: React.FC = () => {
    return <>
        <Container fluid style={{backgroundColor: '#f9f9f9', padding: 24}}>
            <div>
                <Container fluid className={'intro-content'}>
                    <Row style={{padding: 80}}>
                        <Col md={4}>
                            <a href='/' style={{
                                textDecoration: 'none',
                                color: 'black',
                                fontSize: 20,
                                fontWeight: 500,
                                lineHeight: '24px',
                                letterSpacing: 1
                            }}>tolujimoh<span style={{color: '#F17A6E', fontWeight: 900}}>:</span></a>
                        </Col>
                        <Col md={8}>
                            {/*<p style={{letterSpacing: 0.5,  fontSize: 20, maxWidth: 400}}>Here, I try to express my creativity through design and code.</p>*/}
                        </Col>
                    </Row>
                    <Row style={{padding: 80}}>
                        <Col sm={10}>
                            <p style={{fontSize: 40, fontWeight: 500, maxWidth: 1000}} className={'intro-text'}>Tolu — a
                                Software Engineer with passion for designing and building products. Currently studying
                                at the University of Liverpool for a Masters in Advanced Computer Science.</p>
                        </Col>
                        <Col sm={2}>
                            <div style={{width: 64}} className='float-right'>
                                <a href={'https://github.com/tolujimoh'} target={'_blank'}>
                                    <Image src={githubLogo} className={'social-icon'}/>
                                </a>
                                {/*<a href={'http://behance.net/tolu_jimoh'} target={'_blank'}><Image src={behanceLogo} style={{ width: 64, height: 64 }}/></a>*/}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid style={{marginTop: 60, marginBottom: 200, minHeight: 'calc(100vh - 48px)'}}>
                    <div style={{position: 'relative', left: '160px', top: '-100px', display: 'inline-block' }}>
                        <svg height='120'>
                            <text fill='#FF3253' letterSpacing='-1' fontWeight='900' fillOpacity='0' fontSize='88' x='0'
                                  y='90' stroke='#FF3253' strokeWidth='1.5'>Work.
                            </text>
                        </svg>
                    </div>
                    <Row style={{fontSize: 24, letterSpacing: 0.5}}>
                        <Container>
                            <Col md={8}>
                                <p style={{maxWidth: 700, fontWeight: 500}}>My long run goal is to contribute to
                                    products
                                    that solve real-world problems. I strive to
                                    become a part of a design-driven organization.</p>
                                <p style={{ marginTop: 12, fontWeight: 100 }}>Currently working on a detailed case study  for each of my projects</p>
                            </Col>
                        </Container>
                    </Row>
                    <Row>
                        <Container style={{marginTop: 120}}>
                            <CardColumns>
                                <Link to="/">
                                    <Card style={{maxWidth: 480, border: 0, background: "transparent"}}>
                                        <Card.Header style={{
                                            border: 0,
                                            background: 'transparent',
                                            paddingLeft: 0,
                                            color: '#CCCCCC',
                                            fontSize: 20,
                                            fontWeight: 800
                                        }} as="h5">CASE STUDY</Card.Header>
                                        <Card.Img variant="top" src={openheavensImg}/>
                                        <Card.Body
                                            style={{paddingLeft: 0, color: '#222', fontSize: 32, fontWeight: 900}}>
                                            <Card.Text>
                                                Openheavens Mobile Application
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>

                                <Link to="/">
                                    <Card style={{maxWidth: 480, marginTop: 160, border: 0, background: "transparent"}}>
                                        <Card.Header style={{
                                            border: 0,
                                            background: 'transparent',
                                            paddingLeft: 0,
                                            color: '#CCCCCC',
                                            fontSize: 20,
                                            fontWeight: 800
                                        }} as="h5">VISUALLY EXPLAINED</Card.Header>
                                        <Card.Img variant="top" src={linearAlgebraImg}/>
                                        <Card.Body
                                            style={{paddingLeft: 0, color: '#222', fontSize: 32, fontWeight: 900}}>
                                            <Card.Text>
                                                Introduction to Linear Algebra
                                            </Card.Text>
                                        </Card.Body>

                                    </Card>
                                </Link>

                            </CardColumns>
                        </Container>
                    </Row>
                </Container>
                <Container fluid style={{
                    marginTop: 60,
                    minHeight: 'calc(100vh - 48px)',
                    backgroundColor: '#F1E4E8',
                    borderRadius: 12
                }}>
                    <div style={{position: 'relative', paddingLeft: '160px', top: '-60px', display: 'inline-block' }}>
                        <svg height='120'>
                            <text fill='#FF3253' letterSpacing='-1' fontWeight='900' fillOpacity='0' fontSize='88' x='0'
                                  y='90' stroke='#FF3253' strokeWidth='1.5'>Say hi.
                            </text>
                        </svg>
                    </div>
                    <Row className={'contact-title'}>
                        <Col lg={8}>
                            <p style={{fontWeight: 500}}>You can find me on <a
                                href={'https://www.linkedin.com/in/tolulope-jimoh-945b26b7/'}
                                target={'_blank'}>LinkedIn</a>, or <a href={'https://twitter.com/tolujimoh'}
                                                                      target={'_blank'}>Twitter</a>.<br/>
                                Go ahead and contact me via any of those communication channels, but if you’d like you
                                can also send me an email.</p>
                        </Col>
                    </Row>
                    <Row className={'contact-form'}>
                        <Col lg={8}>
                            <Form>
                                <Card>
                                    <div className='card-header'>
                                        @
                                    </div>
                                    <div className='card-body'>
                                        <Row>
                                            <Col md={3}>
                                                <h5 className='card-text'>From:</h5>
                                            </Col>
                                            <Col md={9}>
                                                <Form.Control className="contact-form-input" type="email"
                                                              placeholder="your@email.com"/>

                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}>
                                                <h5 className='card-text'>To:</h5>
                                            </Col>
                                            <Col md={9}>
                                                <h5 className='card-title'>Tolu Jimoh</h5>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}>
                                                <h5 className='card-text'>Subject:</h5>
                                            </Col>
                                            <Col md={9}>
                                                <Form.Control className="contact-form-input" type="text"
                                                              placeholder="Type Message Subject"/>
                                            </Col>
                                        </Row>
                                        <hr/>
                                        <br/>
                                        <h5 className='card-text'>Hi Tolu,</h5>
                                        <Form.Control as="textarea" rows="4" className="contact-form-input"
                                                      placeholder="Type Message"/>
                                        <br/>
                                        <a href='mailto:stjimoh@gmail.com' className='btn btn-primary float-right'>Send
                                            Email</a>
                                    </div>
                                </Card>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    </>
};

export default Home;
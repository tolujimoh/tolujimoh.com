/* eslint no-undef: 0 */

import React from 'react';

import Row from 'react-bootstrap/es/Row';
import Container from 'react-bootstrap/es/Container';
import Col from 'react-bootstrap/es/Col';
import Image from 'react-bootstrap/es/Image';
import Card from 'react-bootstrap/es/Card';
import Form from "react-bootstrap/es/Form";
import CardColumns from "react-bootstrap/es/CardColumns";
import {Link} from "react-router-dom";

import * as emailjs from 'emailjs-com'
import { Notyf } from "notyf";

import githubLogo from './images/icons/github-logo.svg';
// import behanceLogo from './images/icons/behance-logo.svg';

import openheavensImg from './images/openheavens.png';
import linearAlgebraImg from './images/linear_algebra.png';

import 'notyf/notyf.min.css';
import './Home.css';

type appProps = {}

type appState = {
    fromEmail: string,
    subject: string,
    message: string
}

// TODO: Email Implementation
class Home extends React.Component<appProps, appState> {
    state: appState = {
        fromEmail: "",
        subject: "",
        message: ""
    };

    handleFromChange = (event: React.FormEvent<any>) => {
        const fromEmail = event.currentTarget.value;
        this.setState({ fromEmail });
    };
    handleSubjectChange = (event : React.FormEvent<any>) => {
        const subject = event.currentTarget.value;
        this.setState({ subject });
    };
    handleMessageChange = (event : React.FormEvent<any>) => {
        const message = event.currentTarget.value;
        this.setState({ message });
    };

    handleFormSubmit = (event : React.FormEvent<any>) => {
        event.preventDefault();

        const { fromEmail,  subject, message } = this.state;
        const notyf = new Notyf();

        emailjs.send('mailgun','tolujimoh_com_contact_form', {fromEmail,  subject, message }, 'user_3fQbNehvf6N2TABPuadeL')
            .then((response) => {

                this.setState({
                    fromEmail: "",
                    subject: "",
                    message: ""
                }, () => {
                    notyf.success('I have received your message and would get back to you');
                    console.log('SUCCESS!', response.status, response.text);
                });
            }, (err) => {
                notyf.error('Unable to send your message. Please try again later');
                console.log('FAILED...', err);
            });
    };


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
        return (
            <Container fluid className={'main-content'} style={{backgroundColor: '#f9f9f9', padding: 24}}>
                <div>
                    <Container fluid className={'intro-content'}>
                        <Row className={'intro-logo'}>
                            <Col md={4}>
                                <a href='/' >tolujimoh<span style={{color: '#F17A6E', fontWeight: 900}}>:</span></a>
                            </Col>
                            <Col md={8}>
                                {/*<p style={{letterSpacing: 0.5,  fontSize: 20, maxWidth: 400}}>Here, I try to express my creativity through design and code.</p>*/}
                            </Col>
                        </Row>
                        <Row className={'intro-text'}>
                            <Col sm={10}>
                                <p>Tolu
                                    — a
                                    Software Engineer with passion for designing and building products. Currently
                                    studying
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
                    <Container fluid className={'work-content'}>
                        <div style={{position: 'relative', top: '-100px'}}>
                            <Container>
                                <svg height='120' style={{marginLeft: 36}}>
                                    <text fill='#FF3253' letterSpacing='-1' fontWeight='900' fillOpacity='0'
                                          fontSize='88' x='0'
                                          y='90' stroke='#FF3253' strokeWidth='1.5'>Work.
                                    </text>
                                </svg>
                            </Container>
                        </div>
                        <Row style={{fontSize: 24, letterSpacing: 0.5}}>
                            <Container>
                                <Col md={8}>
                                    <p style={{maxWidth: 700, fontWeight: 500}}>My long run goal is to contribute to
                                        products
                                        that solve real-world problems. I strive to
                                        become a part of a design-driven organization.</p>
                                    <p style={{marginTop: 12, fontWeight: 100}}>Currently working on a detailed case
                                        study for each of my projects</p>
                                </Col>
                            </Container>
                        </Row>
                        <Row>
                            <Container style={{marginTop: 120, marginBottom: 120}}>
                                <CardColumns>
                                    <Link to="/">
                                        <Card className={'openheavens-card'}>
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
                                        <Card
                                            className={'linear-algebra-card'}
                                            >
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
                    <Container fluid className={'contact-content'}>
                        <div style={{position: 'relative', top: '-60px'}}>
                            <Container fluid className={'contact-title'}>
                                <svg height='120' style={{marginLeft: 24}}>
                                    <text fill='#FF3253' letterSpacing='-1' fontWeight='900' fillOpacity='0'
                                          fontSize='88' x='0'
                                          y='90' stroke='#FF3253' strokeWidth='1.5'>Say hi.
                                    </text>
                                </svg>
                            </Container>
                        </div>
                        <Row className={'contact-title'}>
                            <Col lg={8}>
                                <p style={{fontWeight: 500}}>You can find me on <a
                                    href={'https://www.linkedin.com/in/tolulope-jimoh-945b26b7/'}
                                    target={'_blank'}>LinkedIn</a>, or <a href={'https://twitter.com/tolujimoh'}
                                                                          target={'_blank'}>Twitter</a>.<br/>
                                    Go ahead and contact me via any of those communication channels, but if you’d like
                                    you
                                    can also send me an email.</p>
                            </Col>
                        </Row>
                        <Row className={'contact-form'}>
                            <Col lg={8}>
                                <Form onSubmit={this.handleFormSubmit}>
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
                                                                  value={this.state.fromEmail} onChange={this.handleFromChange}
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
                                                    <Form.Control className="contact-form-input"
                                                                  type="text" value={this.state.subject} onChange={this.handleSubjectChange}
                                                                  placeholder="Type Message Subject"/>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <br/>
                                            <h5 className='card-text'>Hi Tolu,</h5>
                                            <Form.Control as="textarea" rows="4" className="contact-form-input"
                                                          value={this.state.message} onChange={this.handleMessageChange}  placeholder="Type Message"/>
                                            <br/>
                                            <input type='submit' name='Send Email' className='btn btn-primary float-right'/>
                                        </div>
                                    </Card>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        );
    }
}

export default Home;
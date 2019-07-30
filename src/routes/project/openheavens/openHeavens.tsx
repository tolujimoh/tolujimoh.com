import React from 'react';

import Col from "react-bootstrap/es/Col";
import Row from "react-bootstrap/es/Row";
import Container from "react-bootstrap/es/Container";

import '../Project.css';

type appProps = {}

type appState = {
}


class openHeavens extends React.Component<appProps, appState> {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
        return (
            <>
                <header className="m-3 p-4 card bg-white border-0">
                    <Container fluid>
                        <Row style={{padding: 80, paddingTop: 20, paddingBottom: 20}}>
                            <Col md={6}>
                                <a href='/' style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                    fontSize: 20,
                                    fontWeight: 500,
                                    lineHeight: '24px',
                                    letterSpacing: 1
                                }}>tolujimoh<span style={{color: '#F17A6E', fontWeight: 900}}>:</span></a>
                            </Col>
                            <Col md={6} style={{textAlign: 'right'}}>
                                <p style={{color: '#CCCCCC', fontSize: 16, fontWeight: 800, marginBottom:0}}>CASE STUDY</p>
                            </Col>
                        </Row>
                    </Container>
                </header>
                <main role="main" className="container" style={{height: 'calc(100vh - 275px)'}}>

                </main>
                <footer className="m-3 p-4 card bg-dark border-0">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="text-white text-center mt-4 mb-0" style={{}}>&copy; 2019. Tolu Jimoh</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }

}

export default openHeavens;

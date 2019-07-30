import React from 'react';

import Col from "react-bootstrap/es/Col";
import Row from "react-bootstrap/es/Row";
import Container from "react-bootstrap/es/Container";

import '../Project.css';
import './linearAlgebra.css';

type appProps = {}

type appState = {
    vectors: Vector[],
    origin: Point,
    selectedElement: number,
    mouseX: number,
    mouseY: number
}

class Point {
    constructor(public x: number, public y: number) {
    }
}

class Vector {
    constructor(public x: number, public y: number, public origin: Point) {

    }
}

const vectorColors = ['#DB324D', '#4B88A2', '#252627', '#F9DC5C', '#042A2B'];


class linearAlgebra extends React.Component<appProps, appState> {
    private canvasRef = React.createRef<HTMLCanvasElement>();
    private sidebarRef = React.createRef<HTMLDivElement>();

    private origin = new Point(5, 5);
    public state: appState = {
        origin: this.origin,
        vectors: [new Vector(1, 2, this.origin), new Vector(1, 0, this.origin)],
        selectedElement: -1,
        mouseX: 0,
        mouseY: 0
    };

    constructor(props: appProps) {
        super(props);

        this.drawGrid = this.drawGrid.bind(this);
        this.drawVectors = this.drawVectors.bind(this);
        this.drawMousePath = this.drawMousePath.bind(this);
    }

    componentDidMount(): void {
        requestAnimationFrame(this.drawGrid);
        requestAnimationFrame(this.drawVectors);
        this.manageMouseEvents();
    }

    getCoordinatesOnCanvas(element: Vector | Point): Point {
        const canvas = this.canvasRef.current!;

        if (element instanceof Vector) {
            return {
                x: (element.origin.x + element.x) * 50,
                y: (Math.floor(canvas.height / 50) - element.origin.y - element.y) * 50
            }
        }

        return {
            x: element.x * 50,
            y: (Math.floor(canvas.height / 50) - element.y) * 50
        }

    }

    drawGrid() {
        const canvas = this.canvasRef.current!;
        const ctx = canvas.getContext("2d");

        const sidebar = this.sidebarRef.current!;

        canvas.width = Math.floor(sidebar.offsetWidth / 50) * 50 + 1;
        canvas.height = Math.floor(sidebar.offsetWidth / 50) * 50 + 1;

        const {origin} = this.state;

        ctx!.clearRect(0, 0, canvas.width, canvas.height);

        for (let x = 0; x <= canvas.height / 50; x++) {
            ctx!.beginPath();

            if (x === Math.floor(canvas.height / 50) - origin.y)
                ctx!.strokeStyle = "rgba(0,0,0,1)";
            else
                ctx!.strokeStyle = "rgba(0,0,0,0.1)";

            ctx!.moveTo(0.5, 0.5 + x * 50);
            ctx!.lineTo(0.5 + canvas.width, 0.5 + x * 50);
            ctx!.stroke();
        }

        for (let y = 0; y <= canvas.width / 50; y++) {
            ctx!.beginPath();

            if (y === origin.x)
                ctx!.strokeStyle = "rgba(0, 0, 0, 1)";
            else
                ctx!.strokeStyle = "rgba(0, 0, 0, 0.1)";


            ctx!.moveTo(0.5 + y * 50, 0.5);
            ctx!.lineTo(0.5 + y * 50, 0.5 + canvas.height);
            ctx!.stroke();

        }

        for (let x = 1; x < canvas.height / 50 - 1; x++) {
            if (x === Math.floor(canvas.height / 50) - origin.y) continue;

            ctx!.beginPath();
            ctx!.strokeStyle = "rgba(0, 0, 0, 1)";
            ctx!.moveTo(0.5 + origin.x * 50 - 10, 0.5 + x * 50);
            ctx!.lineTo(0.5 + origin.x * 50 + 10, 0.5 + x * 50);
            ctx!.stroke();

        }

        for (let y = 1; y < canvas.width / 50 - 1; y++) {
            if (y === origin.x) continue;

            ctx!.beginPath();
            ctx!.strokeStyle = "rgba(0, 0, 0, 1)";
            ctx!.moveTo(0.5 + y * 50, 0.5 + (Math.floor(canvas.height / 50) - origin.y) * 50 - 10);
            ctx!.lineTo(0.5 + y * 50, 0.5 + (Math.floor(canvas.height / 50) - origin.y) * 50 + 10);
            ctx!.stroke();

        }
    }

    drawMousePath() {
        const canvas = this.canvasRef.current!;
        const ctx = canvas.getContext("2d");

        ctx!.beginPath();
        ctx!.arc(this.state.mouseX, this.state.mouseY, 10, 0, Math.PI * 2, false);
        ctx!.fillStyle = "rgba(255, 0, 255, 0.5)";
        ctx!.fill();
    }


    drawVectors() {
        const canvas = this.canvasRef.current!;
        const ctx = canvas.getContext("2d");

        const {vectors} = this.state;


        for (let v = 0; v < vectors.length; v++) {
            let vectorCords = this.getCoordinatesOnCanvas(vectors[v]);
            let originCords = this.getCoordinatesOnCanvas(vectors[v].origin);

            ctx!.beginPath();
            ctx!.arc(
                0.5 + vectorCords.x,
                0.5 + vectorCords.y,
                10, 0, Math.PI * 2, false);
            ctx!.fillStyle = vectorColors[v % vectorColors.length];
            ctx!.fill();

            ctx!.beginPath();
            ctx!.strokeStyle = vectorColors[v % vectorColors.length];
            ctx!.moveTo(0.5 + originCords.x, 0.5 + originCords.y);
            ctx!.lineTo(0.5 + vectorCords.x, 0.5 + vectorCords.y);
            ctx!.lineWidth = 3;
            ctx!.stroke();
        }

    }

    manageMouseEvents() {
        const canvas = this.canvasRef.current!;

        // Click Down
        canvas.addEventListener('mousemove', (event) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            const {selectedElement} = this.state;

            if (selectedElement > -1) {
                this.setState((prevState) => {

                    let vectors = [...prevState.vectors];

                    vectors[selectedElement].x = mouseX / 50 - vectors[selectedElement].origin.x;
                    vectors[selectedElement].y = Math.floor(canvas.height / 50) - mouseY / 50 - vectors[selectedElement].origin.y;

                    return ({mouseX, mouseY, vectors});
                }, () => {
                    requestAnimationFrame(this.drawGrid);
                    requestAnimationFrame(this.drawVectors);
                    requestAnimationFrame(this.drawMousePath);
                });
            } else {
                this.setState({mouseX, mouseY}, () => {
                    requestAnimationFrame(this.drawGrid);
                    requestAnimationFrame(this.drawVectors);
                    requestAnimationFrame(this.drawMousePath);
                });
            }
        }, false);

        canvas.addEventListener('mousedown', (event) => {
            const rect = canvas.getBoundingClientRect();

            const {vectors} = this.state;

            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            let selectedElement = -1;

            for (let v = vectors.length - 1; v >= 0; v--) {
                let vCords = this.getCoordinatesOnCanvas(vectors[v]);
                if (Math.sqrt((vCords.x - mouseX) * (vCords.x - mouseX) + (vCords.y - mouseY) * (vCords.y - mouseY)) < 10) {
                    selectedElement = v;
                    break;
                }
            }

            if (selectedElement > -1) {
                this.setState({selectedElement});
            }

        });

        // Release Click
        canvas.addEventListener('mouseup', () => {
            const {selectedElement} = this.state;

            if (selectedElement > -1) {
                this.setState({selectedElement: -1});
            }

        });

        canvas.addEventListener('mouseout', () => {
            requestAnimationFrame(this.drawGrid);
            requestAnimationFrame(this.drawVectors);
        });

        document.addEventListener('mouseup', () => {
            canvas.dispatchEvent(new Event("mouseup"));
        });

    }

    shouldComponentUpdate(nextProps: Readonly<appProps>, nextState: Readonly<appState>, nextContext: any): boolean {
        return false;
    }

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
                                <p style={{color: '#CCCCCC', fontSize: 16, fontWeight: 800, marginBottom:0}}>VISUALLY EXPLAINED</p>
                            </Col>
                        </Row>
                    </Container>
                </header>
                <main role="main" className="container">
                    <div className="row">
                        <div className="col-lg-6 sidebar">
                            <div className="sidebar__inner" ref={this.sidebarRef}>
                                <div className="pt-5 pb-5 text-center">
                                    <canvas ref={this.canvasRef}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 p-lg-5 content">
                            <p className="content__title">Introduction to Linear Algebra</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus consequat diam at
                                blandit. Aenean ornare consectetur mauris, at suscipit metus dignissim quis. Praesent
                                pulvinar tristique sapien nec interdum. Nunc a ligula dignissim, vehicula nibh non,
                                venenatis urna. Duis mattis dui eget lorem vestibulum ornare. Aenean dapibus dictum
                                neque a fermentum. Sed facilisis, est ac scelerisque consectetur, tellus felis congue
                                enim, at feugiat mauris arcu at ex. Maecenas congue, felis nec dictum vestibulum, massa
                                lorem imperdiet mi, eget blandit lorem velit ac dui.</p>
                            <p>Duis facilisis ultricies lacus, vitae facilisis enim blandit vel. Morbi tincidunt, felis
                                eget elementum tincidunt, diam nisl mattis lectus, vel auctor justo nibh nec ante.
                                Vivamus tempus nec felis at pellentesque. Aenean nec lectus ullamcorper, faucibus risus
                                eu, interdum dui. Aliquam tristique, felis vitae varius condimentum, quam nunc bibendum
                                quam, vel efficitur odio neque id turpis. Suspendisse tincidunt urna imperdiet, volutpat
                                ante ac, vulputate odio. Sed cursus, mauris sed cursus accumsan, sem nisi commodo velit,
                                sit amet volutpat tellus augue in velit. Mauris nec eleifend magna, id posuere nisl. Nam
                                ultrices vestibulum sem, a sodales lorem malesuada vel. Sed eu nunc ut diam posuere
                                condimentum vel sed lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nulla id facilisis ligula. Proin tempor, massa vel faucibus eleifend, ipsum orci feugiat
                                massa, id tincidunt nibh orci sed diam. Aenean lorem lectus, tincidunt at luctus sed,
                                sagittis et leo. In eget feugiat elit. Aliquam erat volutpat.</p>
                            <p>Maecenas ut erat libero. Sed a purus vulputate, convallis orci eget, consequat ante.
                                Quisque a nisl mollis tortor mattis euismod a sit amet nulla. Aliquam enim mauris,
                                tempor non bibendum a, convallis nec lacus. Suspendisse ac enim convallis, scelerisque
                                nibh vitae, fringilla neque. Sed aliquet, ligula vel fringilla ullamcorper, metus tellus
                                euismod libero, sit amet maximus odio lorem sed ligula. Praesent suscipit, quam sit amet
                                ullamcorper congue, mauris quam faucibus lacus, sit amet commodo sem sem vel mi. In
                                condimentum egestas justo vel finibus.
                            </p>
                            <p>Etiam a facilisis nisl. Praesent feugiat gravida elit eu aliquam. Ut iaculis lobortis
                                magna, non eleifend lacus gravida ut. Proin eget luctus nibh. Sed pulvinar mi sem, in
                                vestibulum arcu sollicitudin sed. Aenean in purus dignissim magna dictum fermentum eu
                                non nibh. Vivamus rutrum ultricies velit, quis feugiat lorem. Cras vitae purus eros.
                                Integer aliquam non dolor vel fringilla. Suspendisse sollicitudin pretium facilisis.
                                Cras eleifend eget elit nec ultricies. Nullam accumsan suscipit est vitae dictum.
                                Pellentesque diam velit, interdum non luctus ut, molestie ut nulla. Maecenas laoreet
                                orci at consectetur dignissim. Donec ut erat vel metus egestas lacinia in vitae nunc.
                            </p>
                            <p>Phasellus facilisis quam purus, non rutrum ipsum egestas at. Nulla ut nisl congue,
                                feugiat tellus ac, hendrerit nulla. Phasellus ultrices magna vitae erat auctor
                                consectetur a a ante. Nam quis massa sit amet sapien imperdiet feugiat. Duis lacinia ex
                                sed efficitur tristique. Praesent lacinia elit nulla, quis faucibus nisi viverra ac.
                                Fusce finibus laoreet suscipit.
                            </p>
                        </div>
                    </div>
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

export default linearAlgebra;

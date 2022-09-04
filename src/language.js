import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function Language(props){
    const style = {
        'background': `linear-gradient(to right, white ${props.get.width}%, rgb(255, 137, 3) ${props.get.width}%)`,
        'width': '100%',
        'height': '20px',
        'border-radius': '10px',
        'flex': '0.4 0 0%'
    }
    return (
        <Row>
            <Col>{props.get.title}</Col>
            <Col style={style}></Col>
        </Row>
    )
}
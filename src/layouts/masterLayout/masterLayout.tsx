import React from 'react';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';


const MasterLayout = (props: any) => {
    return (
        <>
            <Container>
                <Row>
                    <Col>.col</Col>
                </Row>
            </Container>
        </>
    )
}

// export default MasterLayout
export {MasterLayout} // this is used when we want to export using index.ts
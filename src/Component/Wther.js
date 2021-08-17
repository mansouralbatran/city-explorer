import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
class Wther extends React.Component {
    render() {

        return (<>

        {this.props.arraydata.map((element)=>{
            return(



                <Card >


                    <Card.Title>data:{element.datetime}</Card.Title>
                    <Card.Text>
                        description :{element.descption}
                    </Card.Text>

                </Card>)})}
                </>
        );
       
        
       
       

    }

};
export default Wther
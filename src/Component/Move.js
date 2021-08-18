import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
class Move extends React.Component {
    render() {

        return (<>

        {this.props.arraydata.map((element,index)=>{
            console.log('uuuuuu',element);
            return(
            


                <Card key={index}>


                    <Card.Title>titil :{element.titel}</Card.Title>
                
                   <Card.Img src={element.imagurl} alt=""/>
                    

                </Card>)})}
                </>
        );
       
        
       
       

    }

};
export default Move


import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationout:{ },
      imputloction:'',
      showData: false

    }



  }
  gitloction = async (evnt) => {
    evnt.preventDefault();
    let curntloction = evnt.target.city.value 

    let data1= `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${curntloction}&format=json`

    // let data1 = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.imputloction}&format=json`;
    // console.log(data1);
    




    


    let resultData = await axios.get(data1);

    
    await this.setState({
      locationout:resultData.data[0],
      imputloction:curntloction,
      showData: true,

    
    });
    try{let data3 = await axios.get(`${process.env.REACT_APP_SERVER_LINK}/getDataFromweathwr?CityName=${curntloction}&lat=${this.state.locationout.lon}&lon=${this.state.locationout.lat}`)
    console.log("ddddddddddd",data3);}
    catch(error) {let data3 =await axios.get(`https://firstapplicationformansour.herokuapp.com/getDataFromweathwr?CityName=${curntloction}&lat=${this.state.locationout.lat}&lon=${this.state.locationout.lon}`)}




    let dataimg =`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationout.lat},${this.state.locationout.lon}`

    let dataresult2 = await axios.get(dataimg);
    // console.log("rrrrrrrrrrrrr",dataresult2);

 
};


render(){

  return (<>

    <form onSubmit={this.gitloction}>
      <label>loction Name </label>
      <input type='text' name='city' placeholder='locationname' />
      <button type='submit'>submit</button>
      


    </form>
    {this.state.showData &&
      <p>{this.state.imputloction} Lat:{this.state.locationout.lat} /Lon:{this.state.locationout.lon} </p>
    }


    <p>loction </p>
    {this.state.showData &&<img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationout.lat},${this.state.locationout.lon}`} alt="" />}





  </>)
}

};

export default App


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
    let dataimg =`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationout.lat},${this.state.locationout.lon}&size=600x600&zoom=14&path=fillcolor:%2390EE90|weight:2|color:blue|17.452945,78.380055|17.452765,78.382026|17.452020,78.381375|17.452045,78.380846|17.452945,78.380055`

    let dataresult2 = await axios.get(dataimg);
    console.log("rrrrrrrrrrrrr",dataresult2);

 
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





  </>)
}

};

export default App
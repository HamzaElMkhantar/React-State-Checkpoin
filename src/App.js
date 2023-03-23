
import { useEffect, useState , Component } from 'react';
import './App.css';
import Profile from './Profile/Profile';
import img from './image/IMG_5416.jpg'

class App extends Component{


  constructor(props){
    super(props);
      this.state = {
        person : {
            fullName: 'Hamza El Mkhantar',
            bio : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi fuga officiis rerum qui consectetur cupiditate quos ratione facilis facere optio!' ,
            imgSrc : img,
            profession:'full stack developer',
            toggleBtn : false

          },
          mountedTime: new Date(),
          intervalId: null,
          elapsedTime: 0 ,
      }
  }


  componentDidMount() {
    this.setState({
      intervalId: setInterval(this.updateElapsedTime, 1000)
    });
  }


  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }


  updateElapsedTime = () => {
    const currentTime = new Date();
    const elapsedTime = (currentTime - this.state.mountedTime) ;
    this.setState({ elapsedTime });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.lastMountTime !== prevState.lastMountTime) {
  //     const elapsedTime = new Date() - this.state.lastMountTime;
  //     this.setState({ elapsedTime });
  //   }
  // }

  // const [person,setPerson] = useState({
    //   fullName: 'Hamza El Mkhantar',
    //   bio : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi fuga officiis rerum qui consectetur cupiditate quos ratione facilis facere optio!' ,
    //   imgSrc : img,
    //   profession:'full stack developer',
    //   toggleBtn : true
    
    // })
    render(){
      const handleBtn = () => {
        const newElapsedTime = this.state.toggleBtn ? 0 : this.state.elapsedTime;
        this.setState({ toggleBtn: !this.state.toggleBtn});
        this.setState({
          mountedTime: new Date(),
          intervalId: null,
          elapsedTime: 0
        })
      };
      
    // const { lastMountTime, elapsedTime } = this.state;
    console.log(this.state.toggleBtn)
    return (
      <div className="App">
  
        <Profile
          fullName={this.state.person.fullName}
          bio={this.state.person.bio}
          profession={this.state.person.profession}
          imgSrc={this.state.person.imgSrc}
          elapsedTim={this.state.elapsedTime}
          toggle={this.state.toggleBtn}
           />
          {
            !this.state.toggleBtnBtn ?
            <button onClick={ () => handleBtn() 
                                    } > show  </button>
            :
            <button onClick={ () => handleBtn()} > hide  </button>
           }

          <p>Time elapsed since mount:  { Math.floor(this.state.elapsedTime / 1000) } seconds</p>


      </div>
    );
  }
}

export default App ;

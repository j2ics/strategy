import React, {Fragment} from "react";
import "./App.css";
import Car from "./components/Car";
import DriversForm from "./components/DriversForm";
import ROSTER from "./assets/roster";
import _ from "lodash";
import Faker from "faker";
import RaceDataForm from "./components/RaceDataForm";
import EditCar from "./components/EditCar";
import {Info} from './components/Info'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // driversReady: false,
      driversReady: false,
      // drivers: [],
      driver: {
        zeroFuelLaptime: 62376,
        driverName: `Default Driver`,
        image: Faker.image.image(),
        weightCost: 30,
        burnRate: 2.35,
        car: { makeModel: "BMW M6 GTLM", fuelCapacity: 105 },
        liveryColor: _.sample([
          "blue",
          "red",
          "silver",
          "grey",
          "green",
          "orange",
          "purple"
        ])
      },
      race: { laps: 55, pitTime: 22000 }
    };
  }

  updateDriver = d => {
    this.setState(prevState => {
      return {
        driversReady: true,
        driver: d
      };
    });
  };

  updateRace = r => {
    this.setState({ race: r });
  };

  showDrivers = () => {
    // return this.state.cars.map((driver, index) => {
    return <Car driver={this.state.driver} race={this.state.race} />;
    // });
  };

  render() {
    return (
      <div className="App">
        <h1>Race Strategy App</h1>
        <RaceDataForm race={this.state.race} onUpdateRace={this.updateRace} />
        <div className="jumbotron">
          <div className="container">
            {/* <p>Click on Driver to Edit</p> */}
            <div className="row">
              {this.state.driversReady == false ? (
                <Fragment>
                <EditCar
                  onUpdateDriver={this.updateDriver}
                  roster={ROSTER.cars}
                  driver={this.state.driver}
                  // race={this.state.race}
                  />
                  {this.showDrivers()}
                  </Fragment>
              ) : (
                <h2>WHoops</h2>
              )}
            </div>
          </div>
        </div>
        <Info />
      </div>
    );
  }
}

export default App;

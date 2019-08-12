import React from "react";
import "../assets/Car.css";

class Car extends React.Component {
  constructor(props) {
    super();
    this.state = { driver: props.driver, stints: 1 };
  }
  updateStints = e => {
    this.setState({ stints: e.target.value });
  };

  checkCapacity = () => {
    return (
      this.state.driver.car.fuelCapacity >=
      this.state.driver.burnRate * (this.props.race.laps / this.state.stints)
    );
  };

  getRaceTime = () => {
    const { pitTime, laps } = this.props.race;
    const { zeroFuelLaptime, weightCost } = this.state.driver;
    const { stints } = this.state;
    const pitTimeLost = (stints - 1) * pitTime;
    const bareLaps = laps * zeroFuelLaptime;
    let fuelWeightPenalty = 0;
    const lapsThisStint = laps / stints;

    for (let l = 0; l < lapsThisStint; l++) {
      const lapsRemaining = lapsThisStint - l;
      const fuelPenaltyThisLap = parseInt(lapsRemaining * weightCost);
      fuelWeightPenalty = fuelWeightPenalty + fuelPenaltyThisLap;
    }

    const totalTime = pitTimeLost + bareLaps + fuelWeightPenalty;

    return { totalTime, fuelWeightPenalty };
  };
  componentWillReceiveProps = props => {
    this.setState({ driver: props.driver });
  };
  msToHTime(s) {
    // Pad to 2 or 3 digits, default is 2
    var pad = (n, z = 2) => ("00" + n).slice(-z);
    return (
      pad((s / 3.6e6) | 0) +
      " : " +
      pad(((s % 3.6e6) / 6e4) | 0) +
      " : " +
      pad(((s % 6e4) / 1000) | 0) +
      "." +
      pad(s % 1000, 3)
    );
  }
  msToTime(s) {
    // Pad to 2 or 3 digits, default is 2
    var pad = (n, z = 2) => ("00" + n).slice(-z);
    return (
      pad(((s % 3.6e6) / 6e4) | 0) +
      ":" +
      pad(((s % 6e4) / 1000) | 0) +
      "." +
      pad(s % 1000, 3)
    );
  }
  render() {
    const { driver } = this.state;
    return (
      <div
        className="card col-sm-12"
        style={{ width: "18rem", borderColor: driver.liveryColor }}
      >
        <h5 className="card-title">{driver.driverName}</h5>
        <div className="card-body">
          <h6 className="card-title">Type: {driver.car.makeModel}</h6>
          <p>
            Fuel Use: {driver.burnRate} per lap - Maximum Fuel:{" "}
            {driver.car.fuelCapacity}
          </p>
          <p className="card-title">
            Average Lap: {this.msToTime(driver.zeroFuelLaptime)}
          </p>
          <form>
            <label htmlFor="stops">How many stints?</label>
            <br />
            <input
              style={{ textAlign: "center", width: "70%" }}
              type="number"
              min="1"
              value={this.state.stints}
              onChange={this.updateStints}
            />
            <hr />
            <button className="btn btn-success">Start Over</button>
            <hr />
          </form>
          {this.checkCapacity() || this.state.stints <= 0 ? (
            <h4 style={{ color: "green" }}>
              Load{" "}
              {Math.ceil(
                (this.props.race.laps / this.state.stints) *
                  this.state.driver.burnRate
              )}{" "}
              liters of fuel per stint
            </h4>
          ) : (
            <h3 style={{ color: "red" }}>
              !! Insufficient Fuel Capacity !!
            </h3>
          )}
          <h3>
            Estimated Time:{" "}
            {this.state.stints >= 1
              ? this.msToHTime(this.getRaceTime().totalTime)
              : null}
          </h3>
          <h6>
            Total Time Lost To Fuel Weight:{" "}
            {this.state.stints >= 1
              ? this.msToHTime(
                  this.getRaceTime().fuelWeightPenalty * this.state.stints
                )
              : null}
          </h6>
          <h6>
            Total Time Lost To Pit Stops:{" "}
            {this.state.stints >= 1
              ? this.msToHTime(
                  (this.state.stints-1)*this.props.race.pitTime
                )
              : null}
          </h6>
        </div>
      </div>
    );
  }
}

export default Car;

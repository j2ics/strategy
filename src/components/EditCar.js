import React from "react";

class EditCar extends React.Component {
  state = {
    driver: this.props.driver,
    highFuel: 0,
    lowFuel: this.props.driver.zeroFuelLaptime/1000
  };
  handleSelectCar = e => {
    this.setState({
      driver: Object.assign({}, this.state.driver, {
        car: JSON.parse(e.target.value)
      })
    }, this.computeMaxLaps);
  };
  handleChangeLow = t => {
    this.setState({ lowFuel: t.target.value }, this.calcWeightCost);
  };
  handleChangeHigh = t => {
    this.setState({ highFuel: t.target.value }, this.calcWeightCost);
  };
  setCar = () => {
    this.props.onUpdateDriver(
      Object.assign(
        {},
        { ...this.state.driver },
        { zeroFuelLaptime: this.state.lowFuel * 1000 }
      )
    );
  };
  calcWeightCost = () => {
    console.log("costcalc");
    const { highFuel, lowFuel } = this.state;
    const literWeight = v => v * 0.75;
    const lapDelta = (highFuel - lowFuel) * 1000;
    const endCost = (
      lapDelta / literWeight(this.state.driver.fuelCapacity)
    ).toFixed(3);
    this.setState(prevState => {
      return {
        driver: Object.assign({}, prevState.driver, { weightCost: endCost })
      };
    });
  };

  updateBurnRate = e => {
    const newRate = e.target.value;
    this.setState(prevState => {
      return {
        driver: Object.assign({}, prevState.driver, {
          burnRate: newRate
        })
      };
    });
  };

  render() {
    return (
      <div className="card card col-sm-12">
        <h5 className="card-title">Enter Car Testing Data</h5>
        <div className="card-body">
          <label>Select Car</label>
          <select style={{ width: "85%" }} onChange={this.handleSelectCar}>
            {this.props.roster.map((car, index) => {
              return (
                <option key={index} value={JSON.stringify(car)}>
                  {car.makeModel}
                </option>
              );
            })}
          </select>
          <h6>{this.state.driver.car.fuelCapacity} liters of fuel</h6>
          <hr />
          <div className="row">
            <div className="card card col-sm-6">
              <h3>Fuel Calculation</h3>
              <h4 style={{ color: "blue" }}>
                Current Fuel Rate:{" "}
                {(this.state.driver.weightCost / 1000).toFixed(3)}{" "}
                seconds/lap/kg
              </h4>
              {this.state.driver.weightCost > 45 && (
                <React.Fragment>
                  <h6 style={{ color: "red" }}>
                    This is a HIGH fuel-weight impact.
                  </h6>
                  <h6 style={{ color: "maroon" }}>
                    Only accept this value if you are setting consistant
                    laptimes
                  </h6>
                </React.Fragment>
              )}
              <p>Enter times in seconds, (ie. 64.395)</p>
              <div
                className="form-group"
                style={{ width: "95%", textAlign: "center" }}
              >
                <label>Low Fuel Laptime (Start w/ 10 liters):</label>
                <input
                  type="number"
                  step=".001"
                  min="0"
                  value={this.state.lowFuel}
                  onChange={this.handleChangeLow}
                />
              </div>
              <div
                className="form-group"
                style={{ width: "95%", textAlign: "center" }}
              >
                <label>High Fuel Laptime (Start w/ max fuel):</label>
                <input
                  type="number"
                  step=".001"
                  min="0"
                  value={this.state.highFuel}
                  onChange={this.handleChangeHigh}
                />
              </div>
            </div>
            <div className="card card col-sm-6">
              <h3>Lap Information</h3>
              <h5>Current Best Laptime = {this.state.lowFuel}</h5>
              <div
                className="form-group"
                style={{ width: "95%", textAlign: "center" }}
              >
                <label>Observed Fuel Consumption</label>
                <input
                  type="number"
                  step=".01"
                  value={this.state.driver.burnRate}
                  onChange={this.updateBurnRate}
                />
              </div>
              <h6>Max laps on full tank: {Math.floor(this.state.driver.car.fuelCapacity/this.state.driver.burnRate)}</h6>
              <h6 style={{color:"maroon"}}>
                A full tank will slow you by {((this.state.driver.weightCost * this.state.driver.car.fuelCapacity)/1000).toFixed(3)} seconds
              </h6>
            </div>
          </div>
          <hr />
          <button
            onClick={this.setCar}
            href="#"
            className="btn btn-warning"
          >
            Plan Stints
          </button>
        </div>
      </div>
    );
  }
}

export default EditCar;

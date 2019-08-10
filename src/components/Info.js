import React from "react";

export const Info = () => {
  return (
    <div className="container" style={{textAlign: "left"}}>
      <h4>How to use this app:</h4>
      <p>
        To use this app, you'll need to set aside some testing time. It is
        designed to give you a chance to plan an ideal race strategy for YOUR
        specific driving characteristics.{" "}
      </p>
      <p>Follow these steps to plan your race during testing:</p>
      <ol>
        <li>Select a car, or choose "Other" and enter your fuel capacity</li>
        <li>
          Add 10 liters of fuel, and run several laps. Enter your best time in
          seconds under "Low Fuel Laptime"
        </li>
        <li>
          Completely fill your fuel tank and run several more laps. Enter your
          best time in seconds under "High Fuel Laptime"
        </li>
      </ol>

      <p>
        We'll need two more pieces of information, which can be gathered at any
        time in testing or practice.
      </p>

      <ul>
        <li>
          Use your MOTEC display in-car to evaluate how many liters of fuel you
          use per lap, and enter this value in "Observed Fuel Consumption"
        </li>
        <li>
          We need to know how long a race-accurate pit stop will take for the
          chosen track.
          <ul>
            <li>You can time this any way you like</li>
            <li>
              NOTE: The most accurate way to do this is to run two laps, with a
              pit stop in between, then subtract two normal laps from their
              combined time. This Delta is the pit stop time
            </li>
          </ul>
        </li>
      </ul>

      <p>
        At this point, we have a valid picture of your pace and fuel usage.
        Click "Plan Stints" to move on.
      </p>

      <ol>
        <li>Enter the number of laps in the header</li>
        <li>If you have not computed your pit stop time, do so now (don't forget to time a stop with fuel/tires/whatever combination you'll need</li>
      </ol>

      <p>You can now start to increase or decrease the number of stints you may try. Look for the lowest possible total "Estimated Time" which allows for you fuel capacity.</p>
    </div>
  );
};

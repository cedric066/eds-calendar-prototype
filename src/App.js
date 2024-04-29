/* 
  WARNING: THIS IS A PROTOTYPE - SOME FUNCTIONALITY MAY BE MISSING
  Big Calendar Docs: https://jquense.github.io/react-big-calendar/examples/?path=/story/about-big-calendar--page 
*/
import React from "react";
import events from "./events";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Set the locale for the calendar
const localizer = momentLocalizer(moment);

// Render the calendar
function App() {
  return (
    <div className="App">
      <h1>Calendar Prototype</h1>
      <Calendar
        defaultDate={new Date(2024, 3, 1)}
        events={events}
        localizer={localizer}
        onSelectEvent={(event) => window.alert(`Event clicked: ${event}`)}
        popup={true}
        step={60}
        style={{ height: 700 }}
        views={["month", "week", "work_week", "day"]}
      />
    </div>
  );
}

export default App;

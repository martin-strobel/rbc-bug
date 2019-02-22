import React from "react";
import { withRouter } from "react-router-dom";
import moment from "moment";
import BigCalendar from "react-big-calendar";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = BigCalendar.momentLocalizer(moment);
export class DashboardCalendar extends React.Component {
  onSelectSlot = props => {
    this.props.history.push("/rbc-ie11-bug/calendar", { date: props.start });
  };

  render() {
    return (
      <div style={{ height: "100vh" }}>
        <BigCalendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          views={["month"]}
          selectable={true}
          onSelectSlot={this.onSelectSlot}
          popup={false}
          events={[]}
        />
      </div>
    );
  }
}

export default withRouter(DashboardCalendar);

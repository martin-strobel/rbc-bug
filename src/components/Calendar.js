import React from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = BigCalendar.momentLocalizer(moment);
const Calendar = withDragAndDrop(BigCalendar);

export class FullCalendar extends React.Component {
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Calendar
          localizer={localizer}
          events={[]}
          defaultDate={
            this.props.location.state
              ? this.props.location.state.date
              : new Date()
          }
          defaultView="week"
          selectable={true}
          resizable={true}
        />
      </div>
    );
  }
}

export default withRouter(FullCalendar);
import React from "react";
import moment from "moment";

const handleValidDate = (date) => {
  const d = new Date(date);
  const date1 = moment(d);
  if (!date1.isValid()) return "Time is invalid";
  return date1.format("DD MMM Y");
};

const handleValidTime = (time) => {
  const time1 = new Date(time);
  const getHour = time1.getUTCHours();
  const getMin = time1.getUTCMinutes();
  const getTime = `${getHour}:${getMin}`;
  var meridiem = "";
  if (getHour >= 12) {
    meridiem = "PM";
  } else {
    meridiem = "AM";
  }
  const updateTime = moment(getTime, "hh:mm").format("hh:mm") + " " + meridiem;
  return updateTime;
};

const Rating = (cell) => {
  return (
    <React.Fragment>
      <span>
        <span className="badge bg-light text-body fs-12 fw-medium">
          <i className="mdi mdi-star text-warning me-1"></i>
          {cell.getValue()}
        </span>
      </span>
    </React.Fragment>
  );
};

const Published = (cell) => {
  return (
    <React.Fragment>
      <span>
        {handleValidDate(cell.getValue()?.join(" "))}
        <small className="text-muted ms-1">{handleValidTime(cell.value)}</small>
      </span>
    </React.Fragment>
  );
};

const Price = (cell) => {
  return <React.Fragment>{"$ " + cell.getValue() + ".00"}</React.Fragment>;
};

export { Rating, Published, Price };

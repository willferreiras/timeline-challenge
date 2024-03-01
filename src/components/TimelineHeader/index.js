import { format } from "date-fns";

export const Header = ({ timelineDatesRange }) => {
  return (
    <>
      <div className="dashboard-header">
        {timelineDatesRange.map((date) => (
          <div key={date} className="dashboard-header-item">
            {format(date, "MM/dd/yyyy")}
          </div>
        ))}
      </div>
    </>
  );
};

import { areDatesEqual, getDaysDifference } from "../../../utils/date";
import { eventItemStyle } from "../../../utils/constants";
import { Event } from "../../TimelineEvent";

export const DashboardItem = ({ items, timelineDatesRange }) => {
  let skipLimit = 0;

  return timelineDatesRange.map((date, index) => {
    if (index < skipLimit) return;

    const event = items?.find((item) =>
      areDatesEqual(new Date(item.startDate), new Date(date))
    );

    if (!event) {
      return <div key={date} className="event-block"></div>;
    }

    const differenceInDaysValue = getDaysDifference(
      event.endDate,
      event.startDate
    );
    skipLimit = differenceInDaysValue + index;

    return (
      <Event
        key={event.eventId}
        event={event}
        customStyle={{
          width: eventItemStyle(differenceInDaysValue),
          backgroundColor: event.color,
        }}
      />
    );
  });
};

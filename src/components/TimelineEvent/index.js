export const Event = ({ event, customStyle }) => {
  return (
    <div className="event" style={customStyle}>
      <p className="event-title ">{event.eventName}</p>
    </div>
  );
};

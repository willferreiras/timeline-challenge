import React, { useCallback, useState } from "react";
import { HorizontalTimeline } from "./components/Timeline";
import "./index.css";
import { colors, mockedInitialEvents } from "./mock";
import { formatAndGroupTimelineData } from "./utils/timelineFormat";
import { identifyTimelineDates } from "./utils/date";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState(mockedInitialEvents);
  const [timelineFormattedData, setTimelineFormattedData] = useState(
    formatAndGroupTimelineData(mockedInitialEvents)
  );
  const [timeLineDateRange, setTimelineDateRange] = useState(
    identifyTimelineDates(mockedInitialEvents)
  );

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleaddNewItem = useCallback(
    (data) => {
      const newData = [...events];
      newData.push({
        eventId: newData.length + 1,
        ...data,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
      setEvents(newData);
      setTimelineFormattedData(formatAndGroupTimelineData(newData));
      setTimelineDateRange(identifyTimelineDates(newData));
    },
    [events, setTimelineFormattedData, setTimelineDateRange]
  );

  return (
    <div>
      <HorizontalTimeline
        timelineDatesRange={timeLineDateRange}
        data={timelineFormattedData}
        modalOpen={modalOpen}
        onOpenModal={handleOpenModal}
        onCloseModal={handleCloseModal}
        onAddNew={handleaddNewItem}
      />
    </div>
  );
};

export default App;

import { useState } from "react";
import { ViewEventModal } from "../ViewModal";

export const Event = ({ event, customStyle }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="event" style={customStyle} onClick={handleOpenModal}>
        <p className="event-title">{event.eventName}</p>
      </div>
      {modalOpen && (
        <ViewEventModal
          key={event.eventId}
          isOpen={modalOpen}
          description={event.eventName}
          endDate={event.endDate}
          startDate={event.startDate}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

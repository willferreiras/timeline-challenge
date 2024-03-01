import React, { useState } from "react";
import { format } from "date-fns";

export const NewEventModal = ({ isOpen, onAddNew, onClose }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const handleClose = () => {
    return onClose && onClose();
  };

  const handleSave = () => {
    onAddNew &&
      onAddNew({
        startDate: format(startDate, "yyyy-MM-dd"),
        endDate: format(endDate, "yyyy-MM-dd"),
        eventName: description,
      });

    setStartDate("");
    setEndDate("");
    setDescription("");
    onClose && onClose();
  };

  return isOpen ? (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={handleClose} className="close-button">
          Close
        </button>
        <div className="modal-content">
          <h2>New Event</h2>
          <form>
            <div className="form-group">
              <label>Initial Date:</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>End Date:</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Event Description:</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={50}
              />
            </div>
            <button type="button" className="modal-button" onClick={handleSave}>
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : null;
};

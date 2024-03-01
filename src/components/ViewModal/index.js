import React from "react";
import { format } from "date-fns";

export const ViewEventModal = ({
  isOpen,
  startDate,
  endDate,
  description,
  onClose,
}) => {
  const handleClose = () => {
    return onClose && onClose();
  };

  return isOpen ? (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal">
        <button onClick={handleClose} className="close-button">
          Close
        </button>
        <div className="modal-content">
          <h2 style={{ color: "#cccccc" }}>Event View</h2>
          <form>
            <div className="form-group">
              <label>Initial Date:</label>
              <input
                disabled
                type="date"
                value={format(startDate, "yyyy-MM-dd")}
              />
            </div>
            <div className="form-group">
              <label>End Date:</label>
              <input
                disabled
                type="date"
                value={format(endDate, "yyyy-MM-dd")}
              />
            </div>
            <div className="form-group">
              <label>Event Description:</label>
              <input disabled type="text" value={description} maxLength={50} />
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : null;
};

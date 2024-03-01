import { Header } from "../TimelineHeader";
import { Dashboard } from "../TimelineDash";
import { NewEventModal } from "../NewEventModal";

export const HorizontalTimeline = ({
  data,
  timelineDatesRange,
  onAddNew,
  onOpenModal,
  onCloseModal,
  modalOpen,
}) => {
  return (
    <>
      <div className="header">
        <h3>Timeline - Challenge</h3>
        <div className="buttons-content">
          <button className="new-item-button" onClick={onOpenModal}>
            New Item
          </button>
        </div>
      </div>

      <div className="wrapper">
        <div>
          <Header timelineDatesRange={timelineDatesRange} />
          <div className="content">
            {data.map((item) => (
              <Dashboard items={item} timelineDatesRange={timelineDatesRange} />
            ))}
          </div>
        </div>

        {modalOpen && (
          <NewEventModal
            isOpen={modalOpen}
            onClose={onCloseModal}
            onAddNew={onAddNew}
          />
        )}
      </div>
    </>
  );
};

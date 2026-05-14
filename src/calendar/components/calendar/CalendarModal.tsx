import Modal from "react-modal";

import AppModal from "../../../shared/components/AppModal";

Modal.setAppElement("#root");

const CalendarModal = function () {
  return (
    <AppModal title="Modal Listo">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt placeat
        nam ex nulla harum quam adipisci, accusantium perferendis qui quod
        maiores dolore quis ut reiciendis eveniet distinctio culpa tenetur
        architecto.
      </p>
    </AppModal>
  );
};

export default CalendarModal;

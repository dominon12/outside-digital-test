import React, { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";

import "./Popup.scss";

interface Props {
  id: string;
  visible: boolean;
  setVisible: (nextVisible: boolean) => void;
}

const Popup: React.FC<Props> = (props): JSX.Element | null => {
  const popupRef = useRef<any>(null);

  /**
   * Closes popup window if
   * detects a click outside.
   *
   * @param {MouseEvent} event
   */
  const handleTrackClickOutside = (event: MouseEvent) => {
    const shouldClosePopup =
      popupRef.current && !popupRef.current.contains(event.target);

    if (shouldClosePopup) props.setVisible(false);
  };

  /**
   * Adds 'mousedown' event listener
   * in order to track clicks outside of
   * the popup window.
   */
  useEffect(() => {
    document.addEventListener("mousedown", handleTrackClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleTrackClickOutside);
    };
  }, [popupRef]);

  const closePopup = () => props.setVisible(false);

  return props.visible ? (
    <div id={props.id} className="popup">
      <div ref={popupRef} className="popup__content">
        <div className="popup__content_inner">
          <IoMdClose
            onClick={closePopup}
            className="popup__content_close-icon"
          />
          {props.children}
        </div>
      </div>
    </div>
  ) : null;
};

export default Popup;

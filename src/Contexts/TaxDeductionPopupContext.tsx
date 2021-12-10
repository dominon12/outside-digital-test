import React, { createContext, useEffect, useState } from "react";

export interface TaxDeductionPopupContextState {
  visible: boolean;
  setVisible: (nextVisible: boolean) => void;
}

const contextDefaultValues: TaxDeductionPopupContextState = {
  visible: false,
  setVisible: () => {},
};

export const TaxDeductionPopupContext =
  createContext<TaxDeductionPopupContextState>(contextDefaultValues);

/**
 * Keeps popup's state and provides an ability to
 * share and change the state to other components
 *
 * @param {*} props
 * @return {*} {{
 *    visible: boolean; - state
 *    setVisible: (nextVisible: boolean) => void; - set state action
 * }}
 */
const TaxDeductionPopupProvider: React.FC = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(contextDefaultValues.visible);

  let timeout: any;

  /**
   * Sets 'visible' state variable.
   * If 'nextVisible' param is false,
   * adds 'leave' css class to the modal
   * and to the modal content elements to
   * play leave animation.
   *
   * @param {boolean} nextVisible
   */
  const handleSetVisible = (nextVisible: boolean) => {
    if (!nextVisible) {
      const popupElement = document.querySelector("#tax-modal");
      if (popupElement) {
        popupElement.classList.add("leave");
        popupElement.children[0].children[0].classList.add("leave");
      }

      timeout = setTimeout(() => setVisible(false), 200);
    } else {
      setVisible(true);
    }
  };

  useEffect(() => {
    return () => timeout && clearTimeout(timeout);
  }, []);

  return (
    <TaxDeductionPopupContext.Provider
      value={{
        visible,
        setVisible: handleSetVisible,
      }}
    >
      {children}
    </TaxDeductionPopupContext.Provider>
  );
};

export default TaxDeductionPopupProvider;

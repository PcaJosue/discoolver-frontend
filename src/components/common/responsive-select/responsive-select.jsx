import React, { useState, useEffect } from 'react';
import  styles from './responsive-select.module.scss';
import SVGIcon from '../svg-icon/svg-icon';
import COLORS from '../../../config/colors';

const ResponsiveSelect = ({ option, onChange }) => {
  const [selected, setSelected] = useState(option.defaultValue);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOptionSelect = (value) => {
    setSelected(value);
    if (onChange) {
      onChange(value);
    }
    setOpen(false);
  };

  const toggleDropdown = () => setOpen((prev) => !prev);

  const displayLabel = () => {
    const found = option.values?.find((opt) => opt === selected);
    return found ? found : option.label;
  };


  const recommendSelect = (
    <>
      {displayLabel()}
      <SVGIcon name="dropdown" color={COLORS.dropdown.active} size={24}/>
    </>
  );


  return (
    <div className={styles.responsiveSelect}>
      <div className={styles.selectDisplay} onClick={toggleDropdown}>
        {recommendSelect}
      </div>
      {open && !isMobile && (
        <ul className={styles.dropdown}>
          {option.values?.map((op, index) => (
            <li
              key={`${op}-${index}`}
              onClick={() => handleOptionSelect(op)}
            >
              {op}
            </li>
          ))}
        </ul>
      )}
      {open && isMobile && (
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h2>Seleccione</h2>
          </div>
          <ul className={styles.modalOptions}>
            {option.values?.map((opt, index) => (
              <li
                key={`${opt}-${index}`}
                onClick={() => handleOptionSelect(opt)}
              >
                {opt}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResponsiveSelect;

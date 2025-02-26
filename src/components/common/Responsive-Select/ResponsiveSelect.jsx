import React, { useState, useEffect } from 'react';
import  styles from './ResponsiveSelect.module.scss';
import COLORS from '../../../config/Colors';
import SVGIcon from '../svg_icon/SVGIcon';
const ResponsiveSelect = ({ options, defaultValue = '', onChange }) => {
  const [selected, setSelected] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOptionSelect = (option) => {
    setSelected(option.value);
    if (onChange) {
      onChange(option.value);
    }
    setOpen(false);
  };

  const toggleDropdown = () => setOpen((prev) => !prev);

  const displayLabel = () => {
    const found = options.find((opt) => opt.value === selected);
    return found ? found.label : 'Seleccione';
  };

  return (
    <div className={styles.responsiveSelect}>
      <div className={styles.selectDisplay} onClick={toggleDropdown}>
        {displayLabel()}
        <SVGIcon name="dropdown" color={COLORS.dropdown.active} size={24}/>
      </div>
      {open && !isMobile && (
        <ul className={styles.dropdown}>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionSelect(option)}
            >
              {option.label}
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
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResponsiveSelect;

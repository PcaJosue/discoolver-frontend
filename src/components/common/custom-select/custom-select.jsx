import React from 'react';
import Select, { components } from 'react-select';
import styles from './custom-select.module.scss';
import SVGIcon from '../../common/svg-icon/svg-icon';
const CustomPlaceholder = (props) => {
    const { selectProps } = props;
    const { placeholderLabel, placeholderTitle, placeholderIcon } = selectProps;
    return (
      <components.Placeholder {...props} className={styles.filterBarSelectPlaceholder}>
        <div className={styles.filterBarSelectPlaceholderContainer}>
            <SVGIcon name={placeholderIcon} width={24} height={24} color="rgba(0, 0, 0, 1)"  />
            <div className={styles.filterBarSelectPlaceholderText}>
                <span className={styles.filterBarSelectPlaceholderTextTitle}>{placeholderTitle}</span>
                <span className={styles.filterBarSelectPlaceholderTextLabel}>{placeholderLabel}</span>
            </div>
        </div>
      </components.Placeholder>
    );
  };

  const CustomSingleValue = (props) => {
    const { selectProps , children} = props;
    const { placeholderTitle, placeholderIcon } = selectProps;
    return (
      <components.SingleValue {...props} className={styles.filterBarSelectPlaceholder}>
        <div className={styles.filterBarSelectPlaceholderContainer}>
            <SVGIcon name={placeholderIcon} width={24} height={24} color="rgba(0, 0, 0, 1)"  />
            <div className={styles.filterBarSelectPlaceholderText}>
                <span className={styles.filterBarSelectPlaceholderTextTitle}>{placeholderTitle}</span>
                <span className={styles.filterBarSelectPlaceholderTextLabel}>{children}</span>
            </div>
        </div>
      </components.SingleValue>
    );
  };

function CustomSelect({options, placeholderLabel, placeholderTitle, placeholderIcon}) {
    

    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          border: '1px solid rgba(207, 216, 220, 1)',  // Cambia el color del borde
          boxShadow: 'none',
        }),
      };

  return (
    <Select
      options={options}
      components={{ 
        SingleValue: CustomSingleValue,
        Placeholder: CustomPlaceholder }}
      styles={customStyles}
      classNamePrefix="filterBarSelect"
      placeholderLabel={placeholderLabel}
      placeholderTitle={placeholderTitle}
      placeholderIcon={placeholderIcon}
    />
  );
}

export default CustomSelect;

import React from 'react';
import styles from './formFields.module.css'

export const editableField = ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : "")}>
            {React.createElement(props.el, { ...input, ...props })}
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

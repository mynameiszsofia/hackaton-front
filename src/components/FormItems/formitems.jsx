import React from "react";
import { Formik, Form as FormikForm, useField, Field } from "formik";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import "./formitems.scss";

export const Form = ({ children, onSubmit }) => {
    /*  console.log("onSubmit", onSubmit("hello world")); */
    return (
        <div className="form">
            <Formik
                initialValues={{}}
                onSubmit={(values, actions) => {
                    console.log('test')
                    onSubmit(values);
                }}
            >
                <FormikForm>{children}</FormikForm>
            </Formik>
        </div>
    );
};
Form.Dropdown = function MyDropdown({
    children,
    data = [{ name: "" }, { value: "" }],
    selectName,
    idValue, labelValue, placeholder,
    ...props
}) {
    const [field, meta] = useField(props);
    console.log("dropdown", field);
    return (
        <div className="dropdown">
            <label for={selectName} className="formItems-label">{labelValue}
            </label>
            <select  {...field} {...props} className="dropdown-input" name={selectName} id={idValue}>
                <option value={placeholder} disabled selected>{placeholder}</option>
                {data.map((d) => {
                    return (
                        <option value={d.value} >{d.value}</option>
                    )
                })}

            </select>
        </div>
    )
}
Form.Input = function MyCustomTextField({
    children,
    isNumber,
    label,
    inputClass = "formItems-input",
    ...props
}) {
    // TODO: not really clear...
    const [field, meta] = useField(props);
    return (
        <div className='input-component'>
            <label className="formItems-label">
                {label}     </label>
            {children}
            {isNumber ? (
                <NumberFormat
                    className={inputClass}
                    thousandSeparator={false}
                    {...field}
                    {...props}
                />
            ) : (
                    <input className={inputClass}{...field} {...props} />
                )}
        </div>
    );
};

Form.Button = ({ children, name, to, variant, src, alt, onClickFunc }) => {
    return (
        <>
            {src ?
                ((<Link to={to} >
                    <button onClick={onClickFunc} className={`${variant ? variant : ""}-button`} type="submit" >

                        <img className="buttonImg" src={src} alt={alt} />
                        {children}

                    </button> </Link>))
                :
                ((<Link to={to} >
                    <button onClick={onClickFunc} className={`${variant ? variant : ""}-button`} type="submit">
                        {children}
                    </button></Link>))}
        </>
    );
};

Form.Button2 = ({ children, name, classN }) => {
    return <button className={classN} name={name} type="submit">{children}</button>;
};

Form.Checkbox = function MyCustomCheckbox({
    children,
    labelClass = "checkboxLabelBig",
    size = "Big",
    ...props
}) {
    const [field, meta] = useField(props);
    return (
        <div className="checkbox-container">
            <label className={`checkbox${size} `}>
                <Field {...field} {...props} type="checkbox" />
                <span></span>
                <label className={labelClass}>{children}</label>
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
            <br />
            <br />
        </div>
    );
};

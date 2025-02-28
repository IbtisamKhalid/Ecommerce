/* eslint-disable react/prop-types */

const CustomInput = (props) => {
const { type, label, id, className, name, value, onChange, onBlur } = props;

  return (
    <div className="form-floating mt-3">
      <input
        type={type}
        className={`form-control ${className}`}
        id={id}
        placeholder={label}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default CustomInput;
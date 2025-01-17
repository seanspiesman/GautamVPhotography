import React from "react";
import { useField } from "formik";
import LoadingComponent from "../../components/Loading/LoadingComponent";

export default function MyTextInput({ label, ...props }) {
  const [field, meta] = useField(props);
  if (field.value === undefined) {
    return <LoadingComponent />;
  }
  //   console.log(Date.now());
  return (
    <div>
      <label>{label && label}</label>
      <input
        placeholder={props.placeholder}
        value=""
        className="form-control form-control-lg"
        {...field}
      />
      {meta.touched && meta.error ? (
        <label className="alert alert-danger alert-dismissible fade show">
          {meta.error && meta.error}
        </label>
      ) : null}
    </div>
  );
}

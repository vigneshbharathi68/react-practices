import React from "react";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import classes from "./ReactFormValidation.module.css";

let renderCount = 0;
export function ReactFormValidation() {
  const { register, control, handleSubmit, formState } = useForm({
    defaultValues: {
      name: "",
      email: "",
    }
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };
  renderCount++;
  return (
    <>
      Rendered count {renderCount / 2}
      <div className={classes["form-container"]}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>Name</label>
        <input
          type="text"
          id="name"
          placeholder="First Name"
          {...register("name", { required: "Username is required" })}
        />
        <p>{errors.name?.message}</p>
        <label>Email</label>
        <input
          type="email"
          placeholder="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid email format",
            },
            validate: {
              notAdmin: (fieldValue) => {
                return fieldValue !== "admin" || "Admin is not allowed";
              }
            },
          })}
        />
        <p>{errors.email?.message}</p>
        <label>Gender</label>
        <input type="radio" name="gender" placeholder="Male" { ...register('male') } />
        <input type="radio" name='gender' placeholder="Female" {...register('female')} />
        {/* <label>Skills</label>
        <input type="checkbox" placeholder="React"/>
        <input type="checkbox" placeholder="Vue" />
        <input type="checkbox" placeholder="Node" /> */}
        <button>Submit</button>
      </form>
      </div>
      <DevTool control={control} />
    </>
  );
}

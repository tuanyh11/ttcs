import React from "react";
import { useForm } from "react-hook-form";
import { Button, InputV1, InputV3 } from "../../../Components";

const inputFieldsBilling = [
  {
    name: "firstName",
    label: "First Name",
    option: {
      required: {
        value: true,
        message: "First name is required field",
      },
    },
  },
  {
    name: "lastName",
    label: "Last Name",
    option: {
      required: {
        value: true,
        message: "Last Name is required field",
      },
    },
  },
  {
    name: "displayName",
    label: "Display Name",
    addition:
      "This will be how your name will be displayed in the account section and in reviews",
    option: {
      required: {
        value: true,
        message: "Display Name is required field",
      },
    },
  },

];

const passwordInputFields = [
 

  {
    name: "password",
    label: "Current password (leave blank to leave unchanged)",
    offRequired: true,
    option: {
      required: {
        value: true,
        message: "Display Name is required field",
      },
    },
  },

  {
    name: "newPassword",
    label: "New password (leave blank to leave unchanged)",
    offRequired: true,
    option: {
      required: {
        value: true,
        message: "Display Name is required field",
      },
    },
  },

  {
    name: "passwordConfirmation",
    label: "Confirm new password",
    offRequired: true,
    option: {
      required: {
        value: true,
        message: "Display Name is required field",
      },
    },
  },
]

const AccountDetail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();


  const passwordConfirmation = register("passwordConfirmation", {
   
  })

  return (
    <div>
      <div className="">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          {inputFieldsBilling.map((field) => {
            return (
              <div key={field.name}>
                <InputV1
                  label={field.label}
                  offLabel={field?.offLabel}
                  offRequired={field?.offRequired}
                  register={{
                    ...register(field.name, { ...field.option }),
                  }}
                  placeholder={field?.placeholder || ""}
                />
              </div>
            );
          })}

          <fieldset className="">
            <span className="text-2xl mb-2 block">Password change</span>
          </fieldset>

          {passwordInputFields.map((field) => {
            return (
              <div key={field.name}>
                <InputV1
                  label={field.label}
                  offLabel={field?.offLabel}
                  offRequired={field?.offRequired}
                  register={{
                    ...register(field.name, { ...field.option }),
                  }}
                  placeholder={field?.placeholder || ""}
                />
              </div>
            );
          })}

          <Button label={"SAVE ADDRESS"} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AccountDetail;

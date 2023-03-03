import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Col, InputV3, Row } from "../../../Components";

const inputFields = [
  {
    name: "firstName",
    label: "First Name",
    option: {
      require: {
        value: true,
        message: "First name is required field",
      },
    },
  },
  {
    name: "lastName",
    label: "Last Name",
    option: {
      require: {
        value: true,
        message: "Last Name is required field",
      },
    },
  },
  {
    name: "companyName",
    label: "Company name (optional)",
    option: {},
  },
  {
    name: "companyName",
    label: "Company name (optional)",
  },
  {
    name: "streetAddress",
    label: "Street Address",
    placeholder: "house number and street name",
    option: {
      require: {
        value: true,
        message: "Street Address is required field",
      },
    },
  },
  {
    name: "additionalAddress",
    label: "",
    offLabel: true,
    placeholder: "Apartment, suite, unit, etc. (optional)",
  },
  {
    name: "postalCode",
    label: "Postcode / ZIP (optional)",
    option: {},
  },
  {
    name: "phoneNumber",
    label: "Phone",
    option: {
      require: {
        value: true,
        message: "Phone is required field",
      },
    },
  },
  {
    name: "email",
    label: "Email Address",
    option: {
      require: {
        value: true,
        message: "Email Address is required field",
      },
    },
  },
];

const AddressPage = () => {
  const [selectMode, setSelectMode] = useState();

    const {register} = useForm({
        defaultValues: { 
            ...(() => {
                const form = {}
                inputFields.map(field => {
                    form[field.name] = "";
                })
                return form;
            })()
        }
    })



  return (
    <div>
      <p className="mb-[15px]">
        The following addresses will be used on the checkout page by default.
      </p>
      {!selectMode && (
        <div className="flex">
          <Col className={"w-6/12"}>
            <div className="">
              <div className="">
                <h3 className="text-[27px] font-poppins mb-[15px]">
                  Billing address
                </h3>
                <button
                  onClick={() => setSelectMode("billing")}
                  className="text-main-color"
                >
                  Edit
                </button>
              </div>
              <div>
                Lèo Tuấn
                <br />
                yên hoa - na hang - tuyên quang
                <br />
                Tuyên Quang
                <br />
                Vietnam
              </div>
            </div>
          </Col>
          <Col className={"w-6/12"}>
            <div className="">
              <div className="">
                <h3 className="text-[27px] font-poppins mb-[15px]">
                  Shipping address
                </h3>
                <button
                  onClick={() => setSelectMode("shipping")}
                  className="text-main-color"
                >
                  Add
                </button>
              </div>
              <div>
                Lèo Tuấn
                <br />
                yên hoa - na hang - tuyên quang
                <br />
                Tuyên Quang
                <br />
                Vietnam
              </div>
            </div>
          </Col>
        </div>
      )}

      {selectMode === "billing" && (
        <div className="pt-[30px]">
          <div className="flex flex-wrap w-full">
            <div className=" sm:px-[15px] px-0 w-full">
              <h3 className="text-[27px] mb-[10px] font-poppins font-semibold text-dark-color ">
                Billing details
              </h3>
              <form action="">
                {inputFields.map((field) => {
                    return <div className="">
                        <InputV3 label={field.label} offLabel={field?.offLabel} register={{...register(field.name, {...field.option})}} placeholder={field?.placeholder || ""} />
                    </div>
                })}
              </form>
                 
             
            </div>
       
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressPage;

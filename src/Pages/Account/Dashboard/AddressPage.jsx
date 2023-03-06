import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { Button, Col, InputV3, Row, SelectorV3 } from "../../../Components";
import countries from "../../../assets/country_code_and_details.json";
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
    name: "companyName",
    label: "Company name (optional)",
    option: {},
  },
  {
    name: "country",
    label: "Country / Region",
  },
  {
    name: "streetAddress",
    label: "Street Address",
    placeholder: "house number and street name",
    option: {
      required: {
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
      required: {
        value: true,
        message: "Phone is required field",
      },
    },
  },
  {
    name: "email",
    label: "Email Address",
    option: {
      required: {
        value: true,
        message: "Email Address is required field",
      },
    },
  },
];

const inputFieldsShipping = [
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
    name: "companyName",
    label: "Company name (optional)",
    option: {},
  },
  {
    name: "country",
    label: "Country / Region",
  },
  {
    name: "streetAddress",
    label: "Street Address",
    placeholder: "house number and street name",
    option: {
      required: {
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
    name: "city",
    label: "Town / City",
    option: {
      required: {
        value: true,
        message: "Town / City is required field",
      },
    },
  },
];

const AddressPage = () => {
  const [selectMode, setSelectMode] = useState();

  const loc = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
    reset,
  } = useForm();

  useEffect(() => {
    setSelectMode(null)
    reset()
  }, [loc?.key])

  console.log(countries.length)

  return (
    <div>
      <div className="px-[15px]">
        {Object.values(errors).map((error) => (
          <span className="block">{error.message}</span>
        ))}
      </div>
      {!selectMode && (
        <p className="mb-[15px]">
          The following addresses will be used on the checkout page by default.
        </p>
      )}
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
        <div>
          <div className="flex flex-wrap w-full">
            <div className="  px-0 w-full">
              <h3 className="text-[27px] mb-[10px] font-poppins font-semibold text-dark-color ">
                Billing Address
              </h3>
              <form onSubmit={handleSubmit((data) => console.log(data))}>
                {inputFieldsBilling.map((field) => {
                  if (field.name === "country")
                    return (
                      <div key={field.name} className="mb-[15px]">
                        <SelectorV3
                          data={countries}
                          disPlayKey={(item) => item?.country_name}
                          onSelect={(item) => setValue(field.name, item)}
                          title={watch(field.name)?.country_name}
                          label="Country / Region"
                          onSearch={(e) =>  countries.filter((country) => e.target.value ? country.country_name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0 : true)}
                        />
                      </div>
                    );

                  return (
                    <div key={field.name}>
                      <InputV3
                        label={field.label}
                        offLabel={field?.offLabel}
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
        </div>
      )}

      {selectMode === "shipping" && (
        <div>
          <div className="flex flex-wrap w-full">
            <div className="  px-0 w-full">
              <h3 className="text-[27px] mb-[10px] font-poppins font-semibold text-dark-color ">
                Shipping Address
              </h3>
              <form onSubmit={handleSubmit((data) => console.log(data))}>
                {inputFieldsShipping.map((field) => {
                  if (field.name === "country")
                  return (
                    <div key={field.name} className="mb-[15px]">
                      <SelectorV3
                        data={countries}
                        disPlayKey={(item) => item?.continent_name}
                        onSelect={(item) => setValue(field.name, item)}
                        title={watch(field.name)?.continent_name}
                        label="Country / Region"
                      />
                    </div>
                  );

                return (
                  <div key={field.name}>
                    <InputV3
                      label={field.label}
                      offLabel={field?.offLabel}
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
        </div>
      )}
    </div>
  );
};

export default AddressPage;

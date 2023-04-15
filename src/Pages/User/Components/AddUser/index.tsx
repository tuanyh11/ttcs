import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { HeadingV1, InputV1, TitleBoxV1 } from "../../../../Components";
import { UserInterface } from "../../../../interfaces/user.interface";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../../../api/user.api";
import { useNavigate } from "react-router-dom";
import FormV1 from "../Form/FormV1";

const AddUser = () => {
  const methods = useForm<UserInterface>();

  const {
    reset,
  } = methods;

  const [isPersist, setIsPersist] = useState(false);

  const { mutate } = useMutation(createUser);
  const nav = useNavigate();
  const handleOnSubmit: SubmitHandler<UserInterface> = (data) => {
    mutate(data, {
      onSuccess: () => {
        if (isPersist) {
          reset();
        } else {
          nav("/users");
        }
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  const handleOnCancel = () => {
    reset();
  };

  return (
    <div>
      <HeadingV1 title="Create New User" />
      <FormProvider {...methods}>
        <FormV1
          onCancel={() => handleOnCancel()}
          onPersist={() => setIsPersist(true)}
          onSave={() => setIsPersist(false)}
          onSubmit={handleOnSubmit}
        />
      </FormProvider>
    </div>
  );
};

export default AddUser;

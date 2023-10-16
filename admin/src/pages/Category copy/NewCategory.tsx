import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import Breadcrumb from '../../components/Breadcrumb';
import FormV1 from '../../components/Form/FormV1';
import InputV1 from '../../components/Form/InputV1';
import { toast } from 'react-hot-toast';
import React, { useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { newCategory } from '../apis/category';

type Props = {
  onCreate?: () => void;
};

const NewCategory = ({ onCreate = () => {} }: Props) => {
  const methods = useForm();

  const {
    clearErrors,
    reset,
    formState: { errors },
  } = methods;

  const { mutate } = useMutation({
    mutationFn: newCategory,
    onSuccess: () => {
      toast.success('Create category successfully');
      reset();
      clearErrors();
      onCreate();
    },
  });

  const onSubmit = (data: FieldValues) => {
    mutate(data);
  };

  useEffect(() => {
    if (errors?.name) toast.error(errors?.name?.message as string);
  }, [errors]);

  return (
    <div className="bg-white h-full">
      <div>
        <FormProvider {...methods}>
          <FormV1
            title="Create Your Category"
            button={{
              type: 'submit',
              children: 'Create',
            }}
            renderBody={() => {
              return (
                <>
                  <InputV1
                    label="name"
                    input={{
                      name: 'name',
                      placeholder: 'name',
                      validation: {
                        required: {
                          value: true,
                          message: 'name must be provided',
                        },
                      },
                    }}
                  />
                </>
              );
            }}
            form={{
              handleOnSubmit: methods.handleSubmit(onSubmit),
            }}
          />
        </FormProvider>
      </div>
    </div>
  );
};

export default NewCategory;

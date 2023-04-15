import React, { useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { UserInterface } from '../../../../interfaces/user.interface';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { HeadingV1 } from '../../../../Components';
import FormV1 from '../Form/FormV1';
import { getUser, updateUser } from '../../../../api/user.api';

const EditUser = () => {
    
    const methods = useForm<UserInterface>();

    const {
      reset,
      setValue
    } = methods;
  
    const [isPersist, setIsPersist] = useState(false);
  
    const id = useParams()?.id as string;
 
    const { mutate } = useMutation(updateUser);
    useQuery({
        queryFn: () => getUser(id),
        queryKey: [id, "get-user"],
        onSuccess: (data) => {
            Object.entries(data).forEach(([k, v]) => {
                if(k === 'password')  return
                setValue(k as keyof UserInterface, v)
            })
        } 
    })
    const nav = useNavigate();
    const handleOnSubmit: SubmitHandler<UserInterface> = (data) => {
      mutate({id, data}, {
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
            passwordRequired={false}
          />
        </FormProvider>
      </div>
    );
}

export default EditUser
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import Breadcrumb from '../../components/Breadcrumb';
import FormV1 from '../../components/Form/FormV1';
import InputV1 from '../../components/Form/InputV1';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { getCategoryById, updateCategory } from '../apis/category';
import { useLocation, useParams } from 'react-router-dom';
import { useQueryPrams } from '../../utils';

type Props = {
  onUpdate?: () => void;
};

const UpdateCategory = ({ onUpdate = () => {} }: Props) => {
  const methods = useForm();
  const loc = useLocation();
  const queryPrams = useQueryPrams(loc.search);

  const {
    clearErrors,
    reset,
    setValue,
    formState: { errors },
  } = methods;

  useQuery({
    queryFn: () => getCategoryById(queryPrams?.id),
    onSuccess: (res) => {
      Object.entries(res.data).forEach(([k, v]) => {
        setValue(k, v);
      });
    },
    refetchInterval: false,
    refetchOnWindowFocus: false,
    queryKey: 'get-category',
  });

  const { mutate } = useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      toast.success('Update category successfully');
      clearErrors();
      onUpdate();
    },

    onError: () => {
      toast.success('Update category failed');
    },

    mutationKey: 'new-category',
  });

  const onSubmit = (data: FieldValues) => {
    mutate({
      id: queryPrams.id,
      data: { name: data.name },
    });
  };

  useEffect(() => {
    if (errors?.name) toast.error(errors?.name?.message as string);
  }, [errors]);

  return (
    <div className="bg-white h-full">
      <div>
        <FormProvider {...methods}>
          <FormV1
            title="Update Your Category"
            button={{
              type: 'submit',
              children: 'Update',
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

export default UpdateCategory;

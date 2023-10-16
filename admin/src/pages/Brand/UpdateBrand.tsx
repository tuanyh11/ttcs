import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import Breadcrumb from '../../components/Breadcrumb';
import FormV1 from '../../components/Form/FormV1';
import InputV1 from '../../components/Form/InputV1';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';
import { useQueryPrams } from '../../utils';
import { getBrandById, updateBrand } from '../apis/brand';

type Props = {
  onUpdate?: () => void;
};

const UpdateBrand = ({ onUpdate = () => {} }: Props) => {
  const methods = useForm();
  const loc = useLocation();
  const queryPrams = useQueryPrams(loc.search);

  const {
    clearErrors,
    setValue,
    formState: { errors },
  } = methods;

  useQuery({
    queryFn: () => getBrandById(queryPrams?.id),
    onSuccess: (res) => {
      Object.entries(res.data).forEach(([k, v]) => {
        setValue(k, v);
      });
    },
    refetchInterval: false,
    refetchOnWindowFocus: false,
    queryKey: 'get-brand',
  });

  const { mutate } = useMutation({
    mutationFn: updateBrand,
    onSuccess: () => {
      toast.success('Update brand successfully');
      clearErrors();
      onUpdate();
    },

    onError: () => {
      toast.success('Update brand failed');
    },

    mutationKey: 'new-brand',
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
            title="Update Your Brand"
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

export default UpdateBrand;

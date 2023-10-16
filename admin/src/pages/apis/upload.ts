import API from '../config';

export const uploadImage = async (data: any) => {
  const res = await API.post('/upload', data);
  return res.data;
};

export const deleteImage = async (id: string) => {
  const res = await API.post(`/upload/del-image/${id}`);
  return res.data;
};

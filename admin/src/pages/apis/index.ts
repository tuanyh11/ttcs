import axios from 'axios';
import API from '../config';
import { useMutation, useQuery } from 'react-query';

class AbstractAPI {
  private url;
  private endpoint;
  constructor(api: typeof API, endpoint: string) {
    this.url = api;
    this.endpoint = endpoint;
  }

  async new(data: any) {
    return this.url.post(this.endpoint, data);
  }

  async getAll() {
    const res = await this.url.get(this.endpoint);
    return res.data;
  }

  async getById(id: string) {
    const res = await this.url.get(`${this.endpoint}/${id}`);
    return res.data;
  }

  async update({ id, data }: { id: string; data: any }) {
    return await this.url.put(`${this.endpoint}/${id}`, data);
  }
  async deleteById(id: string) {
    if (window.confirm('Are you sure you want to delete this'))
      await this.url.delete(`${this.endpoint}/${id}`);
    else throw Error('delete failed');
  }
}

export default AbstractAPI;

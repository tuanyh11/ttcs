import axios from "axios";
import API from "../config";
import { useMutation, useQuery } from "react-query";

class AbstractAPI {
  constructor(api, endpoint) {
    this.url = api;
    this.endpoint = endpoint;
  }

  async new(data) {
    return this.url.post(this.endpoint, data);
  }

  async getAll() {
    const res = await this.url.get(this.endpoint);
    return res.data;
  }

  async getById(id) {
    const res = await this.url.get(`${this.endpoint}/${id}`);
    return res.data;
  }

  async update({ id, data }) {
    return await this.url.put(`${this.endpoint}/${id}`, data);
  }
  async deleteById(id) {
    if (window.confirm("Are you sure you want to delete this"))
      await this.url.delete(`${this.endpoint}/${id}`);
    else throw Error("delete failed");
  }
}

export default AbstractAPI;

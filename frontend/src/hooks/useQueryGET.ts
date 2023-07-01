import axios, { AxiosResponse } from "axios";
import { Service } from "../interface/Service";
import { useQuery } from "react-query";

const API_URL = 'http://localhost:8080';

const getData = async (): Promise<AxiosResponse<Service[]>> => {
  const response = await axios.get<Service[]>(API_URL + '/api/servico');
  return response;
}

export function useQueryGET() {
  const query = useQuery({
    queryFn: getData,
    queryKey: ['service-data'],
    retry: 2
  });

  return {
    ...query,
    serviceData: query.data?.data
  };
}

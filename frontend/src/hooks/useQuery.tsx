import axios, { AxiosPromise } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { Service } from '../interface/Service';

const API_URL = 'http://localhost:8080';

const postData = async (data: Service) => {
  const response = await axios.post(API_URL + '/api/servico', data);
  return response;
};

export function useQuery() {
  const queryClient = useQueryClient();
  const mutate = useMutation(postData, {
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(['service-data']);
    },
  });

  return mutate;
}

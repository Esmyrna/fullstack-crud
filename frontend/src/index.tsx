import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Service } from './interface/Service';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

interface AppProps {
  service: Service;
  setService: React.Dispatch<React.SetStateAction<Service>>;
}

const AppWrapper: React.FC<AppProps> = ({ service, setService }) => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App service={service} setService={setService} />
      </QueryClientProvider>
    </React.StrictMode>
  );
};

const initialService: Service = {
  clientName: '',
  startDate: new Date(),
  finalDate: new Date(),
  serviceDescription: '',
  serviceValue: 0,
  paidValue: 0,
  paymentData: new Date(),
};

const initialSetService: React.Dispatch<React.SetStateAction<Service>> = (newService) => {
  // Atualize o estado do serviço com o novo valor
};

root.render(
  <AppWrapper service={initialService} setService={initialSetService} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

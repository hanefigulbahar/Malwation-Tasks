import { useRouteError } from "react-router-dom";

import Error from "@components/Error";

interface ErrorDetail {
  data: string;
  error: Error;
  internal: boolean;
  status: number;
  statusText: string;
}

interface IErrorPageProps {
  status?: number;
}
const ErrorPage = ({ status }: IErrorPageProps) => {
  const error = useRouteError() as ErrorDetail;
  console.log(error);
  return (
    <div className="w-full">
      <Error status={error || status} />
    </div>
  );
};

export default ErrorPage;

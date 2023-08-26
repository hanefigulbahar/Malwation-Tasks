import { useRouteError } from "react-router-dom";
import Error from "@components/Error";
interface ErrorDetail {
  data: string;
  error: Error;
  internal: boolean;
  status: number;
  statusText: string;
}

export default function ErrorPage(): JSX.Element {
  const error = useRouteError() as ErrorDetail;
  const errorStatus = error.status;
  return (
    <div>
      <Error status={errorStatus} />
    </div>
  );
}

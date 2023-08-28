import Link from "./ui/Link";

interface IErrorComponent {
  status?: number | unknown;
}

const Error = ({ status }: IErrorComponent) => {
  switch (status) {
    case 404:
      return (
        <div className="grid h-screen grid-cols-1 grid-rows-4 place-items-center bg-error404 bg-center bg-no-repeat">
          <div className="row-start-4 grid grid-rows-2 gap-3 ">
            <div className="mx-auto w-max">
              <Link size="medium" url="/" color="primary">
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="grid h-screen grid-cols-1 grid-rows-3 bg-error500  bg-center bg-no-repeat">
          <div className="row-start-3 grid grid-rows-2 gap-3 ">
            <div className="mx-auto w-max">
              <Link size="medium" url="/" color="primary">
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
  }
};

export default Error;

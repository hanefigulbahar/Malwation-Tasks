import Spinner from "./ui/Spinner";

const Loading = () => {
  return (
    <div className="rounded-lgshadow-md flex h-96 w-full items-center justify-center">
      <Spinner className="h-10 w-10 fill-primary" />
    </div>
  );
};

export default Loading;

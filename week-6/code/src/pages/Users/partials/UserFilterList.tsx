import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import { GetUserListForm, IGetUserListInput } from "@utils/user/types";

function UsersListFilter({
  defaultValues,
  loading,
}: {
  loading: boolean;
  defaultValues: { name: string };
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const { register, handleSubmit, reset } = useForm<IGetUserListInput>({
    resolver: zodResolver(GetUserListForm),
    defaultValues,
  });

  const onSubmitForm = (data: IGetUserListInput) => {
    if (data.name !== "") {
      setSearchParams({ name: data.name });
    } else {
      setSearchParams({});
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className="grid grid-cols-3 items-end gap-1 max-md:grid-cols-1">
        <div className="max-md:w-full">
          <Input
            disabled={loading}
            leftIcon="search"
            color="primary"
            size="medium"
            id="Search"
            {...register("name")}
            autoComplete="off"
          />
        </div>
        <div className=" w-max max-lg:w-full">
          <Button
            disabled={loading}
            isLoading={loading}
            size="medium"
            color="primary"
          >
            Search
          </Button>
        </div>
      </div>
    </form>
  );
}

export default UsersListFilter;

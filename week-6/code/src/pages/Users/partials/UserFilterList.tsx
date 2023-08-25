import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GetUserListForm, IGetUserListInput } from "@utils/api/user/types";
import Button from "@components/ui/Button";
import Input from "@components/ui/Input";

function UsersListFilter({
  defaultValues,
  loading,
}: {
  loading: boolean;
  defaultValues: { name: string };
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const { register, handleSubmit } = useForm<IGetUserListInput>({
    resolver: zodResolver(GetUserListForm),
    defaultValues,
  });

  const onSubmitForm = (data: IGetUserListInput) => {
    if (data.name !== "") {
      setSearchParams({ name: data.name });
    } else {
      setSearchParams({});
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className="flex w-full items-end gap-1">
        <div>
          <Input
            leftIcon="search"
            color="primary"
            size="medium"
            id="Search"
            {...register("name")}
            autoComplete="off"
          />
        </div>
        <div>
          <Button isLoading={loading} size="medium" color="primary">
            Search
          </Button>
        </div>
      </div>
    </form>
  );
}

export default UsersListFilter;

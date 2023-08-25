import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import UserUpdateForm from "./UserUpdateForm";
import Loading from "@components/Loading";

const GET_ONE_USER = gql`
  query GetOneUser($input: GetOneUserInput!) {
    getOneUser(input: $input) {
      ... on GetOneUser {
        name
        active
        permissions
      }
      ... on Error {
        errorMessage
      }
    }
  }
`;

const User = () => {
  const { userId } = useParams();

  const { error, loading, data } = useQuery(GET_ONE_USER, {
    variables: {
      input: {
        id: userId,
      },
    },
  });

  if (error) return <p>{error.message}</p>;
  if (loading) return <Loading />;
  return (
    <div>
      <UserUpdateForm user={data} userId={userId} />
    </div>
  );
};

export default User;

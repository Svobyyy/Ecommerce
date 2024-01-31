import { UserType } from "@/models/User";

const Profile = ({ user }: { user: UserType }) => {
  return (
    <>
      <p>{user.name}</p>
      <p>{user.lastname}</p>
      <p>{user.email}</p>
    </>
  );
};

export default Profile
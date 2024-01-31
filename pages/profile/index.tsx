import Header from "@/components/Header/Header";
import getProfile from "@/lib/getProfile";
import { UserType } from "@/models/User";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import Profile from "@/components/Profile/Profile";


const profile = ({ user }: { user: UserType }) => {
  return (
    <>
      <Header />
      <Profile user={user} />
    </>
  );
};

export async function getServerSideProps({ req, res }: any) {
  // const session = await getSession({ req });
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }

  if (session.user && session.user.email) {
    const user = await getProfile(session.user.email);

    const { name, email, lastname } = user[0];
    return { props: { user: { name, email, lastname } } };
  }

  return { props: {} };
}

export default profile;

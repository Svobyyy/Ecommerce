import Login from "@/components/Authentication/Login";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

const loginPage = () => {
  return (
    <>
      <Login></Login>
    </>
  );
};

export async function getServerSideProps({ req, res }: any) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: "/profile",
      },
      props: {},
    };
  }

  return { props: {} };
}

export default loginPage;

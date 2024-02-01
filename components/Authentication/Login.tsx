import Header from "../Header/Header";
import styles from "./Login.module.css";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {
  const [signup, setSignup] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");
    const lastname = formData.get("lastname");

    if (!signup) {
      const response = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (response?.ok) {
        return router.replace("/profile");
      }
    }

    const response = await fetch(`/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name, lastname }),
    });

    if (response.ok) {
      const login = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (login?.ok) {
        return router.replace("/profile");
      }
    } else {
      // Handle errors
    }
  };

  return (
    <section className={styles.login}>
      <Header></Header>
      <div className={styles.center}>
        <main className={styles.form_wrapper}>
          <section className={styles.options}>
            <p
              className={`${signup && styles.active}`}
              onClick={() => {
                !signup && setSignup((change) => !change);
              }}
            >
              Sign Up
            </p>
            <p
              className={`${!signup && styles.active}`}
              onClick={() => {
                signup && setSignup((change) => !change);
              }}
            >
              Log In
            </p>
          </section>
          <form onSubmit={handleSubmit} className={styles.form}>
            {signup && (
              <>
                <input
                  type="name"
                  name="name"
                  placeholder="First Name"
                  required
                />
                <input
                  type="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  required
                />
              </>
            )}
            <input type="email" name="email" placeholder="Email" required />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          
            <button type="submit">{`${signup ? "Sign Up" : "Log In"}`}</button>
          </form>

          {!signup ? (
            <p className={styles.terms}>
              By logging in, you agree to the <span> Terms of Service </span>{" "}
              and
              <span> Privacy Policy </span>
            </p>
          ) : (
            <p className={styles.terms}>
              By signing up, you agree you've read and accepted our
              <span> Terms and Conditions. </span> Please see our
              <span> Privacy Policy </span> for information on how we process
              your data.
            </p>
          )}
        </main>
      </div>
    </section>
  );
};

export default Login;

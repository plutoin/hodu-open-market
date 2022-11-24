import { setCookie } from "../Cookie";
import { AxiosInstance } from "../Axios";

export const useAuth = () => {
  const onClickLogin = async (data, setError, reset, goToHome) => {
    try {
      const res = await AxiosInstance.post("accounts/login/", {
        username: data.id,
        password: data.password,
        login_type: "BUYER",
      });

      if (res.data.token) {
        setCookie("token", `JWT ${res.data.token}`, {
          path: "/",
          sameSite: "strict",
        });
      }

      alert("환영합니다!");
      goToHome();
    } catch (error) {
      if (error) {
        if (error.response.status === 401) {
          reset();
          setError(
            "password",
            {
              type: "loginError",
              message: "아이디 또는 비밀번호가 일치하지 않습니다.",
            },
            { shouldFocus: true }
          );
        } else {
          console.error(error);
        }
      }

      if (error.response.data.username) {
        setError(
          "id",
          {
            message: error.response.data.username[0],
          },
          { shouldFocus: true }
        );
      }

      if (error.response.data.password) {
        setError(
          "password",
          {
            message: error.response.data.password[0],
          },
          { shouldFocus: true }
        );
      }
    }
  };

  const onClickJoin = async (data, phonenum, setError, reset, goToLogin) => {
    try {
      const res = await AxiosInstance.post("/accounts/signup/", {
        username: data.id,
        password: data.password,
        password2: data.password2,
        phone_number: phonenum,
        name: data.name,
      });

      console.log(res);
      alert("환영합니다! 로그인해 주세요!");
      goToLogin();
    } catch (error) {
      if (error) {
        if (error.response.status === 401) {
          reset();
          setError("password", {
            type: "loginError",
            message: "아이디 또는 비밀번호가 일치하지 않습니다.",
          });
        } else {
          console.error(error);
          console.log(data);
        }

        if (error.response.data.username) {
          setError(
            "id",
            {
              message: error.response.data.username[0],
            },
            { shouldFocus: true }
          );
        }

        if (error.response.data.password) {
          setError(
            "password",
            {
              message: error.response.data.password[0],
            },
            { shouldFocus: true }
          );
        }

        if (error.response.data.name) {
          setError(
            "name",
            {
              message: error.response.data.name[0],
            },
            { shouldFocus: true }
          );
        }

        if (error.response.data.phone_number) {
          setError(
            "phonenum2",
            {
              message: error.response.data.phone_number[0],
            },
            { shouldFocus: true }
          );
        }
      }
    }
  };

  return { onClickLogin, onClickJoin };
};

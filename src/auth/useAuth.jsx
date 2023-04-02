import { setCookie } from "../Cookie";
import { AxiosInstance } from "../Axios";

export const useAuth = () => {
  const onClickLogin = async (data, loginType, setError, reset, goToHome) => {
    try {
      const res = await AxiosInstance.post("accounts/login/", {
        username: data.id,
        password: data.password,
        login_type: loginType,
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
          return error.response.data;
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

  const onClickBuyerJoin = async (
    data,
    phonenum,
    setError,
    reset,
    goToLogin
  ) => {
    try {
      await AxiosInstance.post("accounts/signup/", {
        username: data.userID,
        password: data.password,
        password2: data.password2,
        phone_number: phonenum,
        name: data.name,
      });

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
          return error.response.data;
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

  const onClickSellerJoin = async (
    data,
    phonenum,
    setError,
    reset,
    goToLogin
  ) => {
    try {
      await AxiosInstance.post("/accounts/signup_seller/", {
        username: data.userID,
        password: data.password,
        password2: data.password2,
        phone_number: phonenum,
        name: data.name,
        company_registration_number: data.sellerCode,
        store_name: data.storeName,
      });

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
          return error.response.data;
        }

        if (error.response.data.username) {
          setError(
            "userID",
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

        if (error.response.data.company_registration_number) {
          setError(
            "phonenum2",
            {
              message: error.response.data.company_registration_number[0],
            },
            { shouldFocus: true }
          );
        }

        if (error.response.data.store_name) {
          setError(
            "storeName",
            {
              message: error.response.data.store_name[0],
            },
            { shouldFocus: true }
          );
        }
      }
    }
  };

  const validID = async (id, setError) => {
    try {
      const res = await AxiosInstance.post("accounts/signup/valid/username/", {
        username: id,
      });
      if (res.data.Success) {
        setError("userID", {
          message: res.data.Success,
        });
      }
    } catch (error) {
      if (
        error.response.data.FAIL_Message === "username 필드를 추가해주세요 :)"
      ) {
        setError(
          "userID",
          {
            message: "아이디를 입력해 주세요.",
          },
          { shouldFocus: true }
        );
      } else if (
        error.response.data.FAIL_Message === "이미 사용 중인 아이디입니다."
      ) {
        setError(
          "userID",
          {
            message: error.response.data.FAIL_Message,
          },
          { shouldFocus: true }
        );
      }
      return error.response.data;
    }
  };

  const validSellerCode = async (code, setError) => {
    try {
      const res = await AxiosInstance.post(
        "accounts/signup/valid/company_registration_number/",
        {
          company_registration_number: code,
        }
      );
      if (res.data.Success) {
        setError("sellerCode", {
          message: res.data.Success,
        });
      }
    } catch (error) {
      if (
        error.response.data.FAIL_Message === "이미 등록된 사업자등록번호입니다."
      ) {
        setError(
          "sellerCode",
          {
            message: error.response.data.FAIL_Message,
          },
          { shouldFocus: true }
        );
      }
      return error.response.data;
    }
  };

  return {
    onClickLogin,
    onClickBuyerJoin,
    onClickSellerJoin,
    validID,
    validSellerCode,
  };
};

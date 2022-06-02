import RegisterFormStyle from "./RegisterFormStyle";

const RegisterForm = () => {
  return (
    <RegisterFormStyle>
      <form autoComplete="off" noValidate>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange="{changeData}"
          placeholder="Name"
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange="{changeData}"
          placeholder="Username"
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange="{changeData}"
          placeholder="Password"
        />

        <button
          disabled="{buttonDisabled}"
          type="submit"
          className="form-button"
        >
          create
        </button>
      </form>
    </RegisterFormStyle>
  );
};

export default RegisterForm;

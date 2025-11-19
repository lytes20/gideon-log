import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/");
  }
  return (
    <div style={{ padding: "4px" }}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;

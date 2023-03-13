import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../contexts/Context";

const ShowData = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <div>
      ShowData de {state.user.name}
      <br />
      <Link to="/">Voltar para SignUp</Link>
    </div>
  );
};

export default ShowData;

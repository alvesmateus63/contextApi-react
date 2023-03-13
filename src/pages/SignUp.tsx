import { useContext } from "react";

import { Link } from "react-router-dom";

import { Context } from "../contexts/Context";

const SignUp = () => {
  const { state, dispatch } = useContext(Context);

  const handleChangeName = () => {
    dispatch({
      type: "CHANGE_NAME",
      payload: {
        name: "Luana",
      },
    });
  };

  return (
    <div>
      Tela SignUp de {state.user.name} que tem {state.user.age} anos.
      <button onClick={handleChangeName}>Trocar nome para Luana</button>
      <br />
      <Link to="/exibir">Ir para ShowData</Link>
    </div>
  );
};

export default SignUp;

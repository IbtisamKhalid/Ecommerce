import { useState } from "react";
import { useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
function useStartEscrow() {
  const selecCurrencyOption = ["PK", "USD", "CAD"];
  const selectRoleOption = ["Buyer", "Seller", "Both"];
  const [showBox, setShowBox] = useState(false);
  const [secondPerson, setSecondPerson] = useState("");
  const navigate = useNavigate()
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({
    defaultValues: {
      MyRole: "Buyer", // Default value for MyRole
      Currency: "USD", // Default value for Currency
    },
  });

  const onSubmit = (data) => {
    console.log("In Submit");
    if (!showBox) {
      setShowBox(true);
      console.log("inbox");
      if (data.MyRole == "Buyer") {
        setSecondPerson("Seller");
        console.log("Seller");
      } else {
        setSecondPerson("Buyer");
        console.log("Buyer");
      }
    }
    else if(showBox){
        navigate("/contract", { state: { data } })
        console.log("Form Submitted: ", data);
    }

  };
    


  return {
    control,
    register,
    handleSubmit,
    onSubmit,
    errors,
    selecCurrencyOption,
    selectRoleOption,
    showBox,
    secondPerson,
    watch
  };
}

export default useStartEscrow;

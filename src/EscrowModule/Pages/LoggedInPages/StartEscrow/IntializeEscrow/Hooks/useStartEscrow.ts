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
    const item = data;
    if (!showBox) {
      setShowBox(true);
      console.log("inbox");
      if (item.MyRole == "Buyer") {
        setSecondPerson("Seller");
        console.log("Seller");
      } else {
        setSecondPerson("Buyer");
        console.log("Buyer");
      }
    }
    else if(showBox){
        navigate("/contract", { state: { item, addingTerms:false } })
        console.log("Form Submitted: ", item);
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

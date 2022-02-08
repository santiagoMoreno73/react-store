import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

//context
import AppContext from "../context/AppContext";

// misc
import { handleSumTotal } from "../utils/misc";

// react-hook-form
import { useForm, Controller } from "react-hook-form";

// css
import "../styles/components/Information.css";

// misc
import { regularExpNotNumbers, regularExpNotLetters } from "../utils/misc";

const Information = () => {
  // form
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { state, addToBuyer } = useContext(AppContext);
  const { cart } = state;
  const navigate = useNavigate();

  const onSubmit = (values) => {
    const buyer = {
      name: values.name,
      email: values.email,
      address: values.address,
      apto: values.apto,
      city: values.city,
      country: values.country,
      state: values.state,
      postal_code: values.postal_code,
      phone: values.phone,
    };

    addToBuyer(buyer);
    navigate("/checkout/payment", { replace: true });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Information">
          <div className="Information-content">
            <div className="Information-head">
              <h2>Información de Contacto</h2>
            </div>
            <div className="Information-form">
              {errors.name && <span>Campo requerido</span>}
              <Controller
                name="name"
                control={control}
                defaultValue={""}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Nombre completo"
                    name="name"
                    onKeyUp={(e) => {
                      if (regularExpNotNumbers.test(e.target.value)) {
                        field.onChange(e.target.value);
                      } else {
                        e.target.value = "";
                        field.onChange("");
                      }
                    }}
                  />
                )}
              />

              <Controller
                name="email"
                control={control}
                defaultValue={""}
                rules={{ required: false }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Correo Electrónico"
                    name="email"
                  />
                )}
              />

              {errors.address && <span>Campo requerido</span>}
              <Controller
                name="address"
                control={control}
                defaultValue={""}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Dirección"
                    name="address"
                  />
                )}
              />

              {errors.apto && <span>Campo requerido</span>}
              <Controller
                name="apto"
                control={control}
                defaultValue={""}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Apto"
                    name="apto"
                  />
                )}
              />

              {errors.city && <span>Campo requerido</span>}
              <Controller
                name="city"
                control={control}
                defaultValue={""}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Ciudad"
                    name="city"
                    onKeyUp={(e) => {
                      if (regularExpNotNumbers.test(e.target.value)) {
                        field.onChange(e.target.value);
                      } else {
                        e.target.value = "";
                        field.onChange("");
                      }
                    }}
                  />
                )}
              />

              {errors.country && <span>Campo requerido</span>}
              <Controller
                name="country"
                control={control}
                defaultValue={""}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Pais"
                    name="country"
                    onKeyUp={(e) => {
                      if (regularExpNotNumbers.test(e.target.value)) {
                        field.onChange(e.target.value);
                      } else {
                        e.target.value = "";
                        field.onChange("");
                      }
                    }}
                  />
                )}
              />
              <Controller
                name="postal_code"
                control={control}
                defaultValue={""}
                rules={{ required: false }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Código Postal"
                    name="postal_code"
                  />
                )}
              />

              {errors.phone && <span>Campo requerido</span>}
              <Controller
                name="phone"
                control={control}
                defaultValue={""}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Teléfono"
                    name="phone"
                    onKeyUp={(e) => {
                      if (regularExpNotLetters.test(e.target.value)) {
                        field.onChange(e.target.value);
                      } else {
                        e.target.value = "";
                        field.onChange("");
                      }
                    }}
                  />
                )}
              />
            </div>
          </div>
          <div className="Information-sidebar">
            <h3>Pedido:</h3>
            {cart.map((item) => (
              <div className="Information-item" key={item.cartId}>
                <div className="Information-element">
                  <h4>{item.title}</h4>
                  <span>{item.price}</span>
                </div>
              </div>
            ))}
            <h4>{`Precio Total: $ ${handleSumTotal(cart)}`}</h4>
          </div>
          <div className="Information-buttons">
            <div className="Information-back">
              <Link to="/checkout">Regresar</Link>
            </div>
            <div className="Information-next">
              <button type="submit">Pagar</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Information;

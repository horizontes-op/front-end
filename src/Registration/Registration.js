import React from "react";
import { useFormik } from "formik";
import "./Registration.css";
import {useState} from 'react'
import { Button } from "react-bootstrap";
// import { registrationSchema } from "./RegistrationSchema";

const initialValues = {
  first: "",
  last: "",
  email: "",
  repassword: "",
  password: "",
};


const Registration = () => {
const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [email, setEmail] = useState("")



const [genero, setGenero] = useState("")
const [cep, setCep] = useState("")
const [escolaridade, setEscolaridade] = useState("")
const [periodo, setPeriodo] = useState("")
const [ocupacao, setOcupacao] = useState("")
const [renda_per_capita, setRenda_per_capita] = useState("")
const [modalidade, setModalidade] = useState("")
const [distancia_km, setDistancia_km] = useState("")
const [oportunidade, setOportunidade] = useState("")
const [area_interesse, setArea_interesse] = useState("")
const [descricao, setDescricao] = useState("")
const [pag2, setPag2] = useState(false)
const [pag3, setPag3] = useState(false)



// const [errors, setErrors] = useState(""
//   const {
//     values,
//     errors,
//     touched,
//     handleBlur,
//     handleChange,
//     handleSubmit,
//     resetForm,
//   } = useFormik({
//     initialValues,
//     validationSchema: registrationSchema,
//     onSubmit: (values, action) => {
//       alert(
//         "Form is valid now!. You can make a call to API inside onSubmit function"
//       );
//       console.log(values);
//       action.resetForm();
//     },
//   });

const handlesubmit = (values)=> {
  alert(
    "Form is valid now!. You can make a call to API inside onSubmit function"
  );
  console.log(firstName, email, genero, cep, escolaridade, periodo, ocupacao, renda_per_capita, modalidade, distancia_km, oportunidade, area_interesse, descricao);
  // action.resetForm();
  fetch('http://localhost:3001/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      genero: genero,
      cep: cep,
      escolaridade: escolaridade,
      periodo: periodo,
      ocupacao: ocupacao,
      renda_per_capita: renda_per_capita,
      modalidade: modalidade,
      distancia_km: distancia_km,
      oportunidade: oportunidade,
      area_interesse: area_interesse,
      descricao: descricao
    })
  
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
}

  return (
    <div>
      <section
        class="p-5 w-100"
        style={{ backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0" }}
      >
        <div class="row">
          <div class="col-12">
            <div class="card text-black" style={{ borderRadius: "25px" }}>
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mt-4">Sign up</p>
                    {
                      !pag2 && !pag3 && (
                        <form >
                      <div className="row">
                        <div className="col text-left">
                          <label htmlFor="first" className="form-label">
                            Nome
                          </label>
                          <input
                            id="first"
                            name="first"
                            className="form-control"
                            value= {firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="col text-left">
                          <label htmlFor="last`" className="form-label">
                            Sobrenome
                          </label>
                          <input
                            id="last"
                            name="last"
                            className="form-control"
                            value={lastName}
                            />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="genero" className="form-label">
                            Gênero
                          </label>
                          <input
                            id="genero"
                            name="genero"
                            className="form-control"
                            value={genero}
                            onChange={(e) => setGenero(e.target.value)}
                            type="text"
                          />
                          
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="area_interesse" className="form-label">
                            Área de interesse
                          </label>
                          <input
                            id="area_interesse"
                            value={area_interesse}
                            name="area_interesse"
                            className="form-control"
                            onChange={(e) => setArea_interesse(e.target.value)}
                            type="text"
                          />
                          
                        </div>
                      </div>
                      
                      <div className="row mt-3">
                        <div className="col text-right actionButtons">
                          

                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => setPag2(true)}
                          >
                            Proximo
                          </Button>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <br />
                        <div className="col text-right">
                          Already have an account? <a href="/">Sign in</a>
                        </div>
                      </div>
                    </form>
                      )
                    }


                    {
                      pag2 && (
                        <form >
                      <div className="row">
                        <div className="col text-left">
                          <label htmlFor="cep" className="form-label">
                            Cep
                          </label>
                          <input
                            id="cep"
                            value={cep}
                            name="cep"
                            className="form-control"
                            onChange={(e) => setCep(e.target.value)}
                            />
                        </div>
                        <div className="col text-left">
                          <label htmlFor="escolaridade`" className="form-label">
                            Escolaridade
                          </label>
                          <input
                            id="escolaridade"
                            value={escolaridade}
                            name="escolaridade"
                            className="form-control"
                            onChange={(e) => setEscolaridade(e.target.value)}
                            />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="periodo" className="form-label">
                            Período
                          </label>
                          <input
                            id="periodo"
                            name="periodo"
                            value={periodo}
                            className="form-control"
                            onChange={(e) => setPeriodo(e.target.value)}
                            />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="ocupacao" className="form-label">
                            Ocupação
                          </label>
                          <input
                            id="ocupacao"
                            name="ocupacao"
                            value={ocupacao}
                            className="form-control"
                            onChange={(e) => setOcupacao(e.target.value)}
                            type="ocupacao"
                          />
                          
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="descricao" className="form-label">
                            Descrição
                          </label>
                          <input
                            id="descricao"
                            name="descricao"
                            value={descricao}
                            className="form-control"
                            onChange={(e) => setDescricao(e.target.value)}
                            type="text"
                          />
                          
                        </div>
                      </div>
                      
                      <div className="row mt-3">
                        <div className="col text-right actionButtons">
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => setPag2(false)}
                          >
                            Anterior
                          </Button>

                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => {setPag3(true) ; setPag2(false)}}
                          >
                            Próximo
                          </Button>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <br />
                        <div className="col text-right">
                          Already have an account? <a href="/">Sign in</a>
                        </div>
                      </div>
                    </form>
                      )
                    }

                    {
                        pag3 && (
                          <form >
                      <div className="row">
                        <div className="col text-left">
                          <label htmlFor="renda_per_capita" className="form-label">
                            Renda per capita
                          </label>
                          <input
                            id="renda_per_capita"
                            value={renda_per_capita}
                            name="renda_per_capita"
                            className="form-control"
                            onChange={(e) => setRenda_per_capita(e.target.value)}
                            />
                        </div>
                        <div className="col text-left">
                          <label htmlFor="modalidade`" className="form-label">
                            Modalidade
                          </label>
                          <input
                            id="modalidade"
                            name="modalidade"
                            value={modalidade}
                            onChange={(e) => setModalidade(e.target.value)}
                            className="form-control"
                            />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="distancia" className="form-label">
                            Distancia(km)
                          </label>
                          <input
                            id="distancia"
                            name="distancia"
                            className="form-control"
                            value={distancia_km}
                            onChange={(e) => setDistancia_km(e.target.value)}
                            />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="oportunidade" className="form-label">
                            Oportunidade
                          </label>
                          <input
                            id="oportunidade"
                            value={oportunidade}
                            name="oporunidade"
                            className="form-control"
                            onChange={(e) => setOportunidade(e.target.value)}
                           
                          />
                          
                        </div>
                      </div>
                      
                      <div className="row mt-3">
                        <div className="col text-right actionButtons">
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => {setPag3(false); setPag2(true)}}
                          >
                            Anterior
                          </Button>

                          <Button
                            variant="primary"
                            size="sm"
                            onClick={handlesubmit}
                          >
                            Cadastrar
                          </Button>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <br />
                        <div className="col text-right">
                          Already have an account? <a href="/">Sign in</a>
                        </div>
                      </div>
                    </form>
                        )
                    }




                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

}
export default Registration;

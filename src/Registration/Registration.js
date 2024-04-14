import React from "react";
import { useFormik } from "formik";
import "./Registration.css";
import {useState} from 'react'
import { Button } from "react-bootstrap";
// import { registrationSchema } from "./RegistrationSchema";
import Select2 from "../components/Select";



// primeira tela
const Registration = () => {
const [nome, setNome] = useState("")
const [sobrenome, setSobrenome] = useState("")
const [email, setEmail] = useState("")
const [genero, setGenero] = useState(["Masculino", "Feminino", "Outro"])
const [data_nascimento, setDataNascimento] = useState("")
const [renda_per_capita, setRenda_per_capita] = useState("")
const [generoSelected, setGeneroSelected] = useState([])


// segunda tela
const [cep, setCep] = useState("")
const [escolaridade, setEscolaridade] = useState(["Nono ano", "1º Ano E.M", "2º Ano E.M", "3º Ano E.M", "Supletivo", "Ensino técnico"])
const [ocupacao, setOcupacao] = useState("")
const [estudaEstudou, setEstudaEstudou] = useState(["Escola pública", "Escola privada com bolsa", "Escola privada sem bolsa"])
const [escolaridadeSelected, setEscolaridadeSelected] = useState([])
const [estudaEstudouSelected, setEstudaEstudouSelected] = useState([])

// terceira tela


const [modalidade, setModalidade] = useState(["Presencial", "Remoto", "Híbrido"])
const [area_interesse, setArea_interesse] = useState("")
const [buscaOportunidade, setBuscaOportunidade] = useState(["Acadêmica", "Trabalho", "Extra curricular"])
const [descricao, setDescricao] = useState("")
const [turnoDisponivel, setTurnoDisponivel] = useState(["Manhã", "Tarde", "Noite"]);
const [disponibilidade, setDisponibilidade] = useState(["Mesma cidade", "Mesmo estado", "Outro estado", "Mesmo país", "Outro país"]);
const [disponibilidadeSelected, setDisponibilidadeSelected] = useState([]);
const [turnoDisponivelSelected, setTurnoDisponivelSelected] = useState([]);
const [buscaOportunidadeSelected, setBuscaOportunidadeSelected] = useState([]);
const [modalidadeSelected, setModalidadeSelected] = useState([])





const handleBuscaOportunidadeSelect = (selectedOption) => {
  setBuscaOportunidadeSelected(selectedOption);
};
const handleTurnoDisponivelSelect = (selectedOption) => {
  setTurnoDisponivelSelected(selectedOption);
};
const handleGeneroSelect = (selectedOption) => {
  setGeneroSelected(selectedOption);
};

const  handleEscolaridadeSelect = (selectedOption) => {
  setEscolaridadeSelected(selectedOption);
};
const  handleModalidadeSelect = (selectedOption) => {
  setModalidadeSelected(selectedOption);
};

const  handleEstudaEstudouSelect = (selectedOption) => {
  setEstudaEstudouSelected(selectedOption);
};
const handleDescricao = (selectedOption) => {
  setDescricao(selectedOption);
};
const handleDisponibilidadeSelect = (selectedOption) => {
  setDisponibilidadeSelected(selectedOption);
};


const [pag2, setPag2] = useState(false)
const [pag3, setPag3] = useState(false)


const handlesubmit = (values)=> {
  alert(
    "Form is valid now!. You can make a call to API inside onSubmit function"
  );
  // action.resetForm();
  fetch('http://localhost:8080/aluno', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({
    //   nome: nome + " " + sobrenome,
    //   email: email,
    //   genero: genero,
    //   cep: cep,
    //   escolaridade: escolaridade,
    //   tipo_escola: tipoEscola,
    //   ocupacao: ocupacao,
    //   renda_per_capita: renda_per_capita,
    //   modalidade: modalidade,
    //   distancia_km: distancia_km,
    //   oportunidade: oportunidade,
    //   area_interesse: area_interesse,
    //   descricao: descricao,
    //   dataNascimento: data_nascimento
    // })
  
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
                    
                    {
                      !pag2 && !pag3 && (
                        <>
                      
                        <p class="text-center h3  mb-3 mt-4">Queremos te conhecer melhor...</p>
                        <form >
                      <div className="row">
                        <div className="col text-left">
                          <label htmlFor="nome" className="form-label">
                            Nome
                          </label>
                          <input
                            id="nome"
                            name="nome"
                            className="form-control"
                            value= {nome}
                            onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div className="col text-left">
                          <label htmlFor="sobrenome`" className="form-label">
                            Sobrenome
                          </label>
                          <input
                            id="sobrenome"
                            name="sobrenome"
                            className="form-control"
                            onChange={(e) => setSobrenome(e.target.value)}
                            value={sobrenome}
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
                          <Select2 placeholder="Selecione um gênero" isMulti={false} lines = {genero} handleChangeLineSelect = {handleGeneroSelect}  linesSelected ={generoSelected }></Select2>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="data_nascimento" className="form-label">
                            Data de nascimento
                          </label>
                          <input
                            id="data_nascimento"
                            value={data_nascimento}
                            name="data_nascimento"
                            className="form-control"
                            onChange={(e) => setDataNascimento(e.target.value)}
                            type="date"
                          />
                          
                        </div>
                      </div>
                      <div className="row mt-3">
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
                            type="number"
                          />
                          
                        </div>
                        <div className="col text-left">
                          <label htmlFor="cep" className="form-label">
                            Seu cep
                          </label>
                          <input
                            placeholder="Ex: 04086002"
                            id="cep"
                            value={cep}
                            name="cep"
                            className="form-control"
                            onChange={(e) => setCep(e.target.value)}
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
                      
                    </form>
                    </>  )
                    }


                    {
                        pag2 && (
                          <>
                           
                          <p class="text-center h3  mb-3 mt-4">Sua escolaridade...</p>
                          <form >
                      
                      <div className="row">
                        
                        <div className="col text-left">
                          <label htmlFor="escolaridade`" className="form-label">
                            Escolaridade
                          </label>
                          <Select2 placeholder="Selecione uma opção" isMulti={false}  linesSelected ={escolaridadeSelected} handleChangeLineSelect ={handleEscolaridadeSelect } lines ={escolaridade} ></Select2>
                          
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="ocupacao" className="form-label">
                            Ocupação atualmente
                          </label>
                          <input
                            id="ocupacao"
                            name="ocupacao"
                            value={ocupacao}
                            className="form-control"
                            onChange={(e) => setOcupacao(e.target.value)}
                            placeholder="Ex: Estudante, Menor aprendiz, estagiário na área de TI, etc."
                            type="ocupacao"
                          />
                          
                        </div>
                      
                      </div>
                      <div className="col text-left">
                          <label htmlFor="estuda_estudou" className="form-label">
                            Estuda/estudou
                          </label>
                          <Select2 placeholder="Selecione uma opção" isMulti={false}  linesSelected ={estudaEstudouSelected} handleChangeLineSelect ={handleEstudaEstudouSelect} lines ={estudaEstudou} ></Select2>
                        </div>
                    
                      
                      <div className="row mt-3">
                        <div className="col text-right actionButtons">
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => {setPag2(false)}}
                          >
                            Anterior
                          </Button>

                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => {setPag3(true); setPag2(false)}}
                          >
                            Proximo
                          </Button>
                        </div>
                      </div>
                      
                    </form>
                     </>)
                    }



                    {
                      pag3 && (
                        <>
                      
                         <p class="text-center h3  mb-3 mt-4">Oportunidades que te interessa...</p>
                        <form >
                     
                      
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="turno_disponivel" className="form-label">
                            Seu turno disponível 
                          </label>
                          <Select2 placeholder="Selecione uma opção" isMulti={false}  linesSelected ={turnoDisponivelSelected} 
                          handleChangeLineSelect={handleTurnoDisponivelSelect} lines ={turnoDisponivel} ></Select2> 
                        </div>
                      </div>
                      <div className="col text-left">
                          <label htmlFor="disponibilidade" className="form-label">
                           Tenho interesse em oportunidades que estejam...
                          </label>
                            <Select2 placeholder="Selecione uma opção" linesSelected={disponibilidadeSelected}
                             handleChangeLineSelect={handleDisponibilidadeSelect} 
                             lines ={disponibilidade} isMulti = {true} ></Select2>
                        </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="modalidade`" className="form-label">
                           Modalidade
                          </label>
                            <Select2 placeholder="Selecione uma opção" linesSelected={modalidadeSelected}
                             handleChangeLineSelect={handleModalidadeSelect} 
                             lines ={modalidade} isMulti = {false} ></Select2>
                        </div>
                        <div className="col text-left">
                          <label htmlFor="busca_oportunidade`" className="form-label">
                           Busco uma oportunidade...
                          </label>
                            <Select2 placeholder="Selecione uma opção" linesSelected={buscaOportunidadeSelected}
                             handleChangeLineSelect={handleBuscaOportunidadeSelect} 
                             lines ={buscaOportunidade} isMulti = {false} ></Select2>
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
                            placeholder="Ex: Psicologia, Letras, Exatas e Medicina"
                            name="area_interesse"
                            className="form-control"
                            onChange={(e) => setArea_interesse(e.target.value)}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <textarea onChange={e => handleDescricao(e.target.value)} className="form-control text_placeholder" placeholder="Ex: Gosto de estudar e meu hobby preferido é cozinhar  ">
                          </textarea>
                        </div>
                      </div>

                    
                     
                     
                      
                      <div className="row mt-3">
                        <div className="col text-right actionButtons">
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => {setPag3(false); setPag2(true) }}
                          >
                            Anterior
                          </Button>

                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => {handlesubmit()}}
                          >
                            Cadastrar
                          </Button>
                        </div>
                      </div>
                     
                    </form>
                    </>  )
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

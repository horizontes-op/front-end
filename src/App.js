import "./App.css";
import Registration from "./Registration/Registration";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Oportunidades from "./Oportunidades/Oportunidades";
import { useState } from "react";
function App() {
  
  
  const oportunidadesMock = [
    {
      "id_aluno": "AL001",
      "id_instituicao": "INST001",
      "motivo": "Bolsa de estudos",
      "nome": "Maria Oliveira",
      "area_atuacao": "Medicina",
      "cnpj": "12345678901234",
      "site": "www.instituicao1.com",
      "modalidade": "Presencial",
      "cep": "12345-678",
      "numero_endereco": "123",
      "perfil_instagram": "maria.oliveira",
      "perfil_facebook": "maria.oliveira",
      "perfil_linkedin": "maria.linkedin",
      "perfil_twitter": "maria_twitter",
      "email": "maria@email.com",
      "telefone": "(00) 1234-5678",
      "missao": "Salvar vidas",
      "visao": "Ser a melhor faculdade de medicina do país"
    },
    {
      "id_aluno": "AL002",
      "id_instituicao": "INST002",
      "motivo": "Iniciação científica",
      "nome": "Pedro Santos",
      "area_atuacao": "Engenharia Civil",
      "cnpj": "98765432109876",
      "site": "www.instituicao2.com",
      "modalidade": "À distância",
      "cep": "54321-876",
      "numero_endereco": "456",
      "perfil_instagram": "pedro.engcivil",
      "perfil_facebook": "pedro.santos",
      "perfil_linkedin": "pedro.linkedin",
      "perfil_twitter": "pedro_twitter",
      "email": "pedro@email.com",
      "telefone": "(00) 9876-5432",
      "missao": "Construir um futuro sustentável",
      "visao": "Ser reconhecida internacionalmente pela qualidade de ensino"
    },
    {
      "id_aluno": "AL003",
      "id_instituicao": "INST003",
      "motivo": "Estágio remunerado",
      "nome": "Ana Rodrigues",
      "area_atuacao": "Administração",
      "cnpj": "13579246801357",
      "site": "www.instituicao3.com",
      "modalidade": "Presencial",
      "cep": "67890-321",
      "numero_endereco": "789",
      "perfil_instagram": "ana.adm",
      "perfil_facebook": "ana.rodrigues",
      "perfil_linkedin": "ana.linkedin",
      "perfil_twitter": "ana_twitter",
      "email": "ana@email.com",
      "telefone": "(00) 2468-1357",
      "missao": "Otimizar processos",
      "visao": "Formar líderes empreendedores"
    },
    {
      "id_aluno": "AL004",
      "id_instituicao": "INST001",
      "motivo": "Programa de intercâmbio",
      "nome": "Luiz Costa",
      "area_atuacao": "Ciências da Computação",
      "cnpj": "24681097532468",
      "site": "www.instituicao1.com",
      "modalidade": "Presencial",
      "cep": "13579-642",
      "numero_endereco": "987",
      "perfil_instagram": "luiz.comp",
      "perfil_facebook": "luiz.costa",
      "perfil_linkedin": "luiz.linkedin",
      "perfil_twitter": "luiz_twitter",
      "email": "luiz@email.com",
      "telefone": "(00) 9753-2468",
      "missao": "Desenvolver soluções inovadoras",
      "visao": "Ser reconhecida pelo pioneirismo tecnológico"
    },
    {
      "id_aluno": "AL005",
      "id_instituicao": "INST002",
      "motivo": "Projeto de pesquisa",
      "nome": "Carla Lima",
      "area_atuacao": "Biologia",
      "cnpj": "86420917364592",
      "site": "www.instituicao2.com",
      "modalidade": "Presencial",
      "cep": "97531-864",
      "numero_endereco": "741",
      "perfil_instagram": "carla.bio",
      "perfil_facebook": "carla.lima",
      "perfil_linkedin": "carla.linkedin",
      "perfil_twitter": "carla_twitter",
      "email": "carla@email.com",
      "telefone": "(00) 2091-7463",
      "missao": "Contribuir para a preservação ambiental",
      "visao": "Ser líder em estudos sobre biodiversidade"
    },
    {
      "id_aluno": "AL006",
      "id_instituicao": "INST003",
      "motivo": "Estágio voluntário",
      "nome": "Marcos Souza",
      "area_atuacao": "Psicologia",
      "cnpj": "75203648920753",
      "site": "www.instituicao3.com",
      "modalidade": "Presencial",
      "cep": "32145-987",
      "numero_endereco": "654",
      "perfil_instagram": "marcos.psi",
      "perfil_facebook": "marcos.souza",
      "perfil_linkedin": "marcos.linkedin",
      "perfil_twitter": "marcos_twitter",
      "email": "marcos@email.com",
      "telefone": "(00) 0364-8920",
      "missao": "Ajudar pessoas a alcançarem seu potencial",
      "visao": "Ser referência em saúde mental"
    }
  ]
  const [preencheuFormulario, setPreencheuFormulario] = useState(false);
  
  return (
    <div className="App">
      {!preencheuFormulario && <Registration setPreencheuFormulario={setPreencheuFormulario} />}
      {preencheuFormulario && <Oportunidades oportunidades={oportunidadesMock} />}
    </div>
  );
}
export default App;

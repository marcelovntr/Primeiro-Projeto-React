import { useContext } from "react"
import { useForm } from "react-hook-form"
import { TrilhasContext } from "../../context/TrilhasContext";
import styles from "./PaginaCadastro.module.css"
import { useNavigate } from "react-router-dom";




function PaginaCadastro() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const { adicionarTrilha } = useContext(TrilhasContext);

  const navigate = useNavigate();

  function onSubmit(formValue) {
    console.log("valores do formulário:\n", formValue);

    adicionarTrilha(formValue);

    navigate("/lista")
  }

  return (
    <div className={styles.containercadastro}>

      <div className={styles.titulo}>
        <h1>Cadastro de Nova Trilha</h1>
      </div>


      <form className={styles.formcadastro} onSubmit={handleSubmit(onSubmit)}>  {/*<-- este segundo onSubmit é oa nossa function onSubmuit*/}
        <div>
          <label htmlFor="nomeTrilha">Nome da Trilha</label>
          <input type="text" placeholder="digite o nome da trilha"
            {...register("nomeTrilha", {
              required: "Obrigatório preenchimento do nome da tilha",
              maxLength: { value: 100, message: "máximo de 100 caracteres" }
            })} />
          {errors.nometrilha && <p>{errors.nometrilha.message}</p>}
        </div>
        <div>
          <label htmlFor="duracao">Duração (em horas)</label>
          <input type="number" placeholder="digite a duração em horas"
            {...register("duracao", {
              required: "Obrigatório o preenchimento do tempo estimado",
              maxLength: { value: 5, message: "máximo de 5 caracteres contando com ':'" }
            })} />
          {errors.duracao && <p>{errors.duracao.message}</p>}
        </div>
        <div>
          <label htmlFor="trajeto">Trajeto (Km)</label>
          <input type="number"
            placeholder="Distância em Km"

            {...register("trajeto", { required: "Necessário inserir a distância" })} />
          {errors.trajeto && <p>{errors.trajeto.message}</p>}
        </div>
        <div>
          <label htmlFor="cidade">Cidade</label>
          <input type="text" placeholder="nome da cidade"
            {...register("cidade", {
              required: "Preencha o nome da cidade",
              maxLength: { value: 60, message: "limite de 60 caracteres" }
            })} />
          {errors.cidade && <p>{errors.cidade.message}</p>}
        </div>
        <div>
          <label htmlFor="estado"></label>
          <select {...register("estado", { required: "Selecione uma opção", minLength:{ value: 2, message: "selecione um estado"} })}>
          <option value="">Selecione um estado</option>
            <option value="AC">AC</option>
            <option value="AL"> AL</option>
            <option value="AM"> AM</option>
            <option value="AP"> AP</option>
            <option value="BA"> BA</option>
            <option value="CE"> CE</option>
            <option value="DF"> DF</option>
            <option value="ES"> ES</option>
            <option value="GO"> GO</option>
            <option value="MA"> MA</option>
            <option value="MG"> MG</option>
            <option value="MS"> MS</option>
            <option value="MG"> MG</option>
            <option value="PA"> PA</option>
            <option value="PB"> PB</option>
            <option value="PR"> PR</option>
            <option value="PE"> PE</option>
            <option value="PI"> PI</option>
            <option value="RJ"> RJ</option>
            <option value="RN"> RN</option>
            <option value="RS"> RS</option>
            <option value="RO"> RO</option>
            <option value="RR"> RR</option>
            <option value="SC"> SC</option>
            <option value="SP"> SP</option>
            <option value="SE"> SE</option>
            <option value="TO"> TO</option>
          </select>
          {errors.estado && <p>{errors.estado.message}</p>}
        </div>
        <div>
          <label htmlFor="usuario">Nome completo do usuário</label>
          <input type="text" placeholder="Nome completo"
            {...register("usuario", { maxLength: {value:60, message: "limite de 60 caracteres"} })} />
          {errors.usuario && <p>{errors.usuario.message}</p>}
        </div>
        <div>
          <label htmlFor="dificuldade"></label>
          <select {...register("dificuldade", { required: "Este campo é obrigatório" })}>
          <option value=""> Selecione uma dificuldade</option>
            <option value="iniciante">iniciante</option>
            <option value=" médio"> médio</option>
            <option value=" experiente"> experiente</option>
          </select>
          {errors.dificuldade && <p>{errors.dificuldade.message}</p>}
        </div>
        <div>
          <label htmlFor="tipo">Tipo de trilha</label>
          <select 
          {...register("tipo", { 
            required: "Este campo é obrigatório" })}>
          <option value=""> Selecione uma tipo</option>
            <option value="Caminhada / trekking"> caminhada/trekking</option>
            <option value="ciclismo / motocross"> ciclismo/motocross</option>
            <option value="carro / offroad"> carro/offroad</option>
          </select>
          {errors.tipo && <p>{errors.tipo.message}</p>}
        </div>
        <div>
          <label htmlFor="urlImagem">"Url da imagem"</label>
          <input type="text" placeholder="Url da imagem"
            {...register("urlImagem", {
              required: "Campo obrigatório!", maxLength: {value: 300, message: "limite de 300 caracteres"}}
            )} />
            {errors.urlImagem && <p>{errors.urlImagem.message}</p>}

        </div>
        <span className={styles.butao}>
          <button className={styles.butaoleft} type="submit">Cadastrar</button>
          <button className={styles.butaoright} >Voltar</button>
        </span>
      </form>

    </div>
  )
}
export default PaginaCadastro
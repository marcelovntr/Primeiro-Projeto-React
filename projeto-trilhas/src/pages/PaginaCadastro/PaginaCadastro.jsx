  import { useContext } from "react"
  import { useForm } from "react-hook-form"
  import { TrilhasContext } from "../../context/TrilhasContext";
  import styles from "./PaginaCadastro.module.css"
  
 


  function PaginaCadastro() {
      const { register, handleSubmit, formState: { errors } } = useForm();

      const { adicionarTrilha } = useContext(TrilhasContext);


      function onSubmit(formValue) {
          console.log("valores do formulário:\n", formValue);

        
          adicionarTrilha(formValue);
        
          
      }
   
      return (
          <div className={styles.containercadastro}>

              <div>
                  <h1>Cadastro de Nova Trilha</h1>
              </div>

              
              <form className={styles.formcadastro} onSubmit={handleSubmit(onSubmit)}>
        
        <label htmlFor="nomeTrilha">Nome da Trilha</label>
        <input type="text" placeholder="digite o nome da trilha" 
        {...register("nomeTrilha", {required: "Obrigatório preenchimento do nome da tilha", maxLength: 100})} />
        {errors.nometrilha && <p>{errors.nometrilha.message}</p>}
        
        <label htmlFor="duracao">Duração (hora)</label>
        <input type="time" placeholder="digite a duração em horas" 
        {...register("duracao", {required: "Obrigatório o preenchimento do tempo estimado", maxLength: 5})} />
        {errors.duracao && <p>{errors.duracao.message}</p>}
        
        <label htmlFor="trajeto">Trajeto (Km)</label>
        <input type="number" 
        placeholder="Distância em Km" 
        
        {...register("trajeto", {required: "Necessário inserir a distância", maxLength:5  })} />
        {errors.trajeto && <p>{errors.trajeto.message}</p>}
        
        <label htmlFor="cidade">Cidade</label>
        <input type="text" placeholder="nome da cidade" 
        {...register("cidade", {required: "Preencha o nome da cidade", maxLength: 60})} />
        {errors.cidade && <p>{errors.cidade.message}</p>}
        
        <label htmlFor="estado"></label>
        <select {...register("estado", { required: true, maxLength: 2})}>
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

          <label htmlFor="usuario">Nome completo do usuário</label>
        <input type="text" placeholder="Nome completo" 
        {...register("usuario", {maxLength: 60})} />
        {errors.usuario && <p>{errors.usuario.message}</p>}
        
        <label htmlFor="dificuldade"></label>
        <select {...register("dificuldade", { required: true })}>
          <option value="iniciante">iniciante</option>
          <option value=" médio"> médio</option>
          <option value=" experiente"> experiente</option>
        </select>
        
        <label htmlFor="tipo">Tipo de trilha</label>
        <select {...register("tipo", { required: true })}>
          <option value="Caminhada / trekking"> caminhada/trekking</option>
          <option value="ciclismo / motocross"> ciclismo/motocross</option>
          <option value="carro / offroad"> carro/offroad</option>
        </select>
        
        <label htmlFor="urlImagem">"Url da imagem"</label>
        <input type="text" placeholder="Url da imagem"
        {...register("urlImagem")} />
        

        
                  <button type="submit">Cadastrar</button>
                  <button>Voltar</button>
              </form>

          </div>
      )
  }
  export default PaginaCadastro
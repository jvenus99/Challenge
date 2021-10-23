import { Router } from "express";
import { SearchRepositoryController } from "../controller/SearchRepositoryController";

const router = Router();

const searchRepositoryController = new SearchRepositoryController();

router.get('/getRepositories', async(request, response) => {
  const user = 'takenet';
  const language = '%3AC%23';
  const perPage = 100;

  // Montando a query da url, caso na aplicação os dados viessem na requisição
  let query=''; 
  if(user){
    query += `user:${user}+`;
  }
  if(language){
    query += `language${language}`;
  }
  try{
    let retorno: Object
    retorno = await searchRepositoryController.searchrepository(query, perPage);
    if(!retorno.error){
      if(retorno.status === 200){
        const repositoriosDesordenados = retorno.data.items;
        const repositoriosOrdenados = repositoriosDesordenados.sort(function(a,b) { 
          a.created_at = new Date(a.created_at);
          b.created_at = new Date(b.created_at);
          return a.created_at.getTime() - b.created_at.getTime() 
        }).slice(0,5);
        const respostaApi = repositoriosOrdenados.map(v => {
          const obj = {
            urlImagem: v.owner.avatar_url,
            titulo: v.name,
            subtitulo: v.description
          }
          return obj
        })
        response.json(respostaApi);
      } 
    }
  }catch(err){
    console.log(err)
    response.status(500).send({error:err, status: 500})
  }
})

export {router};
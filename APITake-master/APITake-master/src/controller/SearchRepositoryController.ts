import axios from 'axios';
import { response } from 'express';

export class SearchRepositoryController{
  
  async searchrepository(query:string, perPage:number,): Promise<Object>{
      try{
        let response:Object
        response = await axios.get(`https://api.github.com/search/repositories?q=${query}&${perPage}`)
        return response;
      }catch(err){
        response.error = err;
        return response;
      }

  }
}
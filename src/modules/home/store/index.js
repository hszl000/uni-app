import { defineStore } from "pinia";
import {
  getPage
} from 'modules/home/api'

export const useHomeStore = defineStore("homeStore",{
  state:()=>{
    return {
      name:"著丫头"
    }
  },
  getters:{
    getName:state=>state.name
  },
  actions:{
    setName(val){
      this.name = val
    },
    async getPage(data){

      const res = await getPage(data)

      return this.filterRequest(res)
    }
  }
})
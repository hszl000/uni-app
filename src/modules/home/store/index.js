import { defineStore } from "pinia";

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
    }
  }
})
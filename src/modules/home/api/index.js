import API from "@/utils/request";

export const getPage = ({current,size = 10})=>{
  return API.request({
    url:`/product/page?current=${current}&size=${size}`
  })
}

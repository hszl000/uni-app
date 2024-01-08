import filterRequest from '@/store/plugins/filterRequest'

export default ctx =>{
  ctx.store.filterRequest = filterRequest
}
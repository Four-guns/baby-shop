import https from '../utils/https';
export const userLogin = (data:any) => https({
  url: '/api/user/login',
  method:'POST',
  data
})
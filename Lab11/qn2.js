const dns=require('dns');
const dnsStr='www.miu.edu';

dns.lookup(dnsStr,(error,res)=>{

    console.log(res);
});
const express =require("express");
const nodeapp=express();
const path =require("path");
nodeapp.use(express.json());
nodeapp.use('/bootstrap', express.static('node_modules/bootstrap/dist/'))
nodeapp.use('/jquery', express.static('node_modules/jquery/dist'))
nodeapp.use('/resource', express.static('resource'))
nodeapp.get("/",(request,responce)=>{
    path.jo
     responce.sendFile(path.join( __dirname,"view/index.html"));
})
nodeapp.post("/convert",(request,responce)=>{
  let $input=request.body.input;
  const dtor=require('decimal-to-roman-converter');
  try{
    let roman=dtor(+$input);
    responce.send(JSON.stringify({"result":{"input":$input,"roman":roman}
                                }));
  
  }catch(e)
  {
    responce.send(JSON.stringify( { error:{
                                            "message":"Not a number or Invalid number ( it should be 1 - 3999)"
                                         }
                                  }
                                  ));
  }
   
})
nodeapp.listen(3000,()=>{
    console.log("listening to port 3000")
})
const router = require("express").Router();
const data = require("./services.data.js");

router.get("/getAllServices", (req, res) => {
  res.status(200).json({
    services: data
  });
});

router.get("/getService" , (req,res)=>{
  let slug = req.query.slug;
  data.forEach((serviceType)=>{
    serviceType.subServices.forEach((service)=>{
      if(service.slug === slug){
        res.status(200).json({
          service : service
        })
      }
    })
  })
})

module.exports = router;

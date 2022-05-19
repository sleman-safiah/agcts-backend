const router = require("express").Router();
const services = require("./service.route");

router.use("/service", services);

module.exports = router;

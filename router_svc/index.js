const express = require('express');
const request = require('request-promise-native');
const router = express();
const storeUrl = `http://${process.env.STORE_NAME}:${process.env.STORE_PORT}`;

router.use(async (req, res) => {
  const uri = `${storeUrl}${req.path}`
  const response = await request({uri});
  console.log(response);
  res.send(response);
})

router.listen(process.env.ROUTER_PORT, () => {
  console.log(`Router service listening on port ${process.env.ROUTER_PORT}`)
})
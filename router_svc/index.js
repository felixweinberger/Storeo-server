const express = require('express');
const request = require('request-promise-native');
const router = express();
const storeUrl = `https://${process.env.STORE_NAME}:${process.env.STORE_PORT}`;

router.use(async (req, res) => {
  console.log(storeUrl, process.env.STORE_NAME, process.env.STORE_PORT);
  const response = await request(new URL(storeUrl, req.path));
  res.json(response.body);
})

router.listen(process.env.ROUTER_PORT, () => {
  console.log(`Router service listening on port ${process.env.ROUTER_PORT}`)
})
import productModel from '../../Models/AdminModels/productModel';

const postNewProduct = async (req, res) => {
  const toInsert = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    discount: req.body.discount,
    tags: req.body.tags,
    images: req.body.images,
    category_id: req.body.category_id,
  };
  const productProperties = req.body.product_properties.map((prop) => {
    const unit = (!prop.units) ? '' : prop.units;
    return Object.assign({}, {
      category_id: prop.category_id,
      property_name: prop.property_name,
      units: unit,
      property_value: prop.property_value,
    });
  });


  try {
    const getProductId = await productModel.addProduct(toInsert);
    await productModel.addToProductProperties(productProperties, getProductId[0]);
    res.status(201).send('Success');
  } catch (e) {
    /* eslint-disable-next-line */
    console.log(e);
    res.status(500).send('Was unable to save correctly, please try again later');
  }
};
export default postNewProduct;

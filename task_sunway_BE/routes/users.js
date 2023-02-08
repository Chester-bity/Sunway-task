var express = require('express');
var router = express.Router();

//sql function 
async function getUserFunction(name) {
 return`
 SELECT `+ name+`
  FROM users;
 `
}

async function getCompanyFunction(name) {
  return`
  SELECT `+ name+`
   FROM companys;
  `
 }

async function insertFunction(value) {
  return`
  INSERT INTO users
  VALUES `+value+`;
  `
 }

 async function updateFunction(column, value, id) {
    return`
    UPDATE users
    SET `+column+` = `+value+`
    WHERE id = `+id+`;
  `
 }

 async function deleteFunction(id) {
  return`
  DELETE FROM users
  WHERE id = `+id+`;
`
}

//router
router.get('/staff/retreive/:name', async function(req, res, next) {
  const { name } = req.params
  const result = await getUserFunction(name);
  res.send(result)
});

router.post('/staff/create', async function(req, res, next) {
  const { name } = req.params
  const result = await insertFunction(name);
  res.send(result)
});

router.patch('/staff/upate/:id', async function(req, res, next) {
  const { id } = req.params
  const {column, value} =req.query

  const result = await updateFunction(column, value, id);
  res.send(result)
});

router.delete('/staff/delete/:id', async function(req, res, next) {
  const { id } = req.params
  const result = await deleteFunction(id);
  res.send(result)

});


module.exports = router;

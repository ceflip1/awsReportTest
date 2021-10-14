const addController = require('../src/controller/add_controller');
const Response = require("../util/response");
const response = new Response();


test('retorna response code 200',()=>{
  data ={
    "name": "Tony Stark",
    "alias": "IronMan",
    "species": "Human",
    "company": {
    "name": "Marvel",
    "team": "Avengers"
    }
    }
  const result = addController.addData(data);
  expect(result).toBe(true)

})
import * as app from "../pruebas/App";
import * as math from "../pruebas/math";

test("calls math.add", () => {
  
  //Se le asigna a const originalAdd, la funcion 'add' de math.js
  const originalAdd = math.add;

  // mock add with the original implementation 
  math.add = jest.fn(originalAdd);

  //Espera que doAdd(1,2) sea igual a 3, o sea 1+2=3
  expect(app.doAdd(1, 2)).toEqual(3);
  expect(math.add).toHaveBeenCalledWith(1, 2);

  /* Suscribe todas las implementaciones haciendo una reasignacion 
  de la funciones anteriores a la funcion Mock (se llamara a mock en vez de a la funcion Original)*/
  math.add.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");
  expect(math.add).toHaveBeenCalledWith(1, 2);

  //Aquí lo que se hace es restaurar lo que se restaura en la implementacion original de la funcion asignada
  math.add = originalAdd;
  expect(app.doAdd(1, 2)).toEqual(3);
});
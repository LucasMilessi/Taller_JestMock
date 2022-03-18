import * as app from "../pruebas/App";
import * as math from "../pruebas/math";

// Set all module functions to jest.fn
jest.mock("../pruebas/math");
test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});
test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});
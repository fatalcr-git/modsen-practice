const { crypt } = require("./index");

test("encrypt test 1", () => {
  expect(crypt("словарь")).toEqual("лсошамь");
});

test("encrypt test 2", () => {
  expect(crypt("дом")).toEqual("цор");
});

test("encrypt test 3", () => {
  expect(crypt("уеэоаыяиюьъй")).toEqual("уеэоаыяиюьъй");
});

test("encrypt test 4", () => {
  expect(crypt("йцукенгшщзхъфывапролджэячсмитьбю")).toEqual("йдутепчвбфжъзышанмосцхэяглрикьщю");
});

test("encrypt test 5", () => {
  expect(crypt("много слово для теста, вот так")).toEqual("рпочо лсошо цся келка, шок кат");
});


test("decrypt test 1", () => {
  expect(crypt("лсошамь")).toEqual("словарь");
});

test("decrypt test 2", () => {
  expect(crypt("шеситий чолуцамь")).toEqual("великий государь");
});

test("decrypt test 3", () => {
  expect(crypt("велкифпагпый тоц")).toEqual("шестизначный код");
});

test("decrypt test 4", () => {
  expect(crypt("цощмый гесошет")).toEqual("добрый человек");
});

test("decrypt test 5", () => {
  expect(crypt("пошый торнужкем")).toEqual("новый компухтер");
});
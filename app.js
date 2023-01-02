(function (){
  const onFormSubmit = (e) => {
    e.preventDefault();
    calculate();
    return false;
  };

  // It's up to this function to find the elements that it needs to fuck with
  const calculate = () => {
    const form = document.getElementById("calculator");
    const results = document.getElementById("results");
    const flour = parseInt(form.elements["flour"].value);
    const hydration = parseInt(form.elements["hydration"].value);

    const salt = calculateSalt(flour);
    const water = calculateWater(flour, hydration);
    const poolish = calculatePoolish(flour);
    const poolishFlour = poolish / 2;
    const poolishWater = poolish / 2;
    const newFlourWeight = flour - poolishFlour;
    const newWaterWeight = water - poolishWater;
    const totalWeight = flour + water + salt;

    results.elements["salt"].value = salt;
    results.elements["totalwater"].value = water;
    results.elements["newwater"].value = newWaterWeight;
    results.elements["newflour"].value = newFlourWeight;
    results.elements["poolishflour"].value = poolishFlour;
    results.elements["poolishwater"].value = poolishWater;
    results.elements["totalweight"].value = totalWeight;

    return true;
  };

  // TODO: Add support for season. In winter, 20%. In summer, 10%
  // @param flour: the amount of flour (in grams) to be used in the recipe
  const calculatePoolish = (flour) => {
    const weight = flour * 0.2;
    return weight;
  };

  // @param flour: the amount of flour (in grams) to be used in the recipe
  const calculateSalt = (flour) => {
    return flour * 0.02;
  };

  // @param flour: the amount of flour (in grams) to be used in the recipe
  // @param hydration: the desired dough hydration (in percentage)
  const calculateWater = (flour, hydration) => {
    return flour * (hydration / 100);
  };

  const form = document.getElementById("calculator");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    calculate();
    return false;
  });

  form.addEventListener("input", () => {
    calculate();
  });
}());

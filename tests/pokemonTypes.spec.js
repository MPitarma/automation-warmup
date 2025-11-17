import { test, expect } from "@playwright/test";
import { TYPES } from "./data/pokemonType.data";

test.describe("POKEMON TYPES TESTS", () => {
  const types = TYPES;

  types.forEach((type) => {
    test(`Pokemon type - ${type.name}`, async ({ request }) => {
      const response = await request.get(
        `https://pokeapi.co/api/v2/type/${type.name}`
      );

      const body = await response.json();

      for (let i = 0; i < types.length; i++) {
        const doubleDamagefrom = types[i].doubleDamage;
        if (types[i].name == type.name) {
          for (
            let index = 0;
            index < body.damage_relations.double_damage_from.length;
            index++
          ) {
            if (
              body.damage_relations.double_damage_from[index].name ==
              doubleDamagefrom
            ) {
              console.log(body.damage_relations.double_damage_from[index].name);
              expect(body.damage_relations.double_damage_from[index].name).toBe(
                doubleDamagefrom
              );
            }
          }
        }
      }
    });
  });
});

<script lang="ts" setup>
const expression = ref("a & b");
const variables = ref([]);
const inputs = ref([]);
const results = ref([]);
const ready = ref(false);
const tableExpression = ref(expression.value);

function texify(expr: string): string {
  return (
    "\\( " +
    expr
      .replaceAll("!", "\\neg ")
      .replaceAll("&", "\\land")
      .replaceAll("|", "\\lor") +
    " \\)"
  );
}

function loadTable(expr: string) {
  ready.value = false;
  tableExpression.value = texify(expression.value);
  variables.value = new Array(
    ...new Set(new Array(...expr.matchAll(/[A-Za-z]/g)).map((arr) => arr[0]))
  );
  variables.value.sort();
  inputs.value = genAllInputs(variables.value.length);
  results.value = inputs.value.map((input) => {
    let literal = expr;
    variables.value.forEach((v, i) => {
      literal = literal.replaceAll(v, input[i]);
    });
    return eval(literal);
  });
  ready.value = true;
  nextTick(reloadMathjax);
}

function genAllInputs(n: number) {
  const inputs = [];
  for (let i = 0; i < 1 << n; i++) {
    const input = [];
    for (let b = n - 1; b >= 0; b--) {
      input.push((i & (1 << b)) >> b);
    }
    inputs.push(input);
  }
  return inputs;
}
</script>

<template>
  <div>
    <h1>Truth tabler</h1>
    <input v-model="expression" @keydown.enter="loadTable(expression)" />
    <button @click="loadTable(expression)">Load table</button>
    <table v-if="ready">
      <thead>
        <tr>
          <th v-for="v in variables">\( {{ v }} \)</th>
          <th class="result">
            {{ tableExpression }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(input, i) in inputs">
          <td v-for="i in input">{{ i }}</td>
          <td class="result">
            {{ results[i] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="sass">
table, td, th
  border: 1px solid black
table
  display: table
  border-collapse: collapse

  td, th
    text-align: center

.result
  font-weight: bold
  border-left: 5px solid black
</style>

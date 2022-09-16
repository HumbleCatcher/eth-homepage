<template>
  <div>
    <h2>Truth tabler</h2>
    <v-row class="d-flex" align="center">
      <v-col cols="8">
        <v-text-field
          outlined
          dense
          hide-details
          v-model="expression"
          @keydown.enter="loadTable(expression)"
        />
      </v-col>
      <v-col>
        <v-btn height="40" color="primary" @click="loadTable(expression)"
          >Load table</v-btn
        >
      </v-col>
    </v-row>
    <table v-if="ready" class="my-8">
      <thead>
        <tr>
          <th v-for="v in variables" :key="v">\( {{ v }} \)</th>
          <th class="result" :key="tableExpression">
            {{ tableExpression }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(input, i) in inputs" :key="i">
          <td v-for="(i, j) in input" :key="j">{{ i }}</td>
          <td class="result">
            {{ results[i] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MathjaxVue from "~/mixins/Mathjax.vue";

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

export default Vue.extend({
  mixins: [MathjaxVue],
  data() {
    return {
      expression: "a & b",
      tableExpression: "a & b",
      variables: new Array<string>(),
      inputs: new Array<Array<number>>(),
      results: new Array<number | string>(),
      ready: false,
    };
  },
  methods: {
    loadTable(expr: string): void {
      this.ready = false;
      this.tableExpression = this.texify(this.expression);
      this.variables = new Array(
        ...new Set(
          new Array(...expr.matchAll(/[A-Za-z]/g)).map((arr) => arr[0])
        )
      );
      this.variables.sort();
      this.inputs = genAllInputs(this.variables.length);
      this.results = this.inputs.map((input) => {
        let literal = expr;
        this.variables.forEach((v, i) => {
          literal = literal.replaceAll(v, input[i].toString());
        });
        return eval(literal);
      });
      this.ready = true;
      this.$nextTick(this.reloadMathjax);
    },
    texify(expr: string): string {
      return (
        "\\( " +
        expr
          .replaceAll("!", "\\neg ")
          .replaceAll("&", "\\land")
          .replaceAll("|", "\\lor") +
        " \\)"
      );
    },
  },
});
</script>

<style lang="sass">
table, td, th
  border: 1px solid black
table
  display: table
  border-collapse: collapse
  overflow: auto
  width: 100%

  tr:nth-child(2n)
    background-color: #2b2b2b

  th
    background-color: #2b2b2b
    font-weight: 700

  td, th
    padding: .5rem
    text-align: center

.result
  font-weight: bold
  border-left: 5px solid black
</style>

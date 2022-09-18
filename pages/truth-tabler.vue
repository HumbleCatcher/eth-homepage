<template>
  <div>
    <h3>Truth tabler</h3>
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
        <v-btn block height="40" color="primary" @click="loadTable(expression)"
          >Load table</v-btn
        >
      </v-col>
    </v-row>
    <v-fade-transition>
      <table v-if="ready" class="my-6">
        <thead>
          <tr>
            <th v-for="v in variables" :key="v" v-html="$katex(v)"></th>
            <th class="result" :key="tableExpression">
              <div v-html="$katex(texify(tableExpression))"></div>
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
    </v-fade-transition>
    <h3>Equivalence tester</h3>
    <v-row
      class="flex-column flex-md-row"
      justify-md="space-between"
      align="center"
    >
      <v-col cols="12" sm="10" md="5">
        <v-text-field
          outlined
          dense
          hide-details
          v-model="expressionLeft"
          @keydown.enter="compareExpressions"
        />
      </v-col>
      <v-col cols="5" sm="4" md="2">
        <v-btn
          height="40"
          block
          class="animated"
          :class="[`animated--${prevResult}-to-${comparisonResult}`]"
          @click="compareExpressions"
        >
          <div v-html="$katex('\\equiv')"></div>
          ?
        </v-btn>
      </v-col>
      <v-col cols="12" sm="10" md="5">
        <v-text-field
          outlined
          dense
          hide-details
          v-model="expressionRight"
          @keydown.enter="compareExpressions"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

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

function extractVariables(expr: string): Array<string> {
  const variables = new Array(
    ...new Set(new Array(...expr.matchAll(/[A-Za-z]/g)).map((arr) => arr[0]))
  );
  variables.sort();
  return variables;
}

function evaluateExpression(
  expr: string,
  variables: Array<string>,
  input: Array<number>
): any {
  variables.forEach((v, i) => {
    expr = expr.replaceAll(v, input[i].toString());
  });
  return Number(eval(expr));
}

enum ExpressionType {
  Tautology,
  Unsatisfiable,
  Other,
}

function compareExpressionsWithDifferentVariables(
  expr1: string,
  variables1: Array<string>,
  expr2: string,
  variables2: Array<string>,
  intersection: Array<string>
): boolean {
  const constantTypes = [
    ExpressionType.Tautology,
    ExpressionType.Unsatisfiable,
  ];
  const sameConstantType = (e1: string, e2: string) => {
    const t1 = expressionTypeOf(
      e1,
      variables1.filter((v) => !intersection.includes(v))
    );
    const t2 = expressionTypeOf(
      e2,
      variables2.filter((v) => !intersection.includes(v))
    );
    return constantTypes.includes(t1) && constantTypes.includes(t2) && t1 == t2;
  };
  if (intersection.length == 0) {
    // equivalent if both formulas are tautologies or both are unsatisfiable
    return sameConstantType(expr1, expr2);
  } else {
    return genAllInputs(intersection.length).every((input) => {
      let literal1 = expr1;
      let literal2 = expr2;
      intersection.forEach((v, i) => {
        literal1 = literal1.replaceAll(v, input[i].toString());
        literal2 = literal2.replaceAll(v, input[i].toString());
      });
      return sameConstantType(literal1, literal2);
    });
  }
}

function expressionTypeOf(expr: string, variables: Array<string>) {
  let expected;
  if (variables.length == 0) {
    expected = evaluateExpression(expr, [], []);
  } else {
    for (let input of genAllInputs(variables.length)) {
      let result = evaluateExpression(expr, variables, input);
      if (expected == null) {
        expected = result;
      } else if (result !== expected) {
        return ExpressionType.Other;
      }
    }
  }
  return expected == 1
    ? ExpressionType.Tautology
    : ExpressionType.Unsatisfiable;
}

function compareExpressionsWithSameVariables(
  expr1: string,
  expr2: string,
  variables: Array<string>
): boolean {
  return genAllInputs(variables.length).every((input) => {
    return (
      evaluateExpression(expr1, variables, input) ===
      evaluateExpression(expr2, variables, input)
    );
  });
}

export default Vue.extend({
  data() {
    return {
      // truth table
      expression: "A & B",
      tableExpression: "",
      variables: new Array<string>(),
      inputs: new Array<Array<number>>(),
      results: new Array<number | string>(),
      ready: false,
      // compare expressions
      expressionLeft: "!(A | B)",
      expressionRight: "!A & !B",
      prevResult: "primary",
      comparisonResult: "primary",
    };
  },
  methods: {
    loadTable(expr: string): void {
      this.ready = false;
      this.tableExpression = this.expression;
      this.variables = extractVariables(expr);
      this.inputs = genAllInputs(this.variables.length);
      this.results = this.inputs.map((input) => {
        return evaluateExpression(expr, this.variables, input);
      });
      this.ready = true;
    },
    texify(expr: string): string {
      return expr
        .replaceAll("!", "\\neg ")
        .replaceAll("&", "\\land")
        .replaceAll("|", "\\lor")
        .replaceAll("^", "\\oplus");
    },
    compareExpressions() {
      const expressionLeft = this.expressionLeft;
      const expressionRight = this.expressionRight;
      const variablesLeft = extractVariables(expressionLeft);
      const variablesRight = extractVariables(expressionRight);
      const intersection = variablesLeft.filter((el) =>
        variablesRight.includes(el)
      );
      let equivalent;
      try {
        if (
          intersection.length == variablesLeft.length &&
          intersection.length == variablesRight.length
        ) {
          equivalent = compareExpressionsWithSameVariables(
            expressionLeft,
            expressionRight,
            intersection
          );
        } else {
          equivalent = compareExpressionsWithDifferentVariables(
            expressionLeft,
            variablesLeft,
            expressionRight,
            variablesRight,
            intersection
          );
        }
      } catch (e) {
        console.error("Error comparing expressions: " + e);
        this.prevResult = this.comparisonResult;
        this.comparisonResult = "primary";
        return;
      }
      this.prevResult = this.comparisonResult;
      this.comparisonResult = equivalent ? "success" : "error";
    },
  },
});
</script>

<style lang="sass" scoped>
table, td, th
  border: 1px solid black
table
  display: table
  border-collapse: collapse
  overflow: auto
  width: 100%

  tr:nth-child(2n)
    background-color: #212121

  tr:nth-child(2n + 1)
    background-color: #2b2b2b

  th
    background-color: #212121
    font-weight: 700

  td, th
    padding: .5rem
    text-align: center

  .result
    font-weight: bold
    border-left: 5px solid black

@keyframes primary-to-error
  0%
    background-color: var(--v-primary-base)
    border-color: var(--v-primary-base)
  100%
    background-color: var(--v-error-base)
    border-color: var(--v-error-base)

@keyframes primary-to-success
  0%
    background-color: var(--v-primary-base)
    border-color: var(--v-primary-base)
  100%
    background-color: var(--v-success-base)
    border-color: var(--v-success-base)

@keyframes success-to-success
  0%
    background-color: var(--v-success-base)
    border-color: var(--v-success-base)
  100%
    background-color: var(--v-success-base)
    border-color: var(--v-success-base)

@keyframes success-to-primary
  0%
    background-color: var(--v-success-base)
    border-color: var(--v-success-base)
  100%
    background-color: var(--v-primary-base)
    border-color: var(--v-primary-base)

@keyframes success-to-error
  0%
    background-color: var(--v-success-base)
    border-color: var(--v-success-base)
  100%
    background-color: var(--v-error-base)
    border-color: var(--v-error-base)

@keyframes error-to-error
  0%
    background-color: var(--v-error-base)
    border-color: var(--v-error-base)
  100%
    background-color: var(--v-error-base)
    border-color: var(--v-error-base)

@keyframes error-to-primary
  0%
    background-color: var(--v-error-base)
    border-color: var(--v-error-base)
  100%
    background-color: var(--v-primary-base)
    border-color: var(--v-primary-base)

@keyframes error-to-success
  0%
    background-color: var(--v-error-base)
    border-color: var(--v-error-base)
  100%
    background-color: var(--v-success-base)
    border-color: var(--v-success-base)

$from: primary, success, error
$to: primary, success, error

.v-application .v-btn.v-btn--has-bg
  &.animated
    animation-duration: 0.75s
    animation-timing-function: ease-out
    animation-fill-mode: forwards
    animation-play-state: running
    background: var(--v-primary-base)
    border-color: var(--v-primary-base)

    @each $f in $from
      @each $t in $to
        &--#{$f}-to-#{$t}
          animation-name: #{$f}-to-#{$t}
</style>

// Instructions can be found in let_vs_var.md

// Problems with var

function count() {
  let i;
  for (i = 0; i < 5; i++) {
    console.log(i + " inside the forLoop");
  }
  console.log(i + " outside the forLoop");
}

count();

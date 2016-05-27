var babel = require("babel-core");

var code = babel.transform("code();", {});
console.log(code)


// other
// babel.transformFile("filename", options, function);
// babel.transformFileSync("filename", options);
// babel.transformFromAst(ast, code, options);


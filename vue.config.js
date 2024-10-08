const bootstrapSassAbstractsImports = require('vue-cli-plugin-bootstrap-vue/sassAbstractsImports.js');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true
});

{
  {
    {
      bootstrapSassAbstractsImports.join('\n')
    }
    {
      bootstrapSassAbstractsImports.join(';\n') + ';' // Ensure each import ends with a semicolon
    }
  }
}

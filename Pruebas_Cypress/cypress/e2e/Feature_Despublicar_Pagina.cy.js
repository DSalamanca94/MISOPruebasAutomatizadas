//Importar el archivo JSON como variable
//Tenga en cuenta que al ejecutar esta prueba no deben haber paginas en estado DRAF en el listado//
const properties = require('./properties_sebastian.json');
const variables =  require('../../variables.json');

describe('Eliminar una página de la aplicación Ghost', () => {
  it('Iniciar sesión, crear una página nueva y luego eliminarla', () => {
    cy.visit(variables.UrlBase)
      .wait(1000)
      .get('#identification').type(variables.username)
      .wait(1000)
      .get('#password').type(variables.password)
      .get(properties.buttons.next).click()
      .wait(1000)
      .get(properties.buttons.pages).click()
      .wait(1000)
      .get(properties.buttons["New Page"]).click()
      .wait(2000)
      .get('textarea[placeholder="Page title"]').type('Unpublish Page Test')
      .wait(2000)
      .get('div[data-placeholder="Begin writing your page..."]').type('Este test inicia sesión, crea una página nueva y luego la despublica para dejarla en draft.')
      .wait(1000)
      .get(properties.buttons.publish).click()
      .wait(1000)
      .get(properties.buttons["continue to final review"]).click()
      .wait(1000)
      .get(properties.buttons["confirm publish"]).click()
      .wait(1000)
      .get(properties.buttons["back to editor"]).click()
      .wait(1000)
      .get(properties.buttons["back to pages"]).click()
      .wait(1000)
      .get(properties.buttons["edit page"]).first().click()
      .wait(500)
      .get(properties.buttons["unpublish page"]).click()
      .wait(500)
      .get(properties.buttons["confirm unpublish"]).click()
      .wait(500)
      .get(properties.buttons["back to pages"]).click()
      .wait(500)
      .get('span.draft').should('have.length', 1)
      .wait(500)
      .get(properties.buttons["edit page"]).first().click()
      .wait(500)
      .get(properties.buttons["page settings"]).click()
      .wait(500)
      .get(properties.buttons["delete page"]).click()
      .wait(500)
      .get(properties.buttons["confirm delete"]).click()
      .wait(500)
      
  });
});
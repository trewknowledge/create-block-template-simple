const { join } = require( 'path' );

module.exports = {
  pluginTemplatesPath: join( __dirname, 'plugin-templates' ),
  blockTemplatesPath: join( __dirname, 'block-templates' ),
	defaultValues: {
    pluginURI: 'https://trewknowledge.com',
		version: '1.0.0',
    author: 'Trew Knowledge',
    namespace: 'tk',
    category: 'theme',
    attributes: {},
  },
  variants: {
    static: {},
    dynamic: {
      render: 'file:./render.php',
    },
  },
};
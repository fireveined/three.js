
function WebGLProperties() {

		var properties = new WeakMap();

		function get( object ) {

			var map = properties.get( object.uuid || object  );

			if ( map === undefined ) {

				map = {};
				properties.set( object.uuid || object , map );
    
			}

			return map;

		}

		function remove( object ) {

			properties.delete( object.uuid || object  );

		}

		function update( object, key, value ) {

			properties.get( object.uuid || object  )[ key ] = value;

		}

		function dispose() {

			properties = new Map();

		}

		return {
			get: get,
			remove: remove,
			update: update,
			dispose: dispose
		};

	}

export { WebGLProperties };

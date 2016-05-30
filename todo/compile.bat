babel --presets=es2015 --out-file=data.min.js data.js
uglifyjs data.min.js -o data.min.js

babel --presets=es2015 --out-file=types.min.js types.js
uglifyjs types.min.js -o types.min.js

(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("canvasLevel",
{ "compressionlevel":-1,
 "height":20,
 "infinite":false,
 "layers":[
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 65, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 58, 0, 0, 0, 0, 31, 7, 0, 0, 0, 0, 0, 0, 0, 38, 48, 46, 0, 18, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 28, 0, 38, 44, 49, 46, 0, 0, 0, 0, 23, 1, 2, 3, 0, 32, 19, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 1, 2, 2, 3, 0, 5, 0, 0, 30, 8, 9, 10, 0, 0, 0, 0, 0, 55, 55, 0, 0, 0, 0, 0, 24, 0, 0, 0, 5, 22, 15, 16, 16, 17, 0, 0, 0, 24, 30, 15, 16, 17, 0, 0, 0, 0, 0, 42, 42, 0, 0, 0, 0, 0, 38, 49, 40, 0, 0, 29, 0, 0, 0, 0, 0, 24, 0, 31, 30, 0, 0, 0, 0, 1, 2, 3, 0, 0, 0, 0, 56, 18, 0, 0, 1, 2, 3, 0, 0, 36, 63, 63, 0, 0, 48, 38, 49, 38, 37, 0, 0, 0, 24, 8, 9, 10, 0, 0, 0, 65, 51, 26, 0, 0, 8, 9, 10, 0, 0, 4, 5, 6, 22, 0, 1, 2, 2, 2, 3, 0, 1, 5, 5, 5, 5, 6, 0, 0, 0, 42, 51, 33, 0, 30, 15, 16, 17, 0, 0, 0, 0, 0, 29, 0, 8, 9, 9, 9, 10, 0, 8, 10, 38, 0, 0, 0, 0, 56, 50, 18, 18, 18, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 22, 0, 8, 9, 9, 9, 10, 0, 8, 1, 2, 6, 0, 0, 22, 18, 18, 26, 26, 26, 0, 37, 62, 62, 49, 46, 0, 0, 0, 0, 36, 46, 8, 9, 12, 9, 10, 40, 8, 8, 10, 0, 0, 0, 36, 32, 25, 33, 44, 26, 2, 2, 2, 2, 2, 3, 0, 42, 42, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 8, 10, 0, 0, 18, 19, 19, 26, 26, 26, 26, 9, 9, 9, 9, 9, 10, 41, 41, 41, 41, 8, 9, 9, 9, 9, 9, 9, 9, 9, 8, 18, 19, 20, 32, 32, 33, 33, 33, 33, 33],
         "height":20,
         "id":1,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }],
 "nextlayerid":2,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.7.2",
 "tileheight":16,
 "tilesets":[
        {
         "firstgid":1,
         "source":"nature-paltformer-tileset-16x16.tsx"
        }],
 "tilewidth":16,
 "type":"map",
 "version":"1.6",
 "width":30
});
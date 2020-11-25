    // useEffect(() =>{
    //     const blockSnapSize = 30;
    //     const padding = blockSnapSize;
    //     const width = window.innerWidth;
    //     const height = window.innerHeight;

    //     const grid = gridLayer

    //     //set vertical lines
    //     for (let i = 0; i < width / padding; i++) {
    //         const vertical = new Line({
    //             points: [(Math.round(i * padding)) + 0.5, 0, (Math.round(i * padding)) + 0.5, height],
    //             stroke: '#000000',
    //             strokeWidth: 1,
    //         });
    //         grid.add(vertical)
    //     }

    //     grid.add(new Line({points: [0,0,10,10]}));

    //     //set horizontal lines
    //     for (let j = 0; j < height / padding; j++) {
    //         const horizontal = new Line({
    //             points: [0, Math.round(j * padding), width, Math.round(j * padding)],
    //             stroke: '#000000',
    //             strokeWidth: 0.5,
    //         })
    //         grid.add(horizontal)
    //     }

    //     //add Line(s) (a child component) to Layer
    //     layerRef.current.add(gridLayer)
    //     layerRef.current.draw()

    // },[trigger])



var width = window.innerWidth;
var height = window.innerHeight;
// var shadowOffset = 20;
var tween = null;
var blockSnapSize = 30;

// var shadowRectangle = new Konva.Rect({
//   x: 0,
//   y: 0,
//   width: blockSnapSize * 6,
//   height: blockSnapSize * 3,
//   fill: '#FF7B17',
//   opacity: 0.6,
//   stroke: '#CF6412',
//   strokeWidth: 3,
//   dash: [20, 2]
// });

// function newRectangle(x, y, layer, stage) {
//   let rectangle = new Konva.Rect({
//     x: x,
//     y: y,
//     width: blockSnapSize * 6,
//     height: blockSnapSize * 3,
//     fill: '#fff',
//     stroke: '#ddd',
//     strokeWidth: 1,
//     shadowColor: 'black',
//     shadowBlur: 2,
//     shadowOffset: {x : 1, y : 1},
//     shadowOpacity: 0.4,
//     draggable: true
//   });
//   rectangle.on('dragstart', (e) => {
//     shadowRectangle.show();
//     shadowRectangle.moveToTop();
//     rectangle.moveToTop();
//   });
//   rectangle.on('dragend', (e) => {
//     rectangle.position({
//       x: Math.round(rectangle.x() / blockSnapSize) * blockSnapSize,
//       y: Math.round(rectangle.y() / blockSnapSize) * blockSnapSize
//     });
//     stage.batchDraw();
//     shadowRectangle.hide();
//   });
//   rectangle.on('dragmove', (e) => {
//     shadowRectangle.position({
//       x: Math.round(rectangle.x() / blockSnapSize) * blockSnapSize,
//       y: Math.round(rectangle.y() / blockSnapSize) * blockSnapSize
//     });
//     stage.batchDraw();
//   });
//   layer.add(rectangle);
// }

var gridLayer = new Konva.Layer();
var padding = blockSnapSize;
console.log(width, padding, width / padding);
for (var i = 0; i < width / padding; i++) {
  gridLayer.add(new Konva.Line({
    points: [Math.round(i * padding) + 0.5, 0, Math.round(i * padding) + 0.5, height],
    stroke: '#ddd',
    strokeWidth: 1,
  }));
}

gridLayer.add(new Konva.Line({points: [0,0,10,10]}));
for (var j = 0; j < height / padding; j++) {
  gridLayer.add(new Konva.Line({
    points: [0, Math.round(j * padding), width, Math.round(j * padding)],
    stroke: '#ddd',
    strokeWidth: 0.5,
  }));
}

var layer = new Konva.Layer();
shadowRectangle.hide();
layer.add(shadowRectangle);
newRectangle(blockSnapSize * 3, blockSnapSize * 3, layer, stage);
newRectangle(blockSnapSize * 10, blockSnapSize * 3, layer, stage);

stage.add(gridLayer);
stage.add(layer);

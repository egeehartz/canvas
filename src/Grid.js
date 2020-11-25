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

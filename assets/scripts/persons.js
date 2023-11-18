function toggleImage(image) {
    let currentImage = image.src.split('/').pop();

    const imageMap = {
        'p1.jpg': 'd1.jpg',
        'p2.jpg': 'd2.jpg',
        'p3.jpg': 'd3.jpg',
        'p4.jpg': 'd4.jpg',
        'p5.jpg': 'd5.jpg',
        'p6.jpg': 'd6.jpg',
        'p7.jpg': 'd7.jpg',
        'p8.jpg': 'd8.jpg',
        'p9.jpg': 'd9.jpg',
        'p10.jpg': 'd10.jpg',
        'p11.jpg': 'd11.jpg',
        'p12.jpg': 'd12.jpg',
        
        'd1.jpg': 'p1.jpg',
        'd2.jpg': 'p2.jpg',
        'd3.jpg': 'p3.jpg',
        'd4.jpg': 'p4.jpg',
        'd5.jpg': 'p5.jpg',
        'd6.jpg': 'p6.jpg',
        'd7.jpg': 'p7.jpg',
        'd8.jpg': 'p8.jpg',
        'd9.jpg': 'p9.jpg',
        'd10.jpg': 'p10.jpg',
        'd11.jpg': 'p11.jpg',
        'd12.jpg': 'p12.jpg',
    };

    if (currentImage in imageMap) {
        image.classList.add('rotate-image');

        setTimeout(() => {
            image.src = "assets/images/" + imageMap[currentImage];
            image.classList.remove('rotate-image');
        }, 1000);
    }
}
class Circle {
    color: string = 'green';
    radius: number = 20;

    constructor(color: string, radius: number) {
        this.color = color;
        this.radius = radius;
    }
}

let circlelist: Circle[] = [];

circlelist.push(new Circle('yellow', 10));
circlelist.push(new Circle('green', 15));
circlelist.push(new Circle('blue', 20));

function showList(circle: Circle) {
    console.log("Hình tròn này có màu " + circle.color + " và bán kính là " + circle.radius);
}

circlelist.forEach(showList);


let car={
    brand:'tesla',
    getBrand:function(){
        return this.brand
    }
}

const ans=car.getBrand.bind(car)
// Checks if the provided value is greater/less than 10
export const testNum = num => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(`${num} is greater than 10`);
        }
        else if (num < 10) {
            resolve(`${num} is less than 10`);
        } 
        else if (num === 10) {
            resolve(10);
        } else {
            reject("This isn't a number")
        }
    });
}
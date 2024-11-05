//let thay doi duoc gia tri
let a;
a = 3;
//const ko thay doi duoc gia tri
const b = 1

console.log(typeof a);

//kieu du lieu trong js
/**
 * number
 * string
 * booclean(true/false)
 * undefined
 * null
 */

//Object
// const product = {
//     name: "lam",
//     price: 100,
// };
// // product = {
// //     category: "hello"
// // };

// product.name = "hoang";
// console.log(product);

document.getElementById("table").innerHTML =
    `
<table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                        <button class="btn btn-danger">delete</button>
                    </td>
                </tr>
            </tbody>
        </table>`;




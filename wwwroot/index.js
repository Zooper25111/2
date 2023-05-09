//let url = "https://raw.githubusercontent.com/Zooper25111/Zooper25111.github.io/main/data.json";
let data = [];

async function loadData() {
    let datatemp = await fetchData();
    data = data.concat(datatemp.array);

    console.log(datatemp.employee[0]);

    document.getElementById("hello").innerHTML = datatemp.employee[0].name;

}
async function fetchData() {
    let response = await fetch(url);
    console.log(response);
    if (response.status == 200) {
        return await response.json();
    }
}

loadData();
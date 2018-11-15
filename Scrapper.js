let items = [];
let counter = 0;

function run() {
  const links = Array.from(document.getElementById("wrap").getElementsByTagName("a"));

  links.forEach(link => {
    console.log(link);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", link.href, true);
    xhr.responseType = "document";
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const imageName = this.responseXML.getElementsByClassName("main-icon")[0].src.replace(/.*\//g, "");
        const craftTab = Array.from(this.responseXML.getElementsByClassName("tab-page tab-table")).find(elem => elem.getAttribute('data-name') === 'craft');
        if (!craftTab) {
          return;
        }
        const topRow = craftTab.getElementsByTagName('table')[0].rows[1];
        const itemName = topRow.cells[1].innerText;
        const requiredItemLinks = Array.from(topRow.cells[2].getElementsByTagName("a"));


        let requiredItems = [];

        requiredItemLinks.forEach(item => {
          if (item) {
            const name = item.getElementsByTagName('img')[0].alt;
            const amount = (item.getElementsByClassName('text-in-icon')[0].innerText.replace(/[×|x|ft]/g, ''));
            if (amount == NaN) {
              console.log(itemName, name, amount);
            }
            requiredItems.push({name, amount});
          }
        });
        items.push({image: imageName, name: itemName, requirements: requiredItems});
        counter++;
        if (counter === links.length) {
          console.log("Finished");
          console.log(items);
        }
      }
    };
    xhr.send();
  });
}

run();

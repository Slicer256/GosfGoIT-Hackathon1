export default class listView {
    constructor(data, target) {
        this.data = data;
        this.target = target;
    }
    
    render() {

        return new Promise((resolve, reject) => {

            let tbody = document.createElement('tbody');

            for (let obj of this.data) {
                
                let tr = document.createElement('tr');
                tr.dataset.id = obj.id;
                
                for (let field of ['firstName', 'lastName', 'mark1', 'mark2', 'mark3']) {
                    let td = document.createElement('td');
                    td.innerHTML = obj[field];
                    tr.appendChild(td);
                }

                // let td = document.createElement('td');
                //
                // let a = document.createElement("a");
                // a.innerHTML = "Edit";
                // a.dataset.id = obj.id;
                //
                // td.appendChild(a);
                // tr.appendChild(td);

                tbody.appendChild(tr);

                // attach events
                // a.addEventListener("click", function(e) {
                //     let event = new Event('onEditStudent');
                //     document.getElementById('content').dispatchEvent(event);
                //
                // });

            }

            document.getElementById(this.target).innerHTML = `
                <table id='list' class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                    ${tbody.innerHTML}
                </table>`;

            return resolve;
        });


        
    }
}
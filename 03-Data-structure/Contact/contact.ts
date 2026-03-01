import * as readline from "readline";
// ── readline ──────────────────────────────────────────────────────────────────
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt(question: string): Promise<string> {
  return new Promise((resolve) => rl.question(question, resolve));
}
//Data structure
type contact = {
    'name':string,
    'number':string,
    'active':boolean
};
const contact_book: Map<string, contact> = new Map();
const contact1: contact = {'name': 'Juan Camilo', 'number': '3172111507', 'active':true};
const contact2: contact = {'name': 'Camila Plaza', 'number': '3169978446', 'active':true};
const contact3: contact = {'name': 'Nathalia Botero', 'number': '3117583573', 'active':true};
contact_book.set(contact1.number, contact1);
contact_book.set(contact2.number, contact2);
contact_book.set(contact3.number, contact3);

/*Functions*/
//function to replay the Menú
function divide_text(message:string){
console.log("---------------------------------------------")
console.log("*---*---*---*---*---*---*---*---*---*---*---*")
console.log("             ",message.toUpperCase(),"             ")
console.log("*---*---*---*---*---*---*---*---*---*---*---*")
console.log("---------------------------------------------")
};

//Fuction to print contact
function print_contact(contact: contact) {
  const status = contact.active ? "Activo" : "Inactivo";
  console.log(`name: ${contact.name}`);
  console.log(`number: ${contact.number}`);
  console.log(`status: ${status}`);
}
//Fuction to show contacts
function show_all_contact(){
  let index = 1;
    for (const contact of contact_book.values()) {
    console.log(`\n  [${index}]` );
    print_contact(contact);
    index++;
  }
}
//function to show actions
function show_actions(){
  console.log("0. call");
  console.log("1. Add a contact.");
  console.log("2. Update a contact.");
  console.log("3. Delete a contact.");
  console.log("4. Exit")
}

/*app*/
async function main() {
  let running = true;

  while (running) {
    divide_text("Contact book");
    show_all_contact();

    divide_text("Actions");
    show_actions();

    const action: string = await prompt('Select a option:')
    switch (action.trim()) {
      case "1": {
        divide_text("add contact");
        const name: string   = await prompt("Name: ");
        const number: string = await prompt("Number: ");
        contact_book.set(number, { name, number, active: true });
        console.log("\n contact added.\n");
        break;
      }
      case "2": {
        divide_text("Update contact");
        const number: string = await prompt("Number of contact: ");
        if (!contact_book.has(number)) {
          console.log("\n  Contact not found.\n");
          break;
        }
        const existing = contact_book.get(number)!;
        const new_name: string = await prompt("New name: ");
        contact_book.set(number, { ...existing, name: new_name });
        const new_number: string = await prompt("New number: ");
        contact_book.delete(number);
        contact_book.set(new_number, { ...existing, number: new_number });
        let new_status: string = await prompt("New Status: 1. active or 2. desactive");
          if (new_status === "1") {
            contact_book.set(number, { ...existing, active: true });
          } if (new_status === "2") {
            contact_book.set(number, { ...existing, active: false });
          } else {
            console.log("option not found")
          }

        console.log("\n Contact updated.\n");
        break;
      }
      case "3": {
        divide_text("Delete Contact");
        const number: string = await prompt("Númber of the contact: ");
        if (!contact_book.has(number)) {
          console.log("\n  Not found contact.\n");
          break;
        }
        contact_book.delete(number);
        console.log("\n Contact deleted.\n");
        break;
      }
      case "4": {
        console.log("\n GoodBye.\n");
        running = false;
        break;
      }
      default:
        console.log("\n  ???.\n");
    }
  }
  rl.close();
}

main()

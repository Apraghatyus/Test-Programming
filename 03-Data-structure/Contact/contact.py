# Data structure
contact_book: dict[str, dict] = {}

# Data mocked
contact1 = {'name': 'Juan Camilo',     'number': '3172111507', 'active': True}
contact2 = {'name': 'Camila Plaza',    'number': '3169978446', 'active': True}
contact3 = {'name': 'Nathalia Botero', 'number': '3117583573', 'active': True}

contact_book[contact1['number']] = contact1
contact_book[contact2['number']] = contact2
contact_book[contact3['number']] = contact3

# Functions
def divide_text(message: str):
    print("---------------------------------------------")
    print("*---*---*---*---*---*---*---*---*---*---*---*")
    print("             ", message.upper(), "             ")
    print("*---*---*---*---*---*---*---*---*---*---*---*")
    print("---------------------------------------------")

def print_contact(contact: dict):
    status = "Activo" if contact['active'] else "Inactivo"
    print(f"name: {contact['name']}")
    print(f"number: {contact['number']}")
    print(f"status: {status}")

def show_all_contacts():
    for index, contact in enumerate(contact_book.values(), start=1):
        print(f"\n  [{index}]")
        print_contact(contact)
        
def prompt_number(question: str) -> str:
    while True:
        number = input(question)
        if number.isdigit() and len(number) == 10:
            return number
        print(f"\n '{number}' is not valid. Please enter a 10-digit number without letters or special characters.\n")    

def show_actions():
    print("0. Call")
    print("1. Add a contact.")
    print("2. Update a contact.")
    print("3. Delete a contact.")
    print("4. Exit")
    
def add_contact():
    divide_text("Add contact")
    name   = input("Name: ")
    number = prompt_number("Number: ")
    contact_book[number] = {'name': name, 'number': number, 'active': True}
    print("\n Contact added.\n")

def update_contact():
    divide_text("Update contact")
    number = prompt_number("Number: ")
    if number not in contact_book:
        print("\n  Contact not found.\n")
        return
    existing = contact_book[number]

    new_name = input("New name: ")
    new_number = prompt_number("Number: ")
    new_status = input("New status: 1. active  2. deactivate: ")

    active = existing['active']
    if new_status == "1":
        active = True
    elif new_status == "2":
        active = False
    else:
        print("Option not found, status unchanged.")

    del contact_book[number]
    contact_book[new_number] = {
        'name':   new_name   if new_name   else existing['name'],
        'number': new_number if new_number else number,
        'active': active
    }
    print("\n Contact updated.\n")

def delete_contact():
    divide_text("Delete contact")
    number = prompt_number("Number: ")
    if number not in contact_book:
        print("\n  Contact not found.\n")
        return
    del contact_book[number]
    print("\n Contact deleted.\n")
    
# App
def main():
    running = True

    while running:
        divide_text("Contact book")
        show_all_contacts()

        divide_text("Actions")
        show_actions()

        action = input("\nSelect a option: ")
        match action:
            case "1":
                add_contact()
            case "2":
                update_contact()
            case "3":
                delete_contact()
            case "4":
                print("\n GoodBye.\n")
                running = False
            case _:
                print("\n  Option not found, try again .\n")
main()
# This program is to calculate the minimum amount of donut boxes to purchase as well as to calculate the cost after
# applying a quantity discount if applicable.

DONUTS_IN_BOX = 12
donuts_per_person = 0
boxes_needed = 0
leftover_donuts = 0
price_per_box = 0.00
total_price = 0.00

people = input("Enter the number of people attending the picnic: ")

if people.isnumeric():  # Checking for valid entries
    people = int(people)
    donuts_per_person = input("Enter the number of donuts for each person: ")

    if donuts_per_person.isnumeric():  # Checking for valid entries
        donuts_per_person = int(donuts_per_person)

        if (people * donuts_per_person) % DONUTS_IN_BOX > 0:  # Checking to see if donuts needed is a multiple of 12.
            boxes_needed = (people * donuts_per_person) // DONUTS_IN_BOX + 1  # Rounding up to correct amount of boxes.
            leftover_donuts = DONUTS_IN_BOX - (people * donuts_per_person) % DONUTS_IN_BOX
        else:
            boxes_needed = (people * donuts_per_person) // DONUTS_IN_BOX

        if boxes_needed > 20:  # Checking to see if a quantity discount is applicable.
            price_per_box = 6.00
        elif boxes_needed > 5:
            price_per_box = 7.50
        else:
            price_per_box = 8.00

        total_price = boxes_needed * price_per_box

        print("Minimum boxes of donuts needed: ", boxes_needed)
        print("Donuts left over: ", leftover_donuts)
        print("Cost of donuts: $", format(total_price, '.2f'), sep="")

    else:
        print(donuts_per_person, "is not a valid value.")

else:
    print(people, "is not a valid value.")

# Assignment 2: Program to simulate a monthly phone data plan and to calculate the cost

import random

data_plan = 10        # Initial gigabyte(GB) data limit
billing_cycle = 30    # Days in billing cycle
extra_GB = 0          # Initial GB authorized to be added


def main():
    get_input()
    total_usage, day = calculate_usage_for_billing_cycle()
    display_results(total_usage, day)


def get_input():  # Prompting user to enter any additional GB they would like
    global extra_GB
    extra_GB = input("How many extra GB can be added to your plan, if needed? ")

    while not extra_GB.isnumeric():  # Forcing user to enter a valid entry
        print(extra_GB, "is not a valid entry. Please enter an integer value.")
        extra_GB = input("How many extra GB can be added to your plan, if needed? ")

    extra_GB = int(extra_GB)


def calculate_usage_for_billing_cycle():
    global data_plan, extra_GB
    total_usage = 0
    day = 0

    while day != billing_cycle and total_usage < data_plan:  # Simulating random data usage and comparing to data plan
        estimated_daily_usage = round(data_plan / billing_cycle, 2)     # Equal to 0.33 GB
        today_usage = random.uniform(0.0, estimated_daily_usage * 2.5)  # Generating random usage
        total_usage += today_usage

        if total_usage > data_plan:  # To tell user when they have exceeded their plan

            if extra_GB > 0:  # Checking to see if user has any additional GBs
                print("As of day", day, "your total usage is", format(total_usage, '.2f'), "GB which exceeds your",
                  data_plan, "GB data plan.")
                print("1 GB has been added to your plan.")
                data_plan += 1
            extra_GB -= 1
        day += 1
    return total_usage, day


def display_results(total_usage, day):
    additional_gb = round(total_usage - 10, 2)  # Calculating additional GB usage, 10 is original data plan

    print('\n', "Total usage reached ", format(total_usage, '.2f'), " GB in ", day, " days.", sep="")

    if total_usage > data_plan:
        print("Your basic plan is 10 GB. You needed", format(additional_gb, '.2f'), "extra GB.")
        print("Amount of bill: $", format(70 + (15 * additional_gb), '.2f'), " ($70 + $15 * ",
              format(additional_gb, '.2f'), ")", sep="")
    else:
        print("Amount of bill: $", format(70, '.2f'), " ($70 + $15 * 0)", sep="")

    if day != billing_cycle:  # Checking to see if data was used before the month ended
        print("Your service has been suspended until the start of the next billing cycle.")

main()

#include <iostream>
using namespace std;

// Variables Globally Declared
string name;                                      // Variable to store the customer's name
char response;                                    // Variable to store the customer's response to whether they want to order more
int choice, item, quantity, amount = 0, bill = 0; // Variables to store the choice of item, specific item, quantity, amount for a specific item, and the total bill

// Base class for the fast food ordering system
class Fast_Food
{
public:
    // Constructor
    Fast_Food()
    {
        // Display the restaurant's name when an object of Fast_Food is created
        cout << "-- -- -- -- --Tops Tech.Fast Food-- -- -- -- --\n\n";
    }

    // Method to get the customer's name
    getInfo()
    {
        cout << "Enter your Name : ";
        cin >> name; // Read customer's name
        cout << "Hello " << name << endl
             << endl;
        cout << name << ", What would you Like to order?\n";
    }
};

// Derived class from Fast_Food that displays the menu items
class Items : public Fast_Food
{
public:
    // Method to display the main menu
    menu()
    {
        cout << "\n------Menu------\n";
        cout << "1) Pizza\n";
        cout << "2) Burger\n";
        cout << "3) Sandwich\n";
        cout << "4) Rolls\n";
        cout << "5) Biriyani\n";
    }

    // Methods to display the specific items for each category
    pizza()
    {
        cout << "1. Paneer Tikka Pizza          ?299\n";
        cout << "2. Tandoori Chicken Pizza      ?259\n";
        cout << "3. Onion Pizza                 ?149\n";
        cout << "4. Garlic and Herb Pizza       ?199\n";
    }

    burger()
    {
        cout << "1. Cheese Burger       ?69\n";
        cout << "2. McDouble            ?89\n";
        cout << "3. Delux Crispy        ?119\n";
        cout << "4. McVeggie            ?99\n";
    }

    sandwich()
    {
        cout << "1. Cheese Grill                ?49\n";
        cout << "2. Unicorn                     ?59\n";
        cout << "3. Veg. Paneer Sandwich        ?69\n";
        cout << "4. Maxican Cheese Grill        ?79\n";
        cout << "5. Club veg.                   ?99\n";
    }

    rolls()
    {
        cout << "1. Chinese Roll            ?29\n";
        cout << "2. Paneer chesse Roll      ?59\n";
        cout << "3. Cheese Corn Roll        ?49\n";
    }

    biriyani()
    {
        cout << "1. Hydrabadi Biriyani      ?129\n";
        cout << "2. Kashmiri Biriyani       ?119\n";
        cout << "3. Bombay Biriyani         ?139\n";
        cout << "4. Paneer Subz Biriyani    ?149\n";
    }
};

// Derived class from Items that handles the customer's choice and calculates the bill
class Choice_item : public Items
{
public:
    // Method to handle the customer's choice and calculate the bill
    MyChoice()
    {
        cout << "\nPlease Enter your Choice : ";
        cin >> choice; // Read the customer's choice of item category

        // Handle each category of items
        if (choice == 1)
        {
            pizza();
            cout << "\nPlease Enter Which Pizza you would like to have? : ";
            cin >> item; // Read the specific pizza choice

            // Handle each specific pizza choice
            if (item == 1)
            {
                int price = 299;
                cout << "Enter Quantity : ";
                cin >> quantity;           // Read the quantity of the chosen pizza
                amount = quantity * price; // Calculate the amount for the chosen quantity
                cout << "Amount : " << amount;
                bill += amount; // Add the amount to the total bil
            }
            else if (item == 2)
            {
                int price = 259;
                cout << "Enter Quantity : ";
                cin >> quantity;
                amount = quantity * price;
                cout << "Amount : " << amount;
                bill += amount;
            }
            else if (item == 3)
            {
                int price = 149;
                cout << "Enter Quantity : ";
                cin >> quantity;
                amount = quantity * price;
                cout << "Amount : " << amount;
                bill += amount;
            }
            else if (item == 4)
            {
                int price = 199;
                cout << "Enter Quantity : ";
                cin >> quantity;
                amount = quantity * price;
                cout << "Amount : " << amount;
                bill += amount;
            }
            else
            {
                cout << "\nPlease Enter Valid Choice..!\n";
                // cout << "\nPlease Enter Which Pizza you would like to have? : ";
                // cin >> item;
            }
        }
        else if (choice == 2)
        {
            burger(); // Display burger options
            cout << "\nPlease Enter Which Burger you would like to have? : ";
            cin >> item; // Read the specific burger choice

            // Handle each specific burger choice
            if (item == 1)
            {
                int price = 69;
                cout << "Enter Quantity : ";
                cin >> quantity;
                amount = quantity * price;
                cout << "Amount : " << amount;
                bill += amount;
            }
            else if (item == 2)
            {
                int price = 89;
                cout << "Enter Quantity : ";
                cin >> quantity;
                amount = quantity * price;
                cout << "Amount : " << amount;
                bill += amount;
            }
            else if (item == 3)
            {
                int price = 119;
                cout << "Enter Quantity : ";
                cin >> quantity;
                amount = quantity * price;
                cout << "Amount : " << amount;
                bill += amount;
            }
            else if (item == 4)
            {
                int price = 99;
                cout << "Enter Quantity : ";
                cin >> quantity;
                amount = quantity * price;
                cout << "Amount : " << amount;
                bill += amount;
            }
            else
            {
                cout << "\nPlease Enter Valid Choice..!\n";
                // cout << "\nPlease Enter Which Burger you would like to have? : ";
                // cin >> item;
            }
        }
        else if (choice == 3)
        {
            sandwich(); // Display sandwich options
            cout << "\nPlease Enter Which Sandwich you would like to have? : ";
            cin >> item; // Read the specific sandwich choice

            // Handle each specific sandwich choice
            if (item == 1)
            {
                int price = 49;
                cout << "Enter Quantity : ";
                cin >> quantity;
                amount = quantity * price;
                cout << "Amount : " << amount;
                bill += amount;
            }
            else if (item == 2)
            {
                int price = 59;
                cout << "Enter Quantity : ";
                cin >> quantity;
                amount = quantity * price;
                cout << "Amount : " << amount;
                bill += amount;
            }
            else if (item == 3)
            {
                int price = 69;
                cout << "Enter Quantity : ";
                cin >> quantity;
                amount = quantity * price;
                cout << "Amount : " << amount;
                bill += amount;
            }
            else if (item == 4)
            {
                int price = 79;
                cout << "Enter Quantity : ";
                cin >> quantity;
                amount = quantity * price;
                cout << "Amount : " << amount;
                bill += amount;
            }
            else if (item == 5)
            {
                int price = 99;
                cout << "Enter Quantity : ";
                cin >> quantity;
                amount = quantity * price;
                cout << "Amount : " << amount;
                bill += amount;
            }
            else
            {
                cout << "\nPlease Enter Valid Choice..!\n";
                // cout << "\nPlease Enter Which Sandwich you would like to have? : ";
                // cin >> item;
            }
        }
        else if (choice == 4)
        {
            rolls(); // Display roll options
            cout << "\nPlease Enter Which Roll you would like to have? : ";
            cin >> item; // Read the specific roll choice

            // Handle each specific roll choice
            if (item == 1)
            {
                int price = 29;
                cout << "Enter Quantity : ";
                cin >> quantity;
                amount = quantity * price;
                cout << "Amount : " << amount;
                bill += amount;
            }
            else if (item == 2)
            {
                int price = 59;
                cout << "Enter Quantity : ";
                cin >> quantity;
                amount = quantity * price;
                cout << "Amount : " << amount;
                bill += amount;
            }
            else if (item == 3)
            {
                int price = 49;
                cout << "Enter Quantity : ";
                cin >> quantity;
                amount = quantity * price;
                cout << "Amount : " << amount;
                bill += amount;
            }
            else
            {
                cout << "\nPlease Enter Valid Choice..!\n";
                // cout << "\nPlease Enter Which Roll you would like to have? : ";
                // cin >> item;
            }
        }
        else if (choice == 5)
        {
            biriyani(); // Display biriyani options
            cout << "\nPlease Enter Which Biriyani you would like to have? : ";
            cin >> item; // Read the specific biriyani choice

            // Handle each specific biriyani choice
            if (item == 1)
            {
                int price = 129;
                cout << "Enter Quantity : ";
                cin >> quantity;
                amount = quantity * price;
                cout << "Amount : " << amount;
                bill += amount;
            }
            else if (item == 2)
            {
                int price = 119;
                cout << "Enter Quantity : ";
                cin >> quantity;
                amount = quantity * price;
                cout << "Amount : " << amount;
                bill += amount;
            }
            else if (item == 3)
            {
                int price = 139;
                cout << "Enter Quantity : ";
                cin >> quantity;
                amount = quantity * price;
                cout << "Amount : " << amount;
                bill += amount;
            }
            else if (item == 4)
            {
                int price = 149;
                cout << "Enter Quantity : ";
                cin >> quantity;
                amount = quantity * price;
                cout << "Amount : " << amount;
                bill += amount;
            }
            else
            {
                cout << "\nPlease Enter Valid Choice..!\n";
                // cout << "\nPlease Enter Which Biriyani you would like to have? : ";
                // cin >> item;
                // exit(0);
            }
        }
        else
        {
            cout << "\nInvalid Choice..!";
            // cout << "\nPlease Enter your Choice : ";
            // cin >> choice;
            exit(0); // Terminate the program on invalid choice
        }

        cout << "\nWould you like to Order anything else? Y / N : ";
        cin >> response; // Read the customer's response

        if (response == 'n' || response == 'N')
        {
            // Display the final bill and exit

            cout << "\n-----------------------------------------------------";
            cout << "\nTotal Bill : " << bill;
            cout << "\nYour Order will be delivered within 40 Minutes.";
            cout << "\nThank You " << name << ", for Ordering from Tops Tech. Fast Food :)";
            exit(0); // Terminate the Program
        }
    }
};

// Main function to run the program
main()

{
    Choice_item obj; // Create an object of Choice_item class
    obj.getInfo();   // Get customer information

    while (1) // Infinite loop to keep showing the menu and taking orders until the customer chooses to exit
    {
        obj.menu();     // Display the menu
        obj.MyChoice(); // Handle the customer's choice and calculate the bill
    }
}
#include <stdio.h>

// choice : select choice
// qty : Quantity of each item
// bill : Total bill of items which is user buy
// amount : amount of each item wich is selected by user

int bill = 0;
menu() // Display the available Menu
{
    printf("---------Menu---------\n");
    printf("\n1. Pizza     Price = 180rs/pcs");
    printf("\n2. Burger    Price = 100rs/pcs");
    printf("\n3. Dosa      Price = 120rs/pcs");
    printf("\n4. Idali     Price = 50rs/pcs");
}

pizza_info()
{
    int qty, amount, price = 180;

    printf("\nYou have selected Pizza.");

    printf("\nEnter the Quantity : ");
    scanf("%d", &qty);

    amount = price * qty;
    printf("Amount : %d", amount);

    bill = amount + bill;
    // printf("\nTotal Bill is = %d", bill);
}

burger_info()
{
    int qty, amount, price = 100;

    printf("\nYou have selected Burger.");

    printf("\nEnter the Quantity : ");
    scanf("%d", &qty);

    amount = price * qty;
    printf("Amount : %d", amount);

    bill = amount + bill;
    // printf("\nTotal Bill is = %d", bill);
}

dosa_info()
{
    int qty, amount, price = 120;

    printf("\nYou have selected Dosa.");

    printf("\nEnter the Quantity : ");
    scanf("%d", &qty);

    amount = price * qty;
    printf("Amount : %d", amount);

    bill = amount + bill;
    // printf("\nTotal Bill is = %d", bill);
}

idali_info()
{
    int qty, amount, price = 50;

    printf("\nYou have selected Idali.");

    printf("\nEnter the Quantity : ");
    scanf("%d", &qty);

    amount = price * qty;
    printf("Amount : %d", amount);

    bill = amount + bill;
    // printf("\nTotal Bill is = %d", bill);
}

void main()
{
    printf("Welcome to Rana Fast Food\n\n");

    int choice, order;

    while (1)
    {
        // Display the menu from function
        menu();

        // Customer's choice
        printf("\n\nPlease Enter Your Choice... : ");
        scanf("%d", &choice);

        if (choice == 1)
        {
            pizza_info();
        }

        else if (choice == 2)
        {
            burger_info();
        }

        else if (choice == 3)
        {
            dosa_info();
        }

        else if (choice == 4)
        {
            idali_info();
        }

        else
        {
            printf("Invalid choice!!");
        }

        fflush(stdin); // Used for against buffer
        char choic1;
        printf("\n\nDo you want to continue press y for yes and n for no : ");
        scanf("%c", &choic1);

        // if Customer don't want to buy more any item
        if (choic1 == 'n' || choic1 == 'N')
        {
            printf("\nTotal Bill is = %d", bill);
            printf("\nThank You for Visiting.");
            break; // Terminate the program
        }
    }
}
#include <stdio.h>

void main()
{
    // choice : select choice
    // qty : Quantity of each item
    // bill : Total bill of items which is user buy
    // amount : amount of each item wich is selected by user
    int choice, qty, bill = 0, amount;

    printf("\nWelcome to Fast Food Adda\n\n");
    while (1)
    {
        printf("\n---------Menu---------\n");
        printf("\n1. Pizza     Price = 180rs/pcs");
        printf("\n2. Burger    Price = 100rs/pcs");
        printf("\n3. Dosa      Price = 120rs/pcs");
        printf("\n4. Idali     Price = 50rs/pcs");

        // Customer's Choice
        printf("\n\nPlease Enter Your Choice... : ");
        scanf("%d", &choice);

        if (choice == 1)
        {
            // price of item
            int price = 180;

            printf("\nYou have selected Pizza.\n");

            printf("\nEnter the Quantity : ");
            scanf("%d", &qty);

            amount = price * qty;
            printf("Amount : %d", amount);

            bill = amount + bill;
            printf("\nTotal Bill is = %d", bill);
        }

        else if (choice == 2)
        {
            // price of item
            int price = 100;

            printf("\nYou have selected Burger.\n");

            printf("\nEnter the Quantity : ");
            scanf("%d", &qty);

            amount = price * qty;
            printf("Amount : %d", amount);

            bill = amount + bill;
            printf("\nTotal Bill is = %d", bill);
        }

        else if (choice == 3)
        {
            // price of item
            int price = 120;

            printf("\nYou have selected Dosa.\n");

            printf("\nEnter the Quantity : ");
            scanf("%d", &qty);

            amount = price * qty;
            printf("Amount : %d", amount);

            bill = amount + bill;
            printf("\nTotal Bill is = %d", bill);
        }

        else if (choice == 4)
        {
            // price of item
            int price = 50;

            printf("\nYou have selected Idali.\n");

            printf("\nEnter the Quantity : ");
            scanf("%d", &qty);

            amount = price * qty;
            printf("Amount : %d", amount);

            bill = amount + bill;
            printf("\nTotal Bill is = %d", bill);
        }

        else
        {
            printf("Invalid choice!!");
        }

        fflush(stdin); // Used for against buffer
        char response;

        // Asking for More oredr to Customer
        // y for Continuing the order
        // n for stop the order and display the bill
        printf("\n\nDo you want to more oredr ? y & n ? : ");
        scanf("%c", &response);

        if (response == 'n' || response == 'N')
        {
            printf("\n\nTotal Bill : %d", bill);
            printf("\nThank you for visiting.");
            break; // Terminate the Program
        }
    }
}

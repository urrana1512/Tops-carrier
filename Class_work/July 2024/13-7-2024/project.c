#include <stdio.h>
void main()
{

    while (1)
    { // INFINITE LOOP

        printf("\n*********WELCOME*********\n");
        printf("\n1. Factorial");
        printf("\n2. Prime Number");
        printf("\n3. Fibonacci");
        printf("\n4. Odd-Even");
        printf("\n5. Exit");

        int choice;
        printf("\n\nEnter Choice : ");
        scanf("%d", &choice);

        if (choice == 1)
        {
            printf("\n------Welcome to Factorial------\n");

            int i, fac = 1, n;

            printf("\nEnter the number : ");
            scanf("%d", &n);

            for (i = 1; i <= n; i++)
            {
                fac = fac * i;
            }
            printf("\nFactorial of %d is %d\n", n, fac);
        }

        else if (choice == 2)
        {
            printf("\n------Welcome to Prime Number------\n");

            int n, i, c = 0;
            printf("\nEnter number : ");
            scanf("%d", &n);

            for (i = 1; i <= n; i++)
            {
                if (n % i == 0)
                {
                    c++;
                }
            }
            if (c == 2)
            {
                printf("%d is Prime.\n", n);
            }
            else
            {
                printf("%d is not Prime.\n", n);
            }
        }

        else if (choice == 3)
        {
            printf("\n------Welcome to Fibonacci Series------\n");
            int i, fTerm = 0, sTerm = 1, n, nexterm;

            printf("\nEnter Number : ");
            scanf("%d", &n);

            printf("%d\n%d\n", fTerm, sTerm);

            for (i = 3; i <= n; i++)
            {
                printf("%d\n", nexterm);
                fTerm = sTerm;
                sTerm = nexterm;
                nexterm = fTerm + sTerm;
            }
        }

        else if (choice == 4)
        {
            printf("\n------Welcome to Odd-Even------\n");
            int n;
            printf("\nEnter Integer : ");
            scanf("%d", &n);

            if (n % 2 == 0)
            {
                printf("%d is Even.\n\n", n);
            }
            else
            {
                printf("%d is Odd.\n\n", n);
            }
        }
        else if (choice == 5)
        {
            printf("\n******Thank You!!******\n");
            break;
        }
        else
        {
            printf("\n\nInvalid choice!!");
            break;
        }
    }
}

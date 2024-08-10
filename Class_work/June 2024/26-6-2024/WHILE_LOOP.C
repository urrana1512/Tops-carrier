// WHILE LOOP
#include <stdio.h>
void main()
{
    int i = 1; // INITIALIZE

    while (i <= 10) // CONDITION
    {
        printf("%d\n", i);
        i++; // INCREMENT
    }
}

// REVERSE PRINT
#include <stdio.h>
void main()
{
    int i = 10; // INITIALIZE

    while (i >= 1)
    {
        printf("%d\n", i);
        i--;
    }
}

// VALUE FROM USER
#include <stdio.h>
void main()
{
    int i, n; // INITIALIZE

    printf("Enter the number : ", i);
    scanf("%d", &i);

    while (i >= 1)
    {
        printf("%d\n", i);
        i--;
    }
}

// ODD EVEN AND SUM
#include <stdio.h>
void main()
{
    int i = 1, n, ev = 0, od = 0, evcount = 0, odcount = 0;

    while (i <= 5)
    {
        printf("\nEnter the number : ");
        scanf("%d", &n);

        if (n % 2 == 0)
        {
            printf("%d is even", n);
            ev++;
            evcount = evcount + n;
        }
        else
        {
            printf("%d is Odd", n);
            od++;
            odcount = odcount + n;
        }
        i++;
    }
    printf("\nnumbers of even are : %d", ev);
    printf("\nnumbers of odd are : %d", od);
    printf("\nSum of even numbers : %d", evcount);
    printf("\nSum of odd numbers : %d", odcount);
}

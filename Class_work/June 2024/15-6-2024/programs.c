// PROGRAM 6 : IF-ELSE LADDER STATEMENT - (START) --------------------->
#include <stdio.h>
void main()
{
    int n;
    printf("Enter Number : ");
    scanf("%d", &n);

    if (n == 0)
    {
        printf("%d is zero..!", n);
    }

    else if (n % 2 == 0)
    {
        printf("%d is even..!", n);
    }

    else
    {
        printf("%d is odd..!", n);
    }
}
// PROGRAM 6 : IF-ELSE LADDER STATEMENT - (END) <---------------------

// PROGRAM 7 : NESTED IF-ELSE STATEMENT - (START) --------------------->
#include <stdio.h>
void main()
{
    int n1, n2, n3;
    printf("Enter Number 1 : ");
    scanf("%d", &n1);
    printf("Enter Number 2 : ");
    scanf("%d", &n2);
    printf("Enter Number 3 : ");
    scanf("%d", &n3);

    if (n1 > n2)
    {
        if (n1 > n3)
        {
            printf("%d is Greatest", n1);
        }
        else
        {
            printf("%d is Greatest", n3);
        }
    }
    else
    {
        if (n2 > n3)
        {
            printf("%d is Greatest", n2);
        }
        else
        {
            printf("%d is Greatest", n3);
        }
    }
}
// PROGRAM 7 : NESTED IF-ELSE STATEMENT - (END) --------------------->

// PROGRAM 8 : NESTED IF-ELSE STATEMENT - (START) --------------------->
#include <stdio.h>
void main()
{
    int n1, n2, n3;
    printf("Enter Number 1 : ");
    scanf("%d", &n1);
    printf("Enter Number 2 : ");
    scanf("%d", &n2);
    printf("Enter Number 3 : ");
    scanf("%d", &n3);

    if (n1 > n2 && n1 > n3)
    {
        printf("%d is Greatest", n1);
    }
    else if (n2 > n1 && n2 > n3)
    {
        printf("%d is Greatest", n2);
    }
    else
    {
        printf("%d is Greatest", n3);
    }
}
// PROGRAM 8 : NESTED IF-ELSE STATEMENT - (END) --------------------->

// PROGRAM 9 : ACCEPT MARKS FROM USER AND CHECK PASS OF FAIL - (START) --------------------->
#include <stdio.h>
void main()
{
    int n;
    printf("Enter Marks : ");
    scanf("%d", &n)

        if (n >= 33 && n < 100)
    {
        printf("Student is PASS...");
    }
    else if (n > 100)
    {
        printf("Undefined...")
    }
    else
    {
        printf("Student is Falied...")
    }
}
// PROGRAM 9 : ACCEPT MARKS FROM USER AND CHECK PASS OF FAIL - (END) --------------------->

// PROGRAM 10 : READ TEMPERATURE - (START) --------------------->
#include <stdio.h>
void main()
{
    int Temp;

    printf("Enter Temperature : ");
    scanf("%d", &Temp);

    if (Temp <= 0)
    {
        printf("%d Freezing Weather", Temp);
    }
    else if (Temp > 0 && Temp <= 10)
    {
        printf("%d Very Cold Weather", Temp);
    }
    else if (Temp > 10 && Temp <= 20)
    {
        printf("%d Cold Weather", Temp);
    }
    else if (Temp > 20 && Temp <= 30)
    {
        printf("%d Noraml Temperature", Temp);
    }
    else if (Temp > 30 && Temp <= 40)
    {
        printf("%d Its Hot", Temp);
    }
    else
    {
        printf("%d Its Very Hot", Temp);
    }
}
// PROGRAM 10 : READ TEMPERATURE - (START) --------------------->